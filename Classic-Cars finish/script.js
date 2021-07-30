const videos = document.querySelectorAll('.video');

videos.forEach((video) => {
    video.addEventListener('mouseover', () => {
        video.play();
    });
    video.addEventListener('mouseout', () => {
        video.pause();
    })
})

document.querySelectorAll('.menu-icon').addEventListener('click', () => {
    document.querySelectorAll(".menu-icon").forEach((item) => {
        item.classList.toggle("change");
    });

});


// выбрать все елементы target добавить к ним класс .change