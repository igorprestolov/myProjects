function searchBoxActive () {
  document.querySelector('.search-box').classList.add('search-box_active')
  document.querySelector('.header__search-btn').style.opacity = "0"
  document.querySelector('.header__list').style.opacity = "0"
}
function searchBoxClose () {
  document.querySelector('.search-box').classList.remove('search-box_active')
  document.querySelector('.header__search-btn').style.opacity = "1"
  document.querySelector('.header__list').style.opacity = "1"
}
function mobileMenuActive () {
  document.querySelector('.mobile-menu').classList.add('mobile-menu_active')
}
function mobileMenuRemove () {
  document.querySelector('.mobile-menu').classList.remove('mobile-menu_active')
}


document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.consult__btn').forEach(function(consultBtn) {
    consultBtn.addEventListener('click', function(event) {
      var path = event.currentTarget.dataset.path

      document.querySelectorAll('.consult__content').forEach(function(consultContent) {
        consultContent.classList.remove("consult__content-active")
      })
      document.querySelector(`[data-target="${path}"]`).classList.add('consult__content-active')
    })
  })

  $(function () {
    $("#accordion").accordion({
      collapsible: true,
      heightStyle: "content",
      active: false,
    });
  });

  const swiper = new Swiper('.swiper-container', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true,
    },

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });

  document.querySelector('.header-burger').addEventListener('click', () => {
    mobileMenuActive ()
    searchBoxClose ()
  })
  document.querySelector('#closed-search').addEventListener('click', () => {
    searchBoxClose ()
  })
  document.querySelector('#search-btn').addEventListener('click', () => {
    searchBoxActive ()
    mobileMenuRemove ()
  })
  document.querySelector('#mobile-menu__close-btn').addEventListener('click', () => {
    mobileMenuRemove ()
  })

})



