var MapObject = function(container) {


  this.map = new google.maps.Map(container, {
    center: {lat: 37, lng: 23},
    zoom: 2
  });
  this.info_window = new google.maps.InfoWindow();

}

MapObject.prototype = {
  
  addMarker: function(lat, lng, note){
    var marker = new google.maps.Marker({
      position: {lat: lat, lng: lng},
      map: this.map,
      icon: '/images/tennis.png',
      animation: google.maps.Animation.DROP})
    marker.addListener('click', function() {
       this.info_window.close()
       this.info_window.setContent(note)
       this.info_window.open(map, marker);
      }.bind(this)); 
  },

  changeZoom: function(num){
    this.map.setZoom(num)
  },
  centerMap: function(latlng){
    this.map.setCenter(latlng)
  }
}

module.exports = MapObject;