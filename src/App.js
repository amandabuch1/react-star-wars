import React from 'react';
import Starship_API from './services/sw-api';
import Starship from './components/Starship';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import Starships from './components/Starships';

// need to be a class if i want to use 
class App extends React.Component {
  state = {
    allStarships: null
  }

  async componentDidMount() {
    const foundStarships = await Starship_API.getAllStarships() 
    console.log(foundStarships)
    this.setState({
      allStarships: foundStarships
    })
  }
  render(

  ) {
    return(
      <Router>
        <div className="App">
          <Switch>
            <Route path="/starships/:id" render={(props)=>
                <Starship 
                  starshipId={this.state.allStarships}
                  {...props}
                />
              } /> 

            <Route path="/" render={(props)=>
              <Starships 
                starships={this.state.allStarships}
                {...props}
              />
            } /> 
          </Switch>
        </div>
      </Router>
    )


    
    // console.log(this.state.allStarships)
    // const starshipComponents = this.state.allStarships ? this.state.allStarships.map((ship, i)=>{
    //   return  <button key={i}>
    //             <Starship shipData={ship}/>
    //           </button>
    // }) : null
    // return (
    //   <div className="App">
        
    //     {starshipComponents}
    //   </div>
    // );
  }
}
export default App;