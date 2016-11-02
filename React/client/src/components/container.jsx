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
// NEED TO TRY AND REFACTOR THE TWO GET DATA METHODS AS THEY'RE VERY SIMILAR
  getPlayerData: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url +"/players");
    request.onload = function(){
      var players = JSON.parse(request.responseText);
      this.setState({players: players})
    }.bind(this);
    request.send();
  },  

  getTournamentData: function(){
    var request = new XMLHttpRequest();
    request.open("GET", this.props.url +"/tournaments");
    request.onload = function(){
      var tournaments = JSON.parse(request.responseText);
      this.setState({tournaments: tournaments})
    }.bind(this);
    request.send();
  },

  getPlayers: function(){

  },

  render: function(){
    if (!this.state.players){
      return (<h1>Loading</h1>)
    }
    return(
        <div>
          <h1>Ace Tennis Tracker</h1>
          <button onClick={this.getPlayers}>View Players</button>
          <MapBox tournaments={this.state.tournaments} players={this.state.players}/>
        </div>
    )
}
// mapObject={new MapObject(document.getElementById('map'))} 

})

module.exports = Container;