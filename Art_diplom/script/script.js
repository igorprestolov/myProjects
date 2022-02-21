document.addEventListener("DOMContentLoaded", () => {

  const targetElement = document.querySelector('#gallery-selector');
  const choices = new Choices(targetElement, {
    searchEnabled: false,
    itemSelectText: "",
  });

  const heroSwiper = new Swiper('.hero-swiper', {
    slidesPerView: 1,
    speed: 2000,
    autoplay: {
      delay: 2000
    },
    effect: "fade",
  });

  const gallerySwiper = new Swiper('.gallery__swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 50,

    navigation: {
      nextEl: '.gallery-button-next',
      prevEl: '.gallery-button-prev',
      disabledClass: 'gallery-button-disabled'
    },

    breakpoints: {
      1660: {
        slidesPerView: 3,
      },
      1023: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
    },
  });

  const eventsSwiper = new Swiper('.events__swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.events__swiper-btn_next',
      prevEl: '.events__swiper-btn_prev',
      disabledClass: 'events__swiper-btn_disabled'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  const partnersSwiper = new Swiper('.partners__swiper', {
    direction: 'horizontal',
    loop: false,
    slidesPerView: 3,
    spaceBetween: 50,
    navigation: {
      nextEl: '.partners__swiper-btn_next',
      prevEl: '.partners__swiper-btn_prev',
      disabledClass: 'partners__swiper-btn_disabled'
    },
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  // Accordion

  $(function () {
    $("#accordion").accordion({
      collapsible: true
    });
  });

  // Tippy

  tippy('#tippy-1', {
    content: 'Пример современных тенденций - современная методология разработки',
    placement: 'top',
    theme: 'purple'

  });
  tippy('#tippy-2', {
    content: 'В стремлении повысить качество',
    placement: 'top',
    theme: 'purple'
  });
  tippy('#tippy-3', {
    content: 'Приятно, граждане, наблюдать, как сделанные на базе аналитики выводы вызывают у вас эмоции',
    placement: 'top',
    theme: 'purple'
  });

  // Artists Pane

  document.querySelectorAll('.catalog__artist-button').forEach(function (consultBtn) {
    console.log("bam")
    consultBtn.addEventListener('click', function (event) {
      var path = event.currentTarget.dataset.path
      document.querySelectorAll('.catalog__article').forEach(function (consultContent) {
        consultContent.classList.remove("catalog__article-active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('catalog__article-active')
    })
  })

    // setting page index to gallery swiper

  function setIndexSlider() {
    let pageIndex = document.getElementById('gallery__page-index');
    let activeSlide = document.querySelector('.gallery__swiper').querySelector('.swiper-slide-active').ariaLabel
    pageIndex.innerHTML = activeSlide;
  }

  setIndexSlider()

  document.querySelectorAll('.gallery-button').forEach(function (galleryBtn) {
    galleryBtn.addEventListener('click', setIndexSlider);
  })

  document.querySelector('.gallery__swiper-wrapper').addEventListener('touchstart', setInterval(setIndexSlider, 500))

  ymaps.ready(init);
  function init() {
    // Creating the map.
    var myMap = new ymaps.Map("map", {
      // The map center coordinates.
      // Default order: “latitude, longitude”.
      // To not manually determine the map center coordinates,
      // use the Coordinate detection tool.
      center: [55.76, 37.64],
      // Zoom level. Acceptable values:
      // from 0 (the entire world) to 19.
      zoom: 7
    });
  }




})
