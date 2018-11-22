(function(){
	let toggleBtn= (idBtn)=>{
		/*
			idBtn - id кнопки при нажатии на которую происходит прерключение
			data-id-control - id елемента которому добавляется/удаляется класс ".active" после нажатия на кнопку 
		*/
		// Клик
		let btn= document.getElementById(idBtn);
		if(btn){
			btn.addEventListener('click', function(){
				this.classList.toggle('active');
				let idControl= this.getAttribute('data-id-control');
				document.getElementById(idControl).classList.toggle('active');
			});
			// Касание
			btn.addEventListener('touch', function(){
				this.classList.toggle('active');
				let idControl= this.getAttribute('data-id-control');
				document.getElementById(idControl).classList.toggle('active');
			});
		}
	}



	toggleBtn('btn_sider-1');
	toggleBtn('btn_sider-2');
	toggleBtn('btn_sider-3');
	toggleBtn('btn_sider-4');

})();