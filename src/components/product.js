
import React from 'react';
import { NavLink } from 'react-router-dom';

import { useRef } from "react";

const Product = (props) => {
  
// console.log("props product",props)
    const desc=" "
    return (
        <div>
            <div className="col-12 col-md-3 col-sm-1 p-1 m-1" >
                <div className="card mb-3" style={{ "width": "300px", }}>
                    <NavLink to={`${props.data.id}/ProductDesc`}><img src={''} className="card-img-top" alt="..." /></NavLink>

                    <div className="card-body">
                        <h4 className="card-title">{props.data.description1}</h4>
                        <p className='fw-bold text-danger'> Price: 0$</p>
                        <h6 className='text-success' >Categories: </h6>{props.data.categories.map((category)=>{return category.name+", "})}
                        <p className="card-text">{props.data.description2} </p>
                        
                    </div>
                </div>

            </div>
            
        </div>

    )
}
export default Product
