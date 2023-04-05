const sonic = document.querySelector('.sonic');
const badnik = document.querySelector('.badnik');

	const jump = () => {
		sonic.classList.add('jump');
		
		setTimeout(() => {
			sonic.classList.remove('jump');
		}, 600);
	}
	
	const loop = setInterval(()=> {
		
		const badnikPosition = badnik.offsetLeft;
		const sonicPosition = +window.getComputedStyle(sonic).bottom.replace('px', '');
		
		if(badnikPosition <=90 && badnikPosition > 0 && sonicPosition <80){
			
			badnik.style.animation = 'none';
			badnik.style.left = `${badnikPosition}px`;
			
			sonic.style.animation = 'none';
			sonic.style.bottom = `${sonicPosition}px`;
			
			sonic.src = 'images/gameover.png';
			sonic.style.width = '100px';
			
			clearInterval(loop);
			
		}
	} , 10);
	alert("O Jogo será iniciado");
	document.addEventListener('keydown', jump);