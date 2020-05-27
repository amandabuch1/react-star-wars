import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Starships extends Component{
    render() {
        return(
            <>

            {
                this.props.starships ? 
                this.props.starships.map((p, i) => 
                    <button key={i}>
                    <Link to={{pathname: `/starships/${p.url.split("/")[p.url.split("/").length-2]}`, state:{starshipId: p.url.split("/")[p.url.split("/").length-2]}}} >
                        {p.name}
                    </Link>
                    </button>
                )
                :
                <>
                    <h1>Loading</h1>
                </>
                // null
            }
           

            </>
        )
    }
}

export default Starships;