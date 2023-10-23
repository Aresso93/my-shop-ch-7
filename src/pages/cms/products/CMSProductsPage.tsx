import { useProductsService } from '@/services/products';
import { useEffect } from 'react';
import { ServerError, Spinner } from '@/shared/';
import { CMSProductsList } from './components/CMSProductsList';
import { CMSProductForm } from './components/CMSProductForm';

export function CMSProductsPage() {
  const {state, actions} = useProductsService()

  useEffect(() => {
    actions.getProducts()

  }, [])

  return (
    <div>
    <h1 className="title">CMS</h1>

    {state.pending && <Spinner />}
    {state.error && <ServerError message={state.error} />}

    <CMSProductForm
    activeItem={state.activeItem}
    onClose={actions.resetActiveItem}
    onAdd={(item)=> actions.addProduct(item)}
    onEdit={(item)=> actions.editProduct(item)}
    />

    <CMSProductsList
    items={state.products}
    activeItem={state.activeItem}
    onEditItem={actions.setActiveItem}
    onDeleteItem={actions.deleteProduct}
    />

    <button className='btn primary' onClick={()=> actions.setActiveItem({})}>
      ADD NEW
    </button>

  </div>
  )
}
