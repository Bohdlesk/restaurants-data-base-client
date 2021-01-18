import React, {useState, useContext} from 'react';
import RestaurantFetch from '../apis/RestaurantFetch'
import {RestaurantsContext} from "../context/RestaurantsContext";

const AddRestaurant = () => {
    const {addRestaurant} = useContext(RestaurantsContext)
    const [name, setName] = useState("")
    const [location, setLocation] = useState("")
    const [priceRange, setPriceRange] = useState("Price Range")

    const handleSubmit = async (event) => {
        event.preventDefault()
        try{
            const response = await RestaurantFetch.post("/", {
                name,
                location,
                price_range: priceRange,
            })
            addRestaurant(response.data.restaurant)
            console.log(response);
        }catch (err) {
            
        }
    }
    return (
        <div className="mb-4">
            <form action="">
                <div className="form-row" style={{"display": "flex"}}>
                    <div className="col">
                        <input value={name} onChange={event => {
                            setName(event.target.value)
                        }} type="text" className="form-control" placeholder="Name"/>
                    </div>
                    <div className="col">
                        <input value={location} onChange={event => {
                            setLocation(event.target.value)
                        }} className="form-control" type="text" placeholder="Location"/>
                    </div>
                    <div className="col">
                        <select value={priceRange} onChange={event => {
                            setPriceRange(event.target.value)
                        }} className="form-select">
                            <option disabled>Price Range</option>
                            <option value="1">1$</option>
                            <option value="2">2$</option>
                            <option value="3">3$</option>
                            <option value="4">4$</option>
                            <option value="5">5$</option>
                        </select>
                    </div>
                    <button onClick={handleSubmit} type="submit" className="btn btn-primary">Add Rest</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant