var React = require('react');
var MapObject = require('../models/map');

var MapBox = React.createClass({

// NEED TO REFACTOR THIS.
  makeInfoWindowContent: function(tournament){
    var winner;
    for (var player of this.props.players){
      if (player.id === tournament.winner){
        winner = player.name;
      }
    }
    var runnerup;
    for (var player of this.props.players){
      if (player.id === tournament.runnerup){
        runnerup = player.name;
      }
    }
    var string = "<h4>Tournament: " + tournament.name + "</h4><h5> Location: " + tournament.location + " </h5><h5>2016 Winner: " + winner + " </h5><h5>2016 Runner-up: " + runnerup + "</h5>";
    return string
  },
  
  render: function(){
    var mapObject = new MapObject(document.getElementById('map'));
    console.log("props tournaments", this.props.tournaments)

    if (this.props.tournaments){
    for (var tournament of this.props.tournaments){
      var content = this.makeInfoWindowContent(tournament);
      mapObject.addMarker(parseInt(tournament.lat, 10), parseInt(tournament.lng, 10), content)};
    }

    return(
        <div>
          
        </div>
    )
}


})

module.exports = MapBox;