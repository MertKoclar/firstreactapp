import React from "react";

function WeatherFC(props) {
    return <div>Bugün hava <span style={props.style}>{props.status}</span></div>;
}

WeatherFC.defaultProps = {
    status: 'güneşli',
    style: {backgroundColor:'yellow',color:'gray',padding:'5px'}
}
export default WeatherFC;