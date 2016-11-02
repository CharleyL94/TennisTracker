var MapObject = function(container) {


  this.map = new google.maps.Map(container, {
    center: {lat: 51, lng: 2},
    zoom: 2
  });
  // use either this.markers or this.info-windows to be able to close a window on opening a new one.
  this.openWindows = [];
 
}

MapObject.prototype = {

  
  addMarker: function(lat, lng, note){
   var info_window = new google.maps.InfoWindow({content: note});
    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: this.map,
      icon: '/images/tennis.png',
      animation: google.maps.Animation.DROP})
    marker.addListener('click', function() {
       info_window.open(map, marker);
      });  
  },

  changeZoom: function(num){
    this.map.setZoom(num)
  },
  centerMap: function(latlng){
    this.map.setCenter(latlng)
  }
}

module.exports = MapObject;