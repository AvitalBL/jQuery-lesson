// var element = $('h1');
// console.log(element);


//PARTNER EXERCISE 1

$(document).ready(function() {
    $('h1').css('color', 'blue');
    $('.red-div').css('color', 'red');
    $('ul li:first').css('color', 'green');
    $('ul li:nth-child(2)').css('color', 'pink');
    $('#brown-div').css('color', 'brown');
})


//PARTNER EXERCISE 2

  $('#btn').click(function () {
      alert($('#my-input').val());
  });

//PARTNER EXERCISE 3

$('#btn2').click(function () {
    $('.students').append('<li>' + 
        $('#my-input2').val() + '</li>'
    )
  });


