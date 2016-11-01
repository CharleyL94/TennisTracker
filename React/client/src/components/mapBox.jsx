var React = require('react');
var MapObject = require('../models/map');

var MapBox = React.createClass({
  
  render: function(){
    var mapObject = new MapObject(document.getElementById('map'));
    console.log("props tournaments", this.props.tournaments)

    if (this.props.tournaments){
    for (var tournament of this.props.tournaments){
      mapObject.addMarker(parseInt(tournament.lat, 10), parseInt(tournament.lng, 10))};
    }

    return(
        <div>
          
        </div>
    )
}


})

module.exports = MapBox;