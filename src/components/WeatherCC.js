import React, {Component} from "react";

class WeatherCC extends Component {
    render() {
        return <div style={this.props.style}>Bugün hava {this.props.status} </div>;
    }
}

WeatherCC.defaultProps = {
    status: 'güneşli',
    style: {backgroundColor:'yellow',color:'gray',padding:'5px'}
}
export default WeatherCC;