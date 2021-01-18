import React, {useEffect, useContext} from 'react';
import RestaurantFetch from '../apis/RestaurantFetch'
import {RestaurantsContext} from "../context/RestaurantsContext";

const RestaurantList = (props) => {
    const {restaurants, setRestaurants} = useContext(RestaurantsContext)
    useEffect(() => {
        async function fetchData() {
            try {
                const response = await RestaurantFetch.get("/")
                console.log(response);
                setRestaurants(response.data.restaurants)
            } catch (e) {
            }
        }
        fetchData();
    }, [])

    return (
        <div className="list-group">
            <table className="table table-dark">
                <thead>
                <tr className="table bg-primary">
                    <th scope="col">Restaurant</th>
                    <th scope="col">Location</th>
                    <th scope="col">Price Range</th>
                    <th scope="col">Rating</th>
                    <th scope="col">Edit</th>
                    <th scope="col">Delete</th>
                </tr>
                </thead>
                <tbody>

                {restaurants && restaurants.map(restaurant => {
                    return (
                        <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.location}</td>
                            <td>{"$".repeat(restaurant.price_range)}</td>
                            <td>{restaurant.rating}</td>
                            <td>
                                <button className="btn btn-warning">Update</button>
                            </td>
                            <td>
                                <button className="btn btn-danger">Delete</button>
                            </td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
    )
}

export default RestaurantList