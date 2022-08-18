var navToggoler = document.querySelector(".nav_toogler")
var subNav = document.querySelector(".sub_nav")

nav_toogler.onclick = () => {
    subNav.classList.toggle("active")
}

$('.banner_slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    arrows: true,
    autoplay: true
});