import React, { useState, useEffect } from 'react';
import Moment from 'react-moment';
import { useNavigate } from 'react-router-dom';

const PastOrders = () => {
    const navigate = useNavigate()

    const [pastOrdersData, setPastOrdersData] = useState([])
    useEffect(() => {
        fetch('https://simplisaleshw.cotunnel.com/graphql', {
            method: 'POST', // or 'PUT'
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + window.localStorage.getItem('token')
            },
            body: JSON.stringify({
                query: `query {
                    orders {
                        id
                        orderNo
                        orderName
                        status
                        currency
                        details {
                            product{
                                description1
                            }
                            quantity
                            price
                        }
                        orderDate
                        total

                    }
                  }`})
        })
            .then(response => response.json())
            .then(result => {
                console.log("past orders", result)

                if (result.errors){
                    navigate('/')

                }else{
                    setPastOrdersData(result?.data?.orders)
                }
                


            })
            .catch(error => {
                console.error('Error:', error);
            });
    }, [!pastOrdersData])
    return (

        <div className="container  p-5 " style={{overflow:'auto'}}>
            <table className="table table-borderless table-responsive">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Order Date</th>
                        <th scope="col">Order Summary</th>
                        <th scope="col">Status</th>
                        <th scope="col">Total</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {pastOrdersData?.map((order, i) => {
                        return <tr key={order.id}>
                            <th scope="row">{i}</th>
                            <td>{<Moment format="YYYY/MM/DD" date={order.orderDate} />}</td>
                            <td>{order.details.length} products</td>
                            <td>{order.status}</td>
                            <td>{order.total} {order.currency}</td>
                            <td><button type="button" className="btn btn-warning">Order Details</button>
                            </td>

                            <td></td>
                        </tr>
                    })
                    }


                </tbody>
            </table>


        </div>
    )
}
export default PastOrders