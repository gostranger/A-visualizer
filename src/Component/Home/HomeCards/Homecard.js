import React from 'react';
import Card from './Card';
import * as Constant from '../../../Constants';
class Homecard extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            res: []
        }
    }

    componentDidMount() {
        const uri = Constant.BACKEND_URI_ENDPOINT+'/topics';
        fetch(uri)
            .then(res => res.json())
            .then((data) => {
                this.setState({ res: data });
            }).catch(
                //
            );
    }
    render() {
            return (
                <div className="container">
                    <br/>
                    <div className="row">
                        { (typeof this.state.res !== 'string') ? this.state.res.map(da => <Card key={da.id} id={da.id} topic={da.topic} />) : <div>No Data</div>}
                    </div>
                </div>);
            }
    }
    export default Homecard;
