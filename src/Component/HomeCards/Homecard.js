import React from 'react';
import Card from './Card';
class Homecard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            res: []
        }
    }

    componentDidMount() {
        const uri = `https://6091ae4966bcbf001787bbe9.mockapi.io/api/v1/topics`;
        fetch(uri)
            .then(res => res.json())
            .then((data) => {
                this.setState({ res: data });
            }).catch(console.log);
    }
    render() {
        //const data = this.state.res;
        return (
            <div className="container">
                <br/>
                <div className="row">
                    {this.state.res.map(da => <Card key={da.id} id={da.id} topic={da.topic} />)}
                </div>
            </div>);
        }
    }
    export default Homecard;
