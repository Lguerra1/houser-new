import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Wizard extends Component {
    constructor(props) {
        super()
        this.state = {
            name: '',
            address: '',
            city: '',
            state: '',
            zipcode: '',
        }
    }

    updateName(val) {
        this.setState({ name: val })

    }

    updateAddress(val) {
        this.setState({ address: val })

    }

    updateCity(val) {
        this.setState({ city: val })

    }

    updateState(val) {
        this.setState({ state: val })

    }

    updateZipCode(val) {
        this.setState({ zipcode: val })

    }

    render() {
        return (
            <div>

                <input onChange={(e) => this.updateName(e.target.value)} />
                <input onChange={(e) => this.updateAddress(e.target.value)} />
                <input onChange={(e) => this.updateCity(e.target.value)} />
                <input onChange={(e) => this.updateState(e.target.value)} />
                <input onChange={(e) => this.updateZipCode(e.target.value)} />


                <Link to='/'><button>Cancel</button></Link>


            </div>
        )
    }
}