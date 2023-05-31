import React from 'react'

export const CartApp = () => {
  return (
	  <>
		  <div className='container'>
			  <h3>Cart App</h3>
			  <div className='row'>
				  <div className='col'>
					  <div className='card'>
						  <div className='card-body'>
							  <h5 className='card-title'>Teclado mecanico</h5>
							  <p className='card-text'>Teclado mecanico switches red</p>
							  <p className='card-text'>$ 100</p>
							  <button className='btn btn-success'>Add</button>
						  </div>
					  </div>
				  </div>
			  </div>

			  //table
			  <div className='my-4 w-50'>
			  <h3>Carro de compras</h3>
				  <table className="table">
					  <thead>
						  <tr>
							  <th scope="col">Name</th>
							  <th scope="col">Price</th>
							  <th scope="col">Quantity</th>
							  <th scope="col">Total</th>
							  <th scope="col">Delete</th>
						  </tr>
					  </thead>
					  <tbody>
						  <tr>
							  <th>1</th>
							  <td>Mark</td>
							  <td>Otto</td>
							  <td>@mdo</td>
						  </tr>
					  </tbody>
					  <tfoot>
						<tr>
							<td  className='text-end' colSpan={2}>Total</td>
							<td className='text-end'>$ 100</td>
						</tr>
					  </tfoot>
				  </table>
			  </div>
		  </div>
	  </>
  )
}
