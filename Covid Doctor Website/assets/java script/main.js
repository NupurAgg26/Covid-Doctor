window.addEventListener('scroll',function(){
        const header = document.querySelector('header');
        header.classList.toggle("sticky",window.scrollY > 0);
    });
$('.container-2').mousemove(function (event) {
	var eye = $(event.currentTarget.querySelectorAll('.eye'));
	var x = eye.offset().left + eye.width() / 2;
	var y = eye.offset().top + eye.height() / 2;
	var rad = Math.atan2(event.pageX - x, event.pageY - y);
	var rot = rad * (180 / Math.PI) * -1 + 250;
	eye.css({
		transform: 'rotate(' + rot + 'deg)',
	});
});

window.addEventListener('scroll',function () {
    var scroll = document.querySelector('.scrollTop');
    scroll.classList.toggle("active" , window.scrollY > 500)
});
function scrollToTop() {
    window.scrollTo({
        top:0,
        behavior: 'smooth'
    });
}

function toggleMenu() {
    const menuToggle = document.querySelector('.menuToggle');
    const navigation = document.querySelector('.navigation');
    menuToggle.classList.toggle('active');  
    navigation.classList.toggle('active');
}
