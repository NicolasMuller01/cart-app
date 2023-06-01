import { CartView } from "./components/CartView"
import { CatalogView } from "./components/CatalogView"

export const CartApp = () => {
  return (
	  <>
		  <div className='container'>
			  <CatalogView/>
			  //table
			  <div className='my-4 w-50'>
				 <CartView></CartView>
			  </div>
		  </div>
	  </>
  )
}
