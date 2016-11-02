var React = require('react');
var PlayerDetail = require('./playerDetail');

var PlayerList = function( props ) {

  var playerNodes = props.players.map(function(player, index) {
    console.log("player ", player)
    return (
      <li key={index}>
        <PlayerDetail player={player} tournaments={props.tournaments}/>
      </li>
    )
  })

  return(
    <div id='player-list'>
      <ul className='custom-counter'>
        {playerNodes}
      </ul>
    </div>
  )


}

module.exports = PlayerList;