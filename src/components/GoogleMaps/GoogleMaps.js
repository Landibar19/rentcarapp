import React, { Component } from 'react';


import {Map,GoogleApiWrapper} from 'google-maps-react';
 
class MapContainer extends Component {
  render() {
    return (
      <Map
      google={this.props.google} zoom={8} 
      style={{width:'600px', height:"300px"}}
      initialCenter={{
        lat:40.457646,
        lng: 19.486796
      }} 
      >
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: ('AIzaSyCBlmZ4Z2678jwTsJmYve2IPSnJ36M9Ujw')
})(MapContainer)
