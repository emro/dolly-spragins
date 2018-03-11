require("./lib/social"); //Do not delete

// document.getElementById("statement-button").addEventListener("click",function(){
//   if ($(this).find($(".fa")).hasClass("fa-caret-down")){
//     document.getElementById("statement").classList.add("visible");
//     $(this).find($(".fa")).removeClass('fa-caret-down').addClass('fa-caret-up');
//   } else {
//     document.getElementById("statement").classList.remove("visible");
//     $(this).find($(".fa")).removeClass('fa-caret-up').addClass('fa-caret-down');
//   }
// });

var images = document.getElementsByTagName("img");
for (var idx=0; idx<images.length; idx++){
  var elem = images[idx];
  elem.addEventListener("click",function(){
    document.getElementsByClassName("overlay-image-container")[0].classList.add("active");
    document.getElementById("overlay-image").classList.add("active");
    document.getElementById("inner-overlay-image").innerHTML = "<img src="+this.src+"><img>";
    document.body.classList.add('noscroll');
  });
}

document.getElementById("closeme").addEventListener("click",function(){
  document.getElementsByClassName("overlay-image-container")[0].classList.remove("active");
  document.getElementById("overlay-image").classList.remove("active");
  document.body.classList.remove('noscroll');
});


$(document).on('click', 'a[href^="#"]', function(e) {
    // target element id
    var id = $(this).attr('href');

    // target element
    var $id = $(id);
    if ($id.length === 0) {
        return;
    }

    // prevent standard hash navigation (avoid blinking in IE)
    e.preventDefault();

    // top position relative to the document
    var pos = $(id).offset().top - 20;

    // animated top scrolling
    $('body, html').animate({scrollTop: pos});
});

window.onscroll = function() {activate()};

function activate() {
  var sticker = document.getElementById('stick-me');
  var sticker_ph = document.getElementById('stick-ph');
  var window_top = document.body.scrollTop;
  var div_top = document.getElementById('stick-here').getBoundingClientRect().top + window_top;
  // var long = document.getElementById('long');

  if (window_top > div_top) {
      sticker.classList.add('fixed');
      sticker_ph.style.display = 'block'; // puts in a placeholder for where sticky used to be for smooth scrolling
      // long.style.display = 'inline-block';
  } else {
      sticker.classList.remove('fixed');
      sticker_ph.style.display = 'none'; // removes placeholder
      // long.style.display = 'none';
  }
}
