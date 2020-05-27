import React, { Component } from 'react';
import Starship_API from '../services/sw-api';
import { Link } from 'react-router-dom';


class Starship extends Component{
    state = {
        starship: null
    }

    async componentDidMount() {
        const { starshipId } = this.props.location.state
        console.log(starshipId)
        const foundStarship = await Starship_API.getOneStarship(starshipId) 
        console.log(foundStarship)
        this.setState({
          starship: foundStarship
        })
    }

    render() {
        return(
            
            this.state.starship ?
            <>
                
                <h2>{this.state.starship.name}</h2>
                <h6>{this.state.starship.model}</h6>
                <Link to='/'>
                    Return  
                </Link>
            </>
            :
           
            <>
            <h1>Loading...</h1>
            </>
        )
    }
}

export default Starship;