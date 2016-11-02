var React = require('react');

var PlayerDetail = React.createClass({

  getInitialState: function(){
    return { 
      wins: null,
      runnerups: null,
      tournaments: null
    }
  },

  componentWillReceiveProps: function(nextProps){
    this.setState({tournaments: nextProps.tournaments});
    console.log("player tournaments", this.state.tournaments)
    this.checkTournamentWins(nextProps.tournaments);
    this.checkTournamentRunnerUps(nextProps.tournaments);
  },

  checkTournamentRunnerUps: function(tournaments){
    console.log("check for runner up has been called")
    var runnerups = [];
    for (var tournament of tournaments){
      if (tournament.runnerup === this.props.player.id){
        runnerups.push(tournament.name)
      }
    }
    if (runnerups.length > 0){
    this.setState({runnerups: runnerups})
    }
  },

  checkTournamentWins: function(tournaments){
    console.log("check for winner has been called")
    var wins = [];
    for (var tournament of tournaments){
      if (tournament.winner === this.props.player.id){
        wins.push(tournament.name)
      }
    }
    if (wins.length > 0){
    this.setState({wins: wins})
    }
  },

  render: function(){
    console.log("player tournaments", this.state.tournaments)

    var wins = " ";
    var runnerups = " ";


    if (this.state.wins){
      var wins1 = this.state.wins.toString();
      wins = wins1.split(',').join(', ');
    }

    if (this.state.runnerups){
      var runnerups1 = this.state.runnerups.toString();
      runnerups = runnerups1.split(',').join(', ');
    }
    
    return (
      <div className='player-box'>
        <h3>{this.props.player.name}</h3>
        <h4>ATP World Ranking: {this.props.player.ranking}</h4>
        <h4>2016 Winner: {wins}</h4>
        <h4>2016 Runner-up: {runnerups}</h4>
        <img src={this.props.player.image} id={this.props.player.id}></img>
      </div>
  )
}

})

module.exports = PlayerDetail;