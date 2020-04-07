import React from 'react'
import { Redirect } from 'react-router-dom'
import USAMap from "react-usa-map";

class StateMap extends React.Component {
    state = {
        redirect: false
    }

    statesCustomConfig = () => {
        return {
          "NJ": {
            fill: "#ee3e32",
            // clickHandler: (event) => console.log('Custom handler for NJ', event.target.dataset)
          },
          "NY": {
            fill: "#CC0000"
          },
          "AK": {
            fill: "#fbb021",
          },
          "AL": {
            fill: "#fbb021",
          },
          "AR": {
            fill: "#fbb021",
          },
          "AZ": {
            fill: "#fbb021",
          },
          "CA": {
            fill: "#f68838",
          },
          "CO": {
            fill: "#fbb021",
          },
          "CT": {
            fill: "#fbb021",
          },
          "DC": {
            fill: "#fbb021",
          },
          "DE": {
            fill: "#fbb021",
          },
          "FL": {
            fill: "#f68838",
          },
          "GA": {
            fill: "#fbb021",
          },
          "HI": {
            fill: "#fbb021",
          },
          "IA": {
            fill: "#fbb021",
          },
          "ID": {
            fill: "#fbb021",
          },
          "IL": {
            fill: "#f68838",
          },
          "IN": {
            fill: "#fbb021",
          },
          "KS": {
            fill: "#fbb021",
          },
          "KY": {
            fill: "#fbb021",
          },
          "LA": {
            fill: "#f68838",
          },
          "MA": {
            fill: "#f68838",
          },
          "MD": {
            fill: "#fbb021",
          },
          "ME": {
            fill: "#fbb021",
          },
          "MI": {
            fill: "#f68838",
          },
          "MN": {
            fill: "#fbb021",
          },
          "MO": {
            fill: "#fbb021",
          },
          "MS": {
            fill: "#fbb021",
          },
          "MT": {
            fill: "#fbb021",
          },
          "NC": {
            fill: "#fbb021",
          },
          "ND": {
            fill: "#fbb021",
          },
          "NE": {
            fill: "#fbb021",
          },
          "NH": {
            fill: "#fbb021",
          },
          "NM": {
            fill: "#fbb021",
          },
          "NV": {
            fill: "#fbb021",
          },
          "OH": {
            fill: "#fbb021",
          },
          "OK": {
            fill: "#fbb021",
          },
          "OR": {
            fill: "#fbb021",
          },
          "PA": {
            fill: "#f68838",
          },
          "RI": {
            fill: "#fbb021",
          },
          "SC": {
            fill: "#fbb021",
          },
          "SD": {
            fill: "#fbb021",
          },
          "TN": {
            fill: "#fbb021",
          },
          "TX": {
            fill: "#fbb021",
          },
          "UT": {
            fill: "#fbb021",
          },
          "VA": {
            fill: "#fbb021",
          },
          "VT": {
            fill: "#fbb021",
          },
          "WA": {
            fill: "#fbb021",
          },
          "WI": {
            fill: "#fbb021",
          },
          "WV": {
            fill: "#fbb021",
          },
          "WY": {
            fill: "#fbb021",
          },

        };
      };

    componentDidMount() {
        fetch("https://covidtracking.com/api/states")
            .then(res => res.json())
            .then(data => {
                this.setState({
                    info: data
                    // .filter(info => !!info.death)
                    .map(info => ({
                        states: info.state,
                        death: info.death,
                        total: info.total,
                        positive: info.positive,
                        hash: info.hash
                    }))
                })
            })
            .catch(err => console.log(err))
            this.statesCustomConfig();

    }

    mapHandler = (event) => {
        this.state.info.forEach(statePicked => {
            if(event.target.dataset.name === statePicked.states){
                this.setState({stateHash: statePicked.hash,redirect: true})
            }
        })
      };

    

      renderRedirect = () => {
        if (this.state.redirect) {
          return <Redirect push to={{pathname: `/state/${this.state.stateHash}`, state: {info: this.state.stateHash}}} />
        }
    }
      
    render() {
        console.log("StateMap", this.state)
        return (
            <>
            {this.renderRedirect()}
            <USAMap info={this.state.info} customize={this.statesCustomConfig()} onClick={this.mapHandler} />
            </>
        )

    }

}

export default StateMap