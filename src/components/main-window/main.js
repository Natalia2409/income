import React, {Component} from 'react';
import './main.css';
import Categories from '../categories/categories';
import Menu from '../menu/menu';
import Income from '../income/income';
import Modal from '../modal/modal';

export default class Main extends Component {
    state = {
        date: ""
    };

    componentDidMount() {
        this.getDate();
    }
    
    getDate = () => {
        let date = new Date().toDateString();
        this.setState({ date });
    };

    render() {
        const { date } = this.state;
        return (
            <div className="wrapper">
                <div className="date">{date}</div>
                <Categories/>
                <Menu/>
                <Income/>
            </div>
        )
    }
}