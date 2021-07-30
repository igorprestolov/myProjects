function classManage (classTarget, classToInclude, classToExclude) {
  document.querySelector(classTarget).classList.remove(classToExclude)
  document.querySelector(classTarget).classList.add(classToInclude)
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

  document.querySelector('.header-burger').addEventListener('click', () => {
    classManage('.mobile-menu', 'mobile-menu_active')
    classManage('.search-box', null, 'search-box_active')
    document.querySelector('.header__search-btn').style.opacity = "1"
  })

  document.querySelector('#search-btn').addEventListener('click', () => {
    classManage('.search-box', 'search-box_active')
    classManage('.mobile-menu', null, 'mobile-menu_active')
    document.querySelector('.header__search-btn').style.opacity = "0"
    document.querySelector('.header__list').style.opacity = "0"
  })


  document.querySelector('#closed-search').addEventListener('click', () => {
    classManage('.search-box', null, 'search-box_active')
    document.querySelector('.header__search-btn').style.opacity = "1"
    document.querySelector('.header__list').style.opacity = "1"
  })

  document.querySelector('#mobile-menu-close').addEventListener('click', () => {
    classManage('.mobile-menu', null,'mobile-menu_active')

  })
})

