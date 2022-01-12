/*----- Sticky -----*/
window.addEventListener("scroll", function() {
	var nav = document.querySelector("nav");
	nav.classList.toggle("sticky", window.scrollY > 0);
}, 2000);
/*----- End Sticky -----*/





/*----- Bottom to Top  -----*/
var mybutton = document.getElementById("scrollmyBtn");
window.onscroll = function() {
	scrollFunction();
};

function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
}

function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
/*----- End Bottom to Top  -----*/





/*----- Effective Module Slider -----*/
$('.effective-module-slider').slick({
	dots: false,
	infinite: false,
	speed: 300,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [{
		breakpoint: 991,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}, {
		breakpoint: 767,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
});
/*----- End Effective Module Slider -----*/




/*----- Review Slider -----*/
$('.review-slider').slick({
	dots: false,
	infinite: true,
	speed: 300,
	arrows: false,
	autoplay: true,
	slidesToShow: 4,
	slidesToScroll: 4,
	responsive: [{
		breakpoint: 991,
		settings: {
			slidesToShow: 3,
			slidesToScroll: 3
		}
	}, {
		breakpoint: 767,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 2
		}
	}, {
		breakpoint: 480,
		settings: {
			slidesToShow: 1,
			slidesToScroll: 1
		}
	}]
});
/*----- End Review Slider -----*/




/*----- Special Feature Section -----*/
let parentList = document.querySelectorAll('.btn-parent');
console.group('toggle hidden class');
console.log('ParentList: ', parentList);
parentList.forEach(parent => {
    parent.addEventListener('click', () => {
        console.log('Clicked');
        let imgList = document.querySelectorAll('.img');
        imgList.forEach(img => {
            if (!img.classList.contains('hidden')) {
                img.classList.add('hidden');
            }
        })
        let img = document.querySelector(`.img.${parent.dataset.str}`);
        console.log('Image: ', img);

        console.log('img.classList: ', img.classList);
        img.classList.toggle('hidden');

        console.groupEnd();
    })
})
/*----- End Special Feature Section -----*/