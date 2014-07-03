// msg you want to send to firebase
// var myDataRef = new Firebase('https://w9pvpyjxjul.firebaseio-demo.com/');
//       $('#messageInput').keypress(function (e) {
//         if (e.keyCode == 13) {
//           var name = $('#nameInput').val();
//           var text = $('#messageInput').val();
//           myDataRef.push({name: name, text: text});
//           $('#messageInput').val('');
//         }
//       });
//       myDataRef.on('child_added', function(snapshot) {
//         var message = snapshot.val();
// displayChatMessage(message.name, message.text);
//       });
$(function(){
  var player = "<div id='cutie'></div>";
  $('#cutieWorld').append(player);

  $(document).keydown(function(e){
    var myDataRef = new Firebase('https://intense-fire-1019.firebaseIO-demo.com/positions/');
    // alert(e.keyCode);
    // var myUser = usersRef.child(escapeEmailAddress('hello@hello.com'))
// myUser.set({ email: 'hello@hello.com', name: 'Alex', phone: 12912912 });
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
    var myDataRefLeft = new Firebase('https://intense-fire-1019.firebaseIO-demo.com/positions/left');
    var myDataRefTop = new Firebase('https://intense-fire-1019.firebaseIO-demo.com/positions/top');

    myDataRefLeft.on('value', function(snapshot) {
  // alert(snapshot.val());  // Alerts 'San Francisco'
      console.log(snapshot.val());
    });
    myDataRefTop.on('value', function(snapshot) {
  // alert(snapshot.val());  // Alerts 'San Francisco'
      console.log(snapshot.val());
    });
  })
});


// var usersRef = new Firebase('https://online-b-cards.firebaseio.com/users');
// var myUser = usersRef.child(escapeEmailAddress('hello@hello.com'))
// myUser.set({ email: 'hello@hello.com', name: 'Alex', phone: 12912912 });
// left 37
// right 39
// up 38
// down 40