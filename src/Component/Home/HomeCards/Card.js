import React from 'react';

class Card extends React.Component {
    render(){
        // var style = {
        //     width:'18rem'
        // }
        return(
            <div className="col-4">
            <div key={this.props.id} className="card">
                <div className="card-body">
                    <h5 className="card-title">Topic : {this.props.topic}</h5>
                </div>
            </div>
        </div>
        );
    }
}

export default Card;