import React, { Component } from 'react';
import House from '../house/House';

export default class Dashboard extends Component {
    render() {
        return (
            <div>
                <h1>Dashboard</h1>
                <House />
            </div>
        )
    }
}