// $(document).ready(function() {
//     $("h1").click(function() {
//       alert("This is a header.");
//     });

//   $('p').click(function(){
//     alert("This is a paragraph")
//   });

//   $('img').click(function(){
//     alert("This is an image")
//   })})

// $(document).ready(function(){
//     $('h1').click(function(){
//         $('img').show();
//     })
// })

// $(document).ready(function() {
//     $(".clickable").click(function() {
//       $(".walrus-showing").fadeIn();
//       $(".walrus-hidden").fadeOut();
//     });
//   });

// $(document).ready(function() {
//     $("button#green").click(function() {
//       $("body").removeClass();
//       $("body").addClass("green-background");
//     });

//     $("button#yellow").click(function() {
//       $("body").removeClass();
//       $("body").addClass("yellow-background");
//     });

//     $("button#red").click(function() {
//       $("body").removeClass();
//       $("body").addClass("red-background");
//     });
//   });

// $(document).ready(function() {
//     $("button#hello").click(function() {
//       $("ul#user").prepend("<li>Hello!</li>");
//       $("ul#webpage").prepend("<li>Why hello there!</li>");
//       $('li').css('background-color', 'green'); 
//     });

//     $("button#goodbye").click(function() {
//       $("ul#user").prepend("<li>Goodbye!</li>");
//       $("ul#webpage").prepend("<li>Goodbye, dear user!</li>");
//     });

//     $("button#stop").click(function() {
//       $("ul#user").prepend("<li>Stop copying me!</li>");
//       $("ul#webpage").prepend("<li>Pardon me. I meant no offense.</li>");
//     });
//   });

// $(document).ready(function(){
//   $('button#hello').click(function(){
//     $('#mustafa').toggle();
//     $("ul#webpage").prepend("<li>Welcome to Jumanji</li>")
//   })
// })

function converter(num){
  var holder = "";
  var roman = {
    M:1000,
    CM:900,
    D:500,
    CD:400,
    C:100,
    XC:90,
    L:50,
    XL:40,
    X:10,
    IX:9,
    V:5,
    IV:4,
    I:1
  }
for (var key in roman){
  if(num > 3999){
    holder += "Enter between 0 and 3999";
    break;
  }
  while(num >= roman[key]){
    holder += key
    num -= roman[key]
  }
}
return holder
}

function binary(n){
  return (n >>> 0).toString(2)
}

$(document).ready( function(){
  $('#button').click(function(event){
    event.preventDefault();
    var siato = $("#converter #first").val();
    var result = converter(parseInt(siato));
    $('#para').text(result)
  })

  $("#clicker").click(function(event){
    event.preventDefault();
    var mish = $("#three #binary").val()
    var villi = binary(mish)
    $("#rapa").text(villi)

  })
})

$(document).ready(function(){
  $('.formi').submit(function(){
    var username = $('input#first').val();
    var email = $('input#second').val();

    $('#display').text("You are" + username + "Your email is" + email);
  })
})