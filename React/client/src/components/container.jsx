var React = require('react');
var MapObject = require('../models/map');
var MapBox = require('./mapBox');
var PlayerList = require('./playerList');

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
    var list = document.getElementById('player-list');
    list.style.display = "block";
    var map = document.getElementById('map');
    map.style.display = "none";
  },


  getMap: function(){
    var list = document.getElementById('player-list');
    list.style.display = "none";
    var map = document.getElementById('map');
    map.style.display = "block";
  },

  render: function(){
    if (!this.state.players){
      return (<h1>Loading</h1>)
    }
    return(
        <div>
          <div id='header'>
          <h1>Ace Tennis Tracker</h1>
          <button onClick={this.getPlayers}>View Players</button>
          <button onClick={this.getMap}>View Map</button>
          </div>
          <MapBox id='map' tournaments={this.state.tournaments} players={this.state.players}/>
          <PlayerList tournaments={this.state.tournaments} players={this.state.players}/>
        </div>
    )
}

})

module.exports = Container;