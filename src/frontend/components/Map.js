import React from 'react'
import ReactDOM from 'react-dom'

//import MapStore from '../../stores/MapStore'
//import MapAction from '../../actions/MapAction'

var directionsService = new google.maps.DirectionsService;
var directionsDisplay = new google.maps.DirectionsRenderer;

class MainMap extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            latitude: "",
            longitude: "",
            initialZoom: 13,
            mapCenterLat: 48.526311,
            mapCenterLng: 2.553158,
            customerAddress: ""
        }
    }

    onChange(state) {
        this.setState(state)
    }

    componentDidMount() {
        console.log("MainMap componentDidMount()")

        // MapStore.listen(this.onChange.bind(this))
        // MapAction.fetchWrecksLightweight()
        this.prepareMapRender()
    }

    componentWillUnmount() {
        //MapStore.unlisten();
        console.log("MainMap componentWillUnmount()")
    }
    
    componentWillReceiveProps(nextprops) {
        if(nextprops.customerAddress != this.state.customerAddress) {
            this.calculateAndDisplayRoute(directionsService, directionsDisplay)    
        }
    }

    prepareMapRender() {

        var styleArray = [
            {
                featureType: "all",
                stylers: [
                    { saturation: 0 }
                ]
            },{
                featureType: "road.arterial",
                elementType: "geometry",
                stylers: [
                    { hue: "#00ffee" },
                    { saturation: 50 }
                ]
            },{
                featureType: "poi.business",
                elementType: "labels",
                stylers: [
                    { visibility: "off" }
                ]
            }
        ]

       

        var mapContainer = document.getElementById('map');
        var map = new google.maps.Map(mapContainer, {
            center: {lat: this.state.mapCenterLat, lng: this.state.mapCenterLng},
            streetViewControl: false,
            disableDefaultUI: true,
            zoom: this.state.initialZoom
        })

        map.setOptions({styles: styleArray })


        directionsDisplay.setMap(map);
        
        this.setState({map: map});
    }

    calculateAndDisplayRoute(directionsService, directionsDisplay) {

            directionsService.route({
            origin: this.props.customerAddress,
            destination: "39 avenue de Fontainebleau 77310 PRINGY",
            travelMode: google.maps.TravelMode.DRIVING
        }, function(response, status) {
            if (status === google.maps.DirectionsStatus.OK) {
                directionsDisplay.setDirections(response);
            } else {
                window.alert('Directions request failed due to ' + status);
            }
        });
    }

    drawMarkers(map) {

        console.log("draw marker")
        var myLatLng = {lat: 48.526311, lng: 2.553158};
        var marker = new google.maps.Marker({
            position: myLatLng,
            map: map,
            title: "MPA"
        })

        // marker.addListener('click', function() {
        //     map.setZoom(7);
        //     map.setCenter(marker.getPosition());
        //     this.handleMarkerClick(elt.wreckId)
        // }.bind(this));

    }


    render() {

        this.drawMarkers(this.state.map);

        return  <div id="map"></div>
    }
}


export default MainMap
