var navToggoler = document.querySelectorAll(".nav_toogler")
var subNav = document.querySelectorAll(".sub_nav")

navToggoler.forEach(toggoler => {
    toggoler.addEventListener("click", function() {
        navToggoler.forEach(subNav => subNav.classList.toggle("active"))
            // this.classList.add("active")
    })
});



$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    autoplay: true
});