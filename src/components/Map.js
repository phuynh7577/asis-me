import React from 'react';
import USAMap from "react-usa-map";
import { Link } from "react-router-dom";

class Map extends React.Component {
 
// state = {
//     map: []
// }

// componentDidMount() {
//     fetch("https://covidtracking.com/api/states")
//         .then(res => res.json())
//         .then(data => {
//             this.setState({
//                 map: data
//                 // .filter(map => !!map.death)
//                 .map(map => ({
//                     states: map.state,
//                     hash: map.hash,
//                     total: map.total
//                 }))
//             })
//         })
//         .catch(err => console.log(err))
// }
  
  
    /* mandatory */
  mapHandler = (event) => {
    alert(event.target.dataset.name);
    console.log(event.target.dataset)
  };

  /* optional customization of filling per state and calling custom callbacks per state */
  statesCustomConfig = () => {
    return {
      "NJ": {
        fill: "orange",
        clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
      },
      "NY": {
        fill: "#CC0000"
      }
    };
  };



  render() {
    return (
        
      <div className="App">

        <USAMap customize={this.statesCustomConfig()}  onClick={this.mapHandler}/>
       
      </div>

    );
  }
}

export default Map;