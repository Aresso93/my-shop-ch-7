import { useReducer } from "react";
import { productsReducer, initialState } from "./products.reducer";
import * as ProductsApi from "./products.api";
import { Product } from "@/model/product";

export function useProductsService(){
    const [state, dispatch] = useReducer(productsReducer, initialState);
    
    async function getProducts(){
        dispatch({type: 'pending', payload: true})
        try{
            const resp = await ProductsApi.get()
            dispatch({type: 'productsGetSuccess', payload: resp.items})

        } catch (err){
            dispatch({type: 'error', payload: 'Prodotti non caricati'})
        }
        
      }

      async function deleteProduct(id:string){
        dispatch({type: 'pending', payload: true})
        try{
            const resp = await ProductsApi.remove(id)
            dispatch({type: 'productDeleteSuccess', payload: id})

        } catch (err){
            dispatch({type: 'error', payload: 'Prodotti non cancellati'})
        }
        
      }

      async function addProduct(product: Partial<Product>){
        dispatch({type: 'pending', payload: true})
        try{
            const resp = await ProductsApi.add(product)
            dispatch({type: 'productAddSuccess', payload: resp})

        } catch (err){
            dispatch({type: 'error', payload: 'Prodotti non aggiunti'})
        }
        
      }

      async function editProduct(product: Partial<Product>){
        dispatch({type: 'pending', payload: true})
        try{
            const resp = await ProductsApi.edit(product)
            dispatch({type: 'productEditSuccess', payload: resp})

        } catch (err){
            dispatch({type: 'error', payload: 'Prodotti non modificati'})
        }
        
      }

      function setActiveItem(product: Product | {}){
        dispatch({type: 'productSetActive', payload: product})
      }

      function resetActiveItem(){
        dispatch({type: 'productSetActive', payload: null})
      }

      return{ 
        actions: {
            getProducts,
            deleteProduct,
            addProduct,
            editProduct,
            setActiveItem,
            resetActiveItem
        },
        state
        }
}