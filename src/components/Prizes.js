import React, { Component } from 'react';
import {BASE_LOCAL_ENDPOINT} from '../constants';
import { NavLink } from 'react-router-dom';
import Search from './Search';
import ShowElements from './ShowElements';
import axios from 'axios';
import ModalAppPrize from './ModalAddPrize';
import '../styles/Prizes.css';

class Prizes extends Component {

    state = {
        prizes: [],
        error: false,
        searchName:'',
        showModal: false,
        createPrizeError:false
    }


    getPrizesDB = () => {
        axios.get(`${BASE_LOCAL_ENDPOINT}prizes`)
        .then(response => {
            const prizes = response.data.sort((element1,element2) => element1.points - element2.points)
            this.setState({
                prizes
             });
        })
        .catch(error => {
            this.setState({
                error: true
            })
        });
    }


    componentDidMount = () => {
        this.getPrizesDB();
    }

    searchNames = letter => {
        const searchName = letter;
        this.setState({
            searchName
        })
    }


    handleShowModal = e =>{
        this.setState(prevState =>({
            ...prevState,
            showModal: !prevState.showModal
        }))
    }

    createPrize =  ( e, prize )  => {
        const {name, description, points, imgSrc} = prize;
        axios.post(`${BASE_LOCAL_ENDPOINT}prizes`, {
            name,
            description,
            points,
            imgSrc
        }, {
            headers: { "Content-Type": "application/json"}
        })
        .then (() => {this.getPrizesDB()} )
        .catch(() => {this.setState({createPrizeError:true})})

        this.handleShowModal(e);
    }

    render() {
        const {prizes,searchName, showModal} = this.state;
        const prizesFilter = prizes.filter(prize => prize.name.toLowerCase().includes(searchName.toLowerCase()));
        return (
            <div className="container-search-prizes">
                <div className="container-search-add">
                    <Search
                        searchNames={this.searchNames}
                        mensaje='Do you want to search for an Prize?'
                    />
                    <button className="buton-add" onClick={this.handleShowModal}> ADD </button>
                </div>
                <div className="container-prizes">
                    {
                        (showModal && <ModalAppPrize
                            handleShowModal={this.handleShowModal}
                            createPrize={this.createPrize}
                                       />)
                    }
                    {
                        prizesFilter.map(({id, name, points, imgSrc }) =>
                            <NavLink key={id} to={`/prizes/${id}`}>
                                <ShowElements
                                    key={id}
                                    name={name}
                                    imgSrc={imgSrc}
                                    points={points}
                                    />
                            </NavLink>
                        )
                    }
                </div>
            </div>
        )
    }
}


export default Prizes;