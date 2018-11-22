(function(){
	let el= document.querySelector('.team');
	el.classList.add('animated');
	let waypoint = new Waypoint({
		element: el,
		handler: function() {
			this.element.classList.add('bounceInLeft')
		},
		offset: '100%'
	});
})();