import React, {useState} from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import './index.css'
import Slider from "react-slick"
import {useHistory} from "react-router-dom"
import bannerimg1 from './images/banner-1.png'
import bannerimg2 from './images/banner-2.png'
import bannerimg3 from './images/banner-3.png'
import restaurant1 from './images/restaurant-1.png'
import restaurant2 from './images/restaurant-2.png'
import restaurant3 from './images/restaurant-3.png'
import restaurant4 from './images/restaurant-4.png'
import restaurant5 from './images/restaurant-5.png'
import restaurant6 from './images/restaurant-6.png'
import RestaurantList from './components/RestaurantList'
import IndRestaurant from './components/IndRestaurant'
import Dish1 from './images/dish-1.png'
import Dish2 from './images/dish-2.png'
import Dish3 from './images/dish-3.png'
import Dish4 from './images/dish-4.png'
import Dish5 from './images/dish-5.png'
import Dish6 from './images/dish-6.png'
import { Link } from 'react-router-dom'
import react from 'react'

export function Restaurant() {
  const [searchfilter, setSearchfilter] = useState('')
  const [restaurantstate, setRestaurantstate] = useState('')

  const history = useHistory()

  const restaurantlist = [
    {name: 'Heirloom Cafe', location: 'Lal Bagh', image: restaurant1, recipename: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"], recipeimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6] },
    {name: 'Lord of the Fries', location: 'Bannerghatta', image: restaurant2, recipename: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"], recipeimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6] },
    {name: 'Rich Table', location: 'Nandi Hills', image: restaurant3, recipename: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"], recipeimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6] },
    {name: 'barbecue Restaurant', location: 'Cubbon Park', image: restaurant4, recipename: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"], recipeimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6] },
    {name: 'Montana', location: 'Vidhana Soudha', image: restaurant5, recipename: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"], recipeimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6] },
    {name: 'Pizza Kitchen', location: 'Ramanagra', image: restaurant6, recipename: ['Dosa', 'Idli', 'Chapathi', 'Poori', "meals", "Naan"], recipeimg: [Dish1,Dish2,Dish3,Dish4,Dish5,Dish6] },
  ]

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000
  }

  const serchfilter = (searchinput) => {
    setSearchfilter(searchinput)
  }

  const setRestaurantstatefunc = (resname) => {    

    history.push(`/home/${resname.split(' ').join('').toLowerCase()}`)

    window.scrollTo(0, 0);
  }

  return(
    <div className="restaurant-body">
      {        
        <div>
          <div className="restaurant-banner">
            <Slider {...settings}>
              <div className="banner-item">
                <img src={bannerimg1} alt="banner-1" />
              </div>
              <div className="banner-item">
                <img src={bannerimg2} alt="banner-2" />
              </div>
              <div className="banner-item">
                <img src={bannerimg3} alt="banner-3" />
              </div>
            </Slider>
          </div>
          <div className="restaurant-list">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6">
                  <h2>Nearby Restaurants</h2>
                </div>
                <div className="col-12 col-sm-6 text-right search-res-div">
                  <input type='text' value={searchfilter} name="search-res" className="searchinput" onChange={(e) => serchfilter(e.target.value)} placeholder="Search Restaurant..." />
                  <i class="fa fa-search"></i>
                </div>          
              </div>
              <div className="restaurant-list-container row">
                {
                  restaurantlist.map((reslist, idx) => (
                    ((searchfilter === '') || (searchfilter !== '' && reslist.name.toLowerCase().indexOf(searchfilter) !== -1)) && (
                      <RestaurantList resname={reslist.name} resloc={reslist.location} resimg={reslist.image} setRestaurantstate={setRestaurantstatefunc} />
                    )
                  ))
                }
              </div>
            </div>
          </div>
        </div>        
      }      
    </div>
  )
}

ReactDOM.render(<App home={Restaurant} restaurant={IndRestaurant} />, document.getElementById('root'))