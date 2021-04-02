import React, { Component } from 'react';
import axios from 'axios';
import './style.css';

class About extends Component {
    constructor(props) {
        super(props);
        this.state = {
            class: []
        }
    }
    componentDidMount() {
        axios.get('http://localhost:3001/about')
            .then(res => {
                console.log('res: ', res.data);
                this.setState({ class: res.data });
            })
            .catch(err => {
                console.log(err);
            });
    }
    renderTableData() {
        return this.state.class.map((stud, index) => {
            const {id, name, address} = stud;
            return (
                <tr key={id}>
                    <td>{id}</td>
                    <td>{name}</td>
                    <td>{address}</td>
                </tr>
            )
        })
    }

    render() {
        let elem = this.state.class.map(ele => {
            return (
                <tr>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <tr>{ele.address}</tr>
                </tr>
            )
        })
        return (
            <div>
                <h1 id='title'>Students of our Class</h1>
                <table id='students'>
                    <thead>
                        <tr id='header'>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>STATE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.renderTableData()}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default About;