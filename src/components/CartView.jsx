import React from 'react'

export const CartView = () => {
    return (
        <>
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
                        <td className='text-end' colSpan={2}>Total</td>
                        <td className='text-end'>$ 100</td>
                    </tr>
                </tfoot>
            </table>
        </>
    )
}
