var React = require('react');

var PlayerDetail = React.createClass({

  render: function(){
    
    return (
      <div>
        <h3>{this.props.player.name}</h3>
        <h4>ATP World Ranking: {this.props.player.ranking}</h4>
        <img src={this.props.player.image} id={this.props.player.id}></img>
      </div>
  )
}

})

module.exports = PlayerDetail;