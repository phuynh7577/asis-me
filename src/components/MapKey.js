import React from 'react';



class MapKey extends React.Component {
    render() {
        return(
                <div className="colors">
                    <div className="darkred"><span>50,000 +</span></div>
                    <div className="red"><span>10,000 +</span></div>
                    <div className="orange"><span>&lt; 10,000</span></div>
                    <span>Positive Results: </span>
                </div>
        )
    }
}




export default MapKey;