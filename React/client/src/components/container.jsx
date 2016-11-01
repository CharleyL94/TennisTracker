var React = require('react');

var Container = React.createClass({

  getInitialState: function(){
    return({players: null});
  },

  componentDidMount: function(){
    this.getData();
  },

  getData: function(){
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

  render: function(){
    if (!this.state.players){
      return (<h1>Loading</h1>)
    }
    return(
        <div>
          <h1>{this.state.players[0].name}</h1>
        </div>
    )
}


})

module.exports = Container;