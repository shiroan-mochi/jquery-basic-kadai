$(function () {
  $('#changeColor').on('click', function () {
    $('#target').css('color', 'red');
  });
  $('#changeText').on('click', function () {
    $('#target').text('Hello!')
  });
  $('#fadeOut').on('click', function () {
    $('#target').fadeOut()
  });
  $('#fadeIn').on('click', function () {
    $('#target').fadeIn()
  });
});

