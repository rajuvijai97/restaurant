import React, {useEffect, useState} from 'react'
import restaurant1 from '../images/restaurant-1.png'
import restaurant2 from '../images/restaurant-2.png'
import restaurant3 from '../images/restaurant-3.png'
import restaurant4 from '../images/restaurant-4.png'
import restaurant5 from '../images/restaurant-5.png'
import restaurant6 from '../images/restaurant-6.png'
import Dish1 from '../images/dish-1.png'
import Dish2 from '../images/dish-2.png'
import Dish3 from '../images/dish-3.png'
import Dish4 from '../images/dish-4.png'
import Dish5 from '../images/dish-5.png'
import Dish6 from '../images/dish-6.png'

export default function IndRestaurant(props) {

    const [restdetails, setRestdetails] = useState([])

    const urlsegment = window.location.href.split("/").pop()

    const restaurantlist = [
        {name: 'Heirloom Cafe', location: 'Lal Bagh', image: restaurant1},
        {name: 'Lord of the Fries', location: 'Bannerghatta', image: restaurant2, recipe: [{rcpname: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"],rcpimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6]}] },
        {name: 'Rich Table', location: 'Nandi Hills', image: restaurant3, recipe: [{rcpname: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"],rcpimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6]}] },
        {name: 'barbecue Restaurant', location: 'Cubbon Park', image: restaurant4, recipe: [{rcpname: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"],rcpimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6]}] },
        {name: 'Montana', location: 'Vidhana Soudha', image: restaurant5, recipe: [{rcpname: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"],rcpimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6]}] },
        {name: 'Pizza Kitchen', location: 'Ramanagra', image: restaurant6, recipe: [{rcpname: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"],rcpimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6]}] },
    ]

    const recipe =  [
        {rcpname: 'Dosa' , rcpimg: Dish1 },
        {rcpname: 'Idli' , rcpimg: Dish2 },
        {rcpname: 'Chapathi' , rcpimg: Dish3 },
        {rcpname: 'Poori' , rcpimg: Dish4 },
        {rcpname: 'meals' , rcpimg: Dish5 },
        {rcpname: 'Naan' , rcpimg: Dish6 },
    ]

    useEffect(() => {
        switch (urlsegment) {
            case 'heirloomcafe':
                setRestdetails(restaurantlist[0]);
                break;
            case 'lordofthefries':
                setRestdetails(restaurantlist[1]);
                break;
            case 'richtable':
                setRestdetails(restaurantlist[2]);
                break;
            case 'barbecuerestaurant':
                setRestdetails(restaurantlist[3]);
                break;
            case 'montana':
                setRestdetails(restaurantlist[4]);
                break;
            case 'pizzakitchen':
                setRestdetails(restaurantlist[5]);
                break;
            default:
                setRestdetails(restaurantlist[0]);
        }
    }, [])
    
    return(
        <div className="restaurant-page">
            <div className="indv-restbanner">
                <h3>Restaurant</h3>
            </div>
            <div className="container">
                <h2 className="restaurant-page-header" >{restdetails.name}</h2>
                <h5><i class="fa fa-map-marker"></i> {restdetails.location}</h5>
                <br></br>
                <p className="restaurant-details-para">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <div className="restaurant-details row">
                    <div className="col-12 col-sm-6">
                        <div className="restaurantpg-image">
                            <img src={restdetails.image} alt="" />
                        </div>
                    </div>
                    <div className="restaurantpg-details col-12 col-sm-6">
                        <h3 className="restaurantpg-heading">Recipes</h3>
                        <div className="row">
                            {
                                recipe.map((rcp, idx) => (
                                    <div className="col-12 col-sm-4">
                                        <div className="restaurantpg-box">
                                            <img src={rcp.rcpimg} alt="" />
                                            <h5 className="restaurantpg-dishname">{rcp.rcpname}</h5>
                                        </div>
                                    </div>
                                ))
                            }                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}