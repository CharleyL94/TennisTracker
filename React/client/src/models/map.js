var MapObject = function(container) {

  this.map = new google.maps.Map(container, {
    center: {lat: 51, lng: 2},
    zoom: 5
  });
  this.markers = [];
}

MapObject.prototype = {

  addMarker: function(lat, lng){
    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: this.map,
      icon: '/images/tennis.png',
    })
  },
  changeZoom: function(num){
    this.map.setZoom(num)
  },
  centerMap: function(latlng){
    this.map.setCenter(latlng)
  }
}

module.exports = MapObject;