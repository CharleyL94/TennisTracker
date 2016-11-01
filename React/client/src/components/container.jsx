var React = require('react');
var MapObject = require('../models/map');
var MapBox = require('./mapBox')

var Container = React.createClass({

  getInitialState: function(){
    return({players: null, tournaments: null});
  },

  componentDidMount: function(){
    this.getPlayerData();
    this.getTournamentData();
  },

  getPlayerData: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url +"/players");
    request.onload = function(){
      var players = JSON.parse(request.responseText);
      console.log("players", request.responseText)
      this.setState({players: players})
      console.log("player 1", this.state.players[0])
      console.log("player 1 name", this.state.players[0].name)
    }.bind(this);
    request.send();
  },  

  getTournamentData: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url +"/tournaments");
    request.onload = function(){
      var tournaments = JSON.parse(request.responseText);
      console.log("tournaments", request.responseText)
      this.setState({tournaments: tournaments})
      console.log("tournament 1", this.state.tournaments[0])
      console.log("tournament 1 location", this.state.tournaments[0].location)
    }.bind(this);
    request.send();
  },

  render: function(){
    if (!this.state.players){
      return (<h1>Loading</h1>)
    }
    return(
        <div>
          <h1>{this.state.players[0].name}</h1>
          <MapBox tournaments={this.state.tournaments}/>
        </div>
    )
}
// mapObject={new MapObject(document.getElementById('map'))} 

})

module.exports = Container;