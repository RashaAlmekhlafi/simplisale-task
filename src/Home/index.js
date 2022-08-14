import React, { useState, useEffect } from 'react';
import Product from '../components/product'

const Home = () => {

    const [productsData, setProductsData] = useState([])
    useEffect(() => {
        fetch('https://simplisaleshw.cotunnel.com/graphql', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            },
            body: JSON.stringify({
                query: `query {
                products (index:0 , limit:10){
                  products{
                    id
                    
                    description1
                    description2
                    categories{
                      name
                    }
                    
                    
                  }
                }
              }`})
        })
            .then(response => response.json())
            .then(result => {
                console.log("products", result)
                setProductsData(result?.data?.products?.products)


            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [!productsData])
    return (

        <div className="container d-flex  flex-wrap  ">
            {productsData.map((product, i) => {
                return <Product data={product} key={product.id} />
            })
            }

        </div>
    )
}
export default Home