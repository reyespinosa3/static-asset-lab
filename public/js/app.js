console.log("Up and Running");

const showAll = function() {
  $('.sports').toggleClass("hidden");
}
const showOne = function() {
  $('#one').toggleClass("hidden");
}
const showTwo = function() {
  $('#two').toggleClass("hidden");
}
const showThree = function() {
  $('#three').toggleClass("hidden");
}
const showFour = function() {
  $('#four').toggleClass("hidden")
}
const showFive = function() {
  $('#five').toggleClass("hidden")
}
const showSix = function() {
  $('#six').toggleClass("hidden")
}
const showSeven = function() {
  $('#seven').toggleClass("hidden")
}
const showEight = function() {
  $('#eight').toggleClass("hidden")
}
$('#all').on('click', function() {
  showAll();
});
$('#soccerdog').on('click', function() {
  showOne();
});
$('#dribbledog').on('click', function() {
  showTwo();
});
$('#goaliedog').on('click', function() {
  showThree();
});
$('#footballdog').on('click', function() {
  showFour();
});
$('#catchfootballdog').on('click', function() {
  showFive();
});
$('#hockeydog').on('click', function() {
  showSix();
});
$('#tennisdog').on('click', function() {
  showSeven();
});
$('#basketballdog').on('click', function() {
  showEight();
});
