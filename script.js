
$(function(){
  var player = "<div id='cutie'></div>";
  $('#cutieWorld').append(player);

  $(document).keydown(function(e){
    var myDataRef = new Firebase('https://intense-fire-1019.firebaseIO-demo.com/positions/');
    var positionAxis = $('#cutie').position();
    myDataRef.set(
      positionAxis
    );
    switch(e.keyCode){
      case 37:
        $("#cutie").css('left',positionAxis.left - 1 + 'px');
        break;
      case 38:
        $("#cutie").css('top',positionAxis.top - 1 + 'px');
        break;
      case 39:
        $("#cutie").css('left',positionAxis.left + 1 + 'px');
        break;
      case 40:
        $("#cutie").css('top',positionAxis.top + 1 + 'px');
        break;
      ;
    }
  })
    var myDataRefLeft = new Firebase('https://intense-fire-1019.firebaseIO-demo.com/positions/left/');
    var myDataRefTop = new Firebase('https://intense-fire-1019.firebaseIO-demo.com/positions/top/');

    myDataRefLeft.on('value', function(snapshot) {
      var leftCoord = snapshot.val();
      $("#cutie").css('left', leftCoord)
    });
    myDataRefTop.on('value', function(snapshot) {
      var topCoord = snapshot.val();
      $("#cutie").css('top', topCoord)
    });
});


// var usersRef = new Firebase('https://online-b-cards.firebaseio.com/users');
// var myUser = usersRef.child(escapeEmailAddress('hello@hello.com'))
// myUser.set({ email: 'hello@hello.com', name: 'Alex', phone: 12912912 });
// left 37
// right 39
// up 38
// down 40