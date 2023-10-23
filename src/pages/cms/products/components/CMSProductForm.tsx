import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { Product } from "@/model/product"
import clsx from "clsx"

declare var cloudinary: any;

export interface CMSProductFormProps {
    activeItem: Partial<Product> | null;
    onClose: () => void;
    onAdd: (product: Partial<Product>) => void;
    onEdit: (product: Partial<Product>) => void;
}

const initialState: Partial<Product> = {
    name: '', cost: 0, description: '', tmb: '', img: ''
}

export function CMSProductForm(props: CMSProductFormProps){
    const [formData, setFormData] = useState(initialState);
    const [dirty, setDirty] = useState<boolean>(false);

    useEffect(() => {

        if (props.activeItem?.id) {
            setFormData({...props.activeItem})
        } else {
            setFormData(initialState)
        }
    }, [props.activeItem])

    function changeHandler(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>){
        const val = event.currentTarget.value;
        const name = event.currentTarget.name;
        setFormData(state => ({...state, [name]: val}));
        setDirty(true);
    }

    function saveHandler(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
        if(props.activeItem?.id){
            props.onEdit(formData);
        } else {
            props.onAdd(formData);
            
        }
        
    }
    
    function uploadHandler(){
        const uploadWidget = cloudinary.openUploadWidget(
            {
                cloudName: 'dho3eksv0',
                uploadPreset: 'ml_default',
                sources: ['local', 'url', 'camera']
            },
            function(error: any, result: any) {
                if (!error && result.event === 'success') {
                    const img = result.info.url;
                    const tmb = result.info.thumbnail_url;
                    setFormData(state => ({...state, img, tmb}))
                }
                
            }
        )

        uploadWidget.open();
    }

    const isNameValid = formData.name?.length;
    const isCostValid = formData.cost! > 0; 
    const isDescriptionValid = formData.description?.length;
    const isValid = isNameValid && isCostValid && isDescriptionValid 
    

    return (
    <div className={clsx(
        "fixed bg-slate-200 z-10 text-black top-0 w-96 h-full transition-all overflow-auto",
        {'-right-96': !props.activeItem, 'right-0': props.activeItem}
    )}>

        <form onSubmit={saveHandler}>

        <div className="flex justify-around h-16">
            <button 
                className="text-white w-1/2 bg-green-500 hover:bg-green-600 disabled:opacity-30"
                disabled={!isValid}
                type="submit"
                >SAVE
            </button>
            <button 
                className="text-white w-1/2 bg-slate-500 hover:bg-slate-600"
                onClick={props.onClose}
                type="button"
                >CLOSE</button>
        </div>

        {
            formData.img &&
            <img src={formData.img} alt={formData.name} className="w-full"/>
        }

        <div className="flex flex-col gap-3 mx-3 mt-16">
            Product Name
            <input
            className={clsx({'error': !isNameValid && dirty})} 
            type="text" 
            value={formData?.name}
            name="name"
            onChange={changeHandler}/>

            Product Cost
            <input
            className={clsx({'error': !isCostValid && dirty})} 
            type="number" 
            value={formData?.cost}
            name="cost"
            onChange={changeHandler}/>
            Description
            <textarea
            className={clsx({'error': !isDescriptionValid && dirty})}
            value={formData.description}
            name="description"
            onChange={changeHandler}
            ></textarea>

        </div>

        <button className="btn primary" onClick={uploadHandler}>
            Upload Picture
        </button>

        </form>

        <pre>{JSON.stringify(formData, null, 2)}</pre>
        
    </div>
    )
}