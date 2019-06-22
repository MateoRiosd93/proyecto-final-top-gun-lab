import React, {Component} from 'react';
import axios from 'axios';
import {BASE_LOCAL_ENDPOINT} from '../constants';

class Employee extends Component {


    constructor(props){
        super(props);
        this.state= {
            employee:{
                name: '',
                job:'',
                area:'',
                imgSrc:'',
                points:''
            }, 
            error: ''
        }
    }


    getEmployeeID = () => {
        const {match: {params: {id}}} = this.props;
        axios.get(`${BASE_LOCAL_ENDPOINT}/employee/${id}`)
        .then(response => {
            this.setState({
                employee: response.data,
                error: ''
            })
        })
        .catch(error => {
            this.setState({
                error: error.message
            })
        })
    }

    componentDidMount = () => {
        this.getEmployeeID();
    }
    render(){

        const {
            employee:{
                name,
                job,
                area,
                imgSrc,
                points
            }
        } = this.state
        return ( 
            <div className="container-employee">
                <p>Desde el empleado{name}</p>
            </div>
         );
    }
    
}
 
export default Employee;