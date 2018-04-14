console.log("Up and Running");


const showOne = function() {
  $('#one').toggleClass("hidden");
}

const showTwo = function() {
  $('#two').toggleClass("hidden");
}

const showThree = function() {
  $('#three').toggleClass("hidden");
}

$('#soccerdog').on('click', function() {
  showOne();
});
$('#dribbledog').on('click', function() {
  showTwo();
});
$('#goaliedog').on('click', function() {
  showThree();
});
