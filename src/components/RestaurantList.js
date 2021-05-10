import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function RestaurantList(props) {

    const [restlinks, setRestlinks] = useState()

    const {
        resname,
        resloc,
        resimg,
        setRestaurantstate
    } = props

    return(        
        <div className="col-12 col-sm-6 col-md-6">
            {/* <Link to={'/home/'+resname.split(' ').join('').toLowerCase()} className="restaurant-list-box-link" onClick={(e) => setRestaurantstate(resname)} > */}
            <div className="restaurant-list-box" onClick={(e) => setRestaurantstate(resname)}>
                <div className="row align-items-center">
                    <div className="restaurant-list-box-left col-12 col-sm-5">
                        <img src={resimg} alt="" />
                    </div>
                    <div className="restaurant-list-box-right col-12 col-sm-7">
                        <h4>{resname}</h4>
                        <p>{resloc}</p>
                    </div>
                </div>
            </div>
            {/* </Link> */}
        </div>
    )
}