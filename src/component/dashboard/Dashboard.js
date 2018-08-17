import React, { Component } from 'react';
import House from '../house/House';
import { Link } from 'react-router-dom'
import axios from 'axios'

export default class Dashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            houses: []
        }
        this.getAllHouses = this.getAllHouses.bind(this)
    }


    componentDidMount() {
        axios
            .get(`/api/houses`)
            .then(response => {
                console.log(response.data);
                this.setState({
                    houses: response.data
                })
            })
    }

    getAllHouses() {
        axios.get('/api/houses')
            .then(response => {
                this.setState({ houses: response.data })
            })
    }

    render() {
        let displayHouses = () => {
            this.state.houses.map(house => {
                let { id, price, address, city, state, zip } = house
                return (

                    <div key={id}>
                        <House
                            id={id}
                            price={price}
                            address={address}
                            city={city}
                            state={state}
                            zip={zip}
                            />
                    </div>
                )
            })
        }
        return (
            <div>
                <h1>Dashboard</h1>
                
                <Link to='/wizard'><button>Add New Property</button></Link>
                {displayHouses()}

            </div>
        )
    }
}