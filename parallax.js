document.addEventListener('scroll', function () {
    const headerHeight = document.querySelector('header').offsetHeight;
    const scrollPosition = window.scrollY;

    document.querySelector('.parallax').style.transform = `translateY(-${scrollPosition * 0.4}px)`;
    document.querySelector('.container').style.transform = `translateY(${headerHeight - scrollPosition * 0.2}px)`;
});
