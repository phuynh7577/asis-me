import React from "react"
import StateList from "./StateList"



class States extends React.Component {
    state = {
        info: []
    }

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
    }

    render() {     
        console.log(this.state)       
        return(
            <div className="container">
                <div className="states">
                    <StateList info={this.state.info}/>
                </div>
            </div>
        )
    }
}

export default States;