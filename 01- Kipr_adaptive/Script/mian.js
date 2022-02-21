// MATERIALIZE CAROUSEL

document.addEventListener('DOMContentLoaded', function () {
  var elems = document.querySelectorAll('.carousel');
  var instances = M.Carousel.init(elems, {
    indicators: true,
  });

  $('#next3').click(function () {
    $('.carousel').carousel('next');
  })
  $('#prev3').click(function () {
    $('.carousel').carousel('prev');
  })

});

document.addEventListener('DOMContentLoaded', function () {

  var burger = document.querySelector(".header-burger")
  var mobileMenu = document.querySelector('.header-menu')
  var btnNext1 = document.querySelector('#next1')
  var btnPrev1 = document.querySelector('#prev1')
  var btnNext2 = document.querySelector('#next2')
  var btnPrev2 = document.querySelector('#prev2')

    // SLIDE TEST FUNCTION

  function sliding(sliderContainer, moveSlider, direction, sliderQuantity, btn) {
    var container = document.querySelector(sliderContainer);
    var containerWidth = window.getComputedStyle(container).getPropertyValue('width');
    var slider = document.querySelector(moveSlider);
    var currentSlidePosition = window.getComputedStyle(slider).getPropertyValue('margin-left');
    var marginMovePX = parseInt(currentSlidePosition) - (direction * (parseInt(containerWidth) / sliderQuantity)) + "px";

    var buttons = [btnNext1,btnNext2,btnPrev1,btnPrev2]
    buttons.forEach(el => {
      el.style.filter = null
    })

    if (Math.abs(parseInt(marginMovePX)) >= (Math.abs(parseInt(containerWidth)) - ((parseInt(containerWidth) / sliderQuantity)))) {
      slider.style.marginLeft = -containerWidth;
      event.currentTarget.style.filter = "invert(84%) sepia(5%) saturate(105%) hue-rotate(169deg) brightness(91%) contrast(96%)"

    } else if (parseInt(marginMovePX) > 0) {
      slider.style.marginLeft = 0;
      event.currentTarget.style.filter = "invert(84%) sepia(5%) saturate(105%) hue-rotate(169deg) brightness(91%) contrast(96%)"
    } else {
      slider.style.marginLeft = marginMovePX
    }
  }

  btnNext1.addEventListener('click', () => sliding(".pafos_slides", ".s1", +1, 5))
  btnPrev1.addEventListener('click', () => sliding(".pafos_slides", ".s1", -1, 5))
  btnNext2.addEventListener('click', () => sliding(".larnaka_slides", ".f1", +1, 5))
  btnPrev2.addEventListener('click', () => sliding(".larnaka_slides", ".f1", -1, 5))

  // Direction: enter 1 for accesnding or -1 for deccending

  document.querySelectorAll('.page-number').forEach(item => {
    item.addEventListener('click', () => {
      document.querySelector(".s1").style.marginLeft = null;
    })
  })

  // BURGER

  burger.addEventListener('click', () => {
    mobileMenu.classList.toggle("header-menu_active");
    document.querySelector('.header-bottom').classList.toggle('header-bottom_active')
    document.querySelector(".header-burger__container").classList.toggle("burger_open")
  })
})

// ADDING MAP

function myMap() {
  var mapCanvas = document.getElementById("map");
  var mapOptions = {
    center: new google.maps.LatLng(51.5, -0.2), zoom: 10
  };
  var map = new google.maps.Map(mapCanvas, mapOptions);
}


