import React from "react"
import Form from "./Form"


const Url = "https://covidtracking.com/api/states?hash="

let baseURL = process.env.REACT_APP_BASEURL

if (process.env.NODE_ENV === "development") {
    baseURL = "http://localhost:3003"
} else {
    baseURL = ""
}

console.log("current base URL: " + baseURL)

fetch(baseURL + "/requests")
    .then(data => {
        return data.json()})
        .then(parsedData => console.log(parsedData),
            err => console.log(err))






class State extends React.Component {
    state = {
        activeState: "",
        isLoading: true,
        error: null,
        requests: [],
        request: null
    }

//lifecycle method
    componentDidMount = () => {
        console.log(this.props.location.state.info)
        const hash = this.props.location.state.info
        fetch(Url+hash)
            .then(res => res.json())
            .then(data => {
                this.setState({
                    activeState: data,
                    isLoading: false
                })
            })
            .catch(error => this.setState({error, isLoading: false}))
            
            this.getRequest();
    }


     //show
  getRequest = requests => {
    this.setState({requests})
  }


    getRequest = () => {
        fetch(baseURL + "/requests")
            .then(data => {
                return data.json()},
                err => console.log(err))
            .then(parsedData => this.setState({requests: parsedData}),
            err=> console.log(err))
    }
    
    
    handleAddRequest = (request) => {
        const copyRequest = [...this.state.requests]
        copyRequest.unshift(request)
        this.setState({
          requests: copyRequest,
          name: '',
          email: '',
          state: '',
          city: '',
          severity: '',
          request: '',
          supportNumber: ''
        })
      }

      addSupport = (request) => {
        //holidays.put("/:id")
        fetch(baseURL + '/requests/' + request._id, {
          method: 'PUT',
          body: JSON.stringify({support: request.support + 1}),
          headers: {
            'Content-Type' : 'application/json'
          }
        }).then(res => res.json())
        .then(resJson => {
             const copyRequests = [...this.state.requests]
              const findIndex = this.state.requests.findIndex(request => request._id === resJson._id)
              copyRequests[findIndex].support = resJson.support;
              this.setState({requests: copyRequests})
        })
      }

      deleteRequest = (id) => {
        fetch(baseURL + '/requests/' + id, {
          method: 'DELETE'
        }).then(response => {
          const requestsArr = this.state.requests.filter( request => {
            return request._id !== id
          })
          this.setState({requests: requestsArr})
        })
      }


    render(){
        console.log("requests", this.requests)
        console.log("state", this.state)
        console.log("props", this.props)
        return(
            <div className="StatePage">
                <Form
                baseURL={baseURL}
                handleAddRequest={this.handleAddRequest}
                />

                <div className="form">
                    {!this.state.isLoading ?                  
                    <div className="info">
                        <p>State: <strong> {this.state.activeState.state} </strong></p>
                        <p>Deaths: <strong> {this.state.activeState.death} </strong></p>
                        <p>Positive Results: <strong> {this.state.activeState.positive} </strong></p>
                        <p>Total Tested Results: <strong> {this.state.activeState.totalTestResults} </strong></p>   
                    </div> : <h2>Gathering Information...</h2>}
                </div>

                <div className="main-request">
                <ul>
                    {this.state.requests.map(requests => (
                        requests.state === this.state.activeState.state ?
                            <div className="request" key={requests._id}>
                                <div className="title">
                                  <p className="n">{requests.name}</p>
                                  <a className="e" href={`mailto: ${requests.email}`} > {requests.email} </a> 
                                  <p className="l">{requests.city}</p>
                                  <p className="s">{requests.severity}</p>
                                  
                                  <div className="sup-img">
                                      <img className="SupportBtn" onClick={() => this.addSupport(requests)} src="/heart.png" alt="Support Button"/> <span className="like" >{requests.support}</span>
                                  </div>
                                </div> 

                                <p className="x" onClick={() =>this.deleteRequest(requests._id)}>X</p>
                                
                                <div className="word">
                                  {requests.request}
                                </div>   
                            </div>
                            : null
                    ))} 
                    </ul> 
                </div>

                

            </div>
        )
    }
}











export default State;