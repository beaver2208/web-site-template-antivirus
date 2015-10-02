
var main_menu = document.getElementById('main_menu');

main_menu.addEventListener('click', function(e){

	for(var i = 0; i<main_menu.childNodes[1].children.length; i++ ){
	if(main_menu.childNodes[1].children[i].children[0].classList.contains('main_menu_active') ){
		main_menu.childNodes[1].children[i].children[0].classList.remove('main_menu_active');
	}
}
	var target = e.target;
	
	if(target.tagName == 'A' ){
		target.classList.add('main_menu_active');
	}


})

