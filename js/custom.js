let list = document.querySelector("#list");
let navbar_toggler = document.querySelectorAll("div.navbar-toggler")[0];

navbar_toggler.addEventListener("click", function(){
    if(window.getComputedStyle(list).display == "none"){
		list.style.display = "block";
	}else{
		list.style.display = "none";
	}
});

$('#slide-1').owlCarousel({
    loop:true,
    margin:4,
    responsiveClass:true,
	autoplay:true,
	responsive: {
	  0: {
		items: 3,
		nav: false
	  },
	  600: {
		items: 5,
		nav: false
	  },
	  1000: {
		items: 8,
		nav: false,
		margin: 4
	  }
	}
});

$('#slide-2').owlCarousel({
	items:1,
	loop:true,
	margin:10,
	autoplay:true,
	autoplayTimeout:2000,
	autoplayHoverPause:true
});

$('#slide-3').owlCarousel({
    loop:true,
    margin:7,
    responsiveClass:true,
	autoplay:true,
	responsive: {
	  0: {
		items: 1,
		nav: false
	  },
	  600: {
		items: 2,
		nav: false
	  },
	  1000: {
		items: 4,
		nav: false,
		margin: 8
	  }
	}
});

$('#slide-4').owlCarousel({
	loop:false,
	margin:10,
	responsive: {
	  0: {
		items: 2,
		nav: false
	  },
	  1000: {
		items: 5,
		nav: false,
		margin:6
	  }
	}
});

$('#slide-5').owlCarousel({
	responsive:{
		0:{
			items:2,
		},
		764:{
			items:2,
		},
		765:{
			items:1,
		},
		1200:{
			items:1,
		},
	},
	lazyLoad:true,
	loop:true,
	autoplay:true,
	autoplaySpeed:1000,
	dots:false,
	autoplayTimeout:2000,
	nav:false,
	autoplayHoverPause:true,
});


let eateryHTabs = $(".eatery-h-tabs");
let tabContent = $(".tab-content");

[...eateryHTabs].forEach(function(elem){
	elem.addEventListener("click", function(e){
		e.preventDefault();
		
		[...eateryHTabs].forEach(function(each_elem){
			each_elem.parentNode.classList.remove("active-tab");
		});
		
		elem.parentNode.classList.add("active-tab");

		[...tabContent].forEach(function(each_tab){
			each_tab.classList.remove("active-tab-content");
		});

		let targetTab = document.querySelector(elem.getAttribute("href"));
		targetTab.classList.add("active-tab-content");
	});
});

let profile_Tabs = $(".profile-tabs");
let tab_Content = $(".tab-content");

[...profile_Tabs].forEach(function(elem){
	elem.addEventListener("click", function(e){
		e.preventDefault();
		
		[...profile_Tabs].forEach(function(each_elem){
			each_elem.parentNode.classList.remove("active-profile-tab");
		});
		
		elem.parentNode.classList.add("active-profile-tab");

		[...tab_Content].forEach(function(each_tab){
			each_tab.classList.remove("active-tab-content");
		});

		let targetTab = document.querySelector(elem.getAttribute("href"));
		targetTab.classList.add("active-tab-content");
	});
});

let plusBtns = document.querySelectorAll(".plus-btn");
let minusBtns = document.querySelectorAll(".minus-btn");

[...plusBtns].forEach(function(btn){
	btn.addEventListener("click", function(evt){
		evt.preventDefault();
		let pricingNodeAmount 	= btn.parentNode.parentNode.getAttribute("data-unit-price");
		let unitCounters 		= btn.parentNode.parentNode.querySelectorAll(".unit-count");
		let amounts 			= btn.parentNode.parentNode.querySelectorAll(".amount");
		let unitCounter 		= unitCounters[0];
		let amount 				= amounts[0];
		
		let nextCounterAmount 	= parseInt(unitCounter.textContent) + 1;
		let nextAmount 			= nextCounterAmount * pricingNodeAmount;
		unitCounter.textContent = nextCounterAmount;
		amount.textContent 		= "$" + nextAmount;		
	});	
});

[...minusBtns].forEach(function(btn){
	btn.addEventListener("click", function(event){
		event.preventDefault();
		let pricingNodeAmount 	= btn.parentNode.parentNode.getAttribute("data-unit-price");
		let unitCounters 		= btn.parentNode.parentNode.querySelectorAll(".unit-count");
		let amounts 			= btn.parentNode.parentNode.querySelectorAll(".amount");
		let unitCounter 		= unitCounters[0];
		let amount 				= amounts[0];
		let nextCounterAmount 	= parseInt(unitCounter.textContent) - 1;
		let nextAmount 			= nextCounterAmount * pricingNodeAmount;
		
		if(parseInt(unitCounter.textContent) > 0){
			unitCounter.textContent = nextCounterAmount;
			amount.textContent 		= "$" + nextAmount;
		}
	});
});

let filter_Tabs = $(".filter-tabs");
let tab_content = $(".tab-content");

[...filter_Tabs].forEach(function(elem){
	elem.addEventListener("click", function(e){
		e.preventDefault();

		let targetTab = document.querySelector(elem.getAttribute("href"));

		[...tab_content].forEach(function(each_tab){
			if(each_tab != targetTab){ 
				each_tab.classList.remove("active-tab-content");
			}
		});
		
		if(window.getComputedStyle(targetTab).display == "none"){
			targetTab.classList.add("active-tab-content");
		}else{
			targetTab.classList.remove("active-tab-content");
		}
	}); 
});

let tab_links = $(".tab-links");
let list_menu = $(".list-menu");

[...tab_links].forEach(function(elem){
	elem.addEventListener("click", function(e){
		e.preventDefault();

		let targetTab = elem.getAttribute("href");

		[...list_menu].forEach(function(each_tab){
			let tab_id = "#" + each_tab.getAttribute("id");
			if(tab_id == targetTab){
				if(window.getComputedStyle(document.querySelector(tab_id)).display == "none"){
					document.querySelector(tab_id).style.display = "block";
				}else{
					document.querySelector(tab_id).style.display = "none";
				}
			}
		});

		document.body.addEventListener("click", function(evt){
			let eventSrc = evt.target;
			
			if(window.getComputedStyle(elem).display != "none" && eventSrc != elem){
				document.querySelector(targetTab).style.display = "none";
			}
		});
	}); 
});


let list_modal = document.querySelector("#list-modal");
let btn_modal = document.querySelector("#btn-modal");


document.body.addEventListener("mouseup", function(evt){
	let eventSrc = evt.target || evt.srcElement ;
	
	if(window.getComputedStyle(list_modal).display != "none" && !list_modal.contains(eventSrc)  ){
		list_modal.style.display = "none";
	}
});


btn_modal.addEventListener("click", function(evt){
	evt.preventDefault();

	if(window.getComputedStyle(list_modal).display == "none"){
		list_modal.style.display = "block";
	}else{
		list_modal.style.display = "none";
	}
});