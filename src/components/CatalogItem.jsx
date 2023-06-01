import React from 'react'

export const CatalogItem = ({prod}) => {

        const styles = {
            width: '18rem'
        }

    return (
        <>
            <div className='card' style={styles}>
                <div className='card-body'>
                    <h5 className='card-title'>{prod.name}</h5>
                    <p className='card-text'>{prod.description}</p>
                    <p className='card-text'>${prod.price}</p>
                    <button className='btn btn-success'>Add</button>
                </div>
            </div>
        </>
  )
}
