import React from 'react'
import { getProducts } from '../services/productService'
import { useState, useEffect } from 'react'
import { CatalogItem } from './CatalogItem'

export const CatalogView = () => {

    const [products, setProducts] = useState([])

    useEffect(() => {
        setProducts(getProducts());
    }, [products])

    return (
        <>
            <h3>Cart App</h3>
            <div className='row'>
                {products.map(prod => (
                    <div className='col' key={prod.id}>
                        <CatalogItem prod={prod}></CatalogItem>
                    </div>
                ))}
            </div>
        </>
    )
}
