import { useProductsService } from '@/services/products';
import { useEffect } from 'react';
import { ServerError, Spinner } from '@/shared/';
import clsx from 'clsx';

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

    <div className="mt-12">
      <table className="table-auto w-full hover">
        <thead>
            <tr>
              <th className="text-left">PRODUCTS</th>
              <th className="text-left">IMAGE</th>
              <th>COST</th>
              <th>DELETE</th>
            </tr>
        </thead>

        <tbody>

        {  
        state.products.map(item =>{
          return(
          <tr 
          key={item.id}
          className={clsx(
            'cursor-pointer', 
            {'bg-sky-200 text-black': item.id === state.activeItem?.id}
            )}
          onClick={() => {
            actions.setActiveItem(item)
          }}
          >
              <td>{item.name}</td>
              <td>
                {item.tmb && <img src={item.tmb} alt={item.name} className="h-16 rounded-xl"/>}
              </td>
              <td className="text-center">{item.cost}</td>
              <td className="text-center">
              <i
                className="fa fa-trash"
                onClick={(event) => {
                event.stopPropagation()
                actions.deleteProduct(item.id)
                }}
              />
              </td>
          </tr>

          )
        })

        }
        </tbody>
      </table>
    </div>
  </div>
  )
}
