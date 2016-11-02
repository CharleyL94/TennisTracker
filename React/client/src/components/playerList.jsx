var React = require('react');
var PlayerDetail = require('./playerDetail');
var _ = require('lodash')

var PlayerList = function( props ) {

  var myObjects = _.sortBy(props.players, 'ranking');

  var playerNodes = myObjects.map(function(player, index) {
    console.log("player ", player)
    return (
      <li key={index}>
        <PlayerDetail player={player} tournaments={props.tournaments}/>
      </li>
    )
  })

  return(
    <div id='player-list' className='hidden'>
      <ul className='custom-counter'>
        {playerNodes}
      </ul>
    </div>
  )


}

module.exports = PlayerList;