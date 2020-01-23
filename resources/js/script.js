$(document).ready(function() {
  $('.js--section-features').waypoint(
    function(direction) {
      if (direction == 'down') {
        // If Scrolling Down... Then, Sticky Navigation Should Appear
        $('nav').addClass('sticky');
      } else {
        // If Scrolling Up... Then, Remove Sticky Navigation
        $('nav').removeClass('sticky');
      }
    },
    {
      offset: '60px'
    }
  );

  //   var waypoints = $('#handler-first').waypoint(
  //     function(direction) {
  //       notify(this.element.id + ' hit 25% from top of window');
  //     },
  //     {
  //       offset: '25%'
  //     }
  //   );
});
