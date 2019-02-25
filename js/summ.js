window.onload = function() {
	var butt = document.querySelector('.products').getElementsByTagName('button');
	var summ = document.querySelector('#summ');
	var clearButton = document.querySelector('#clear');
	var modal = document.querySelector('#modal_form');
	var ms = document.querySelector('.ms');

	summ.innerHTML = getSumm();

	for (var i = 0; i < butt.length; i++) {
		butt[i].addEventListener('click',setProduct);
	}

	if (localStorage.getItem('mas') != undefined) {
		var mas = JSON.parse(localStorage.getItem("mas"));
			for (var i =0; i<mas.length; i++) {	
				var txt = document.createElement('p');
				txt.innerHTML = mas[i].name + ' : ' + mas[i].price + '$';
				modal.appendChild(txt);
			}
	}else {
		var mas = [];
	}

	function getSumm () {
		var summFromStorage = 0;
		if (localStorage.getItem('key') != undefined) {
			summFromStorage = +localStorage.getItem('key');
			summ.innerHTML = summFromStorage;
			return summFromStorage;
		}
		return summFromStorage;
	}
	
		var count = 1;

	function setProduct() {
		ms.style.opacity = '1';
		setTimeout(hide, 4000);
		var price = this.previousSibling.innerHTML;
		var name = this.parentNode.children[2].innerHTML;
		var txt = document.createElement('p');
		summ.innerHTML = getSumm() + +price;
		localStorage.setItem('key',summ.innerHTML);
		txt.style.fontStyle = 'Italic';
		txt.innerHTML = name + ' : ' + price + '$';
		saveObj(name,price);
		modal.appendChild(txt);
	}

	clearButton.onclick = function() {
		localStorage.clear();
		alert('Storage is empty');
	}

	function saveObj (name, price) {
		var obj = {
			name: name,
			price: price
		}
		mas.push(obj);
		var serialObj = JSON.stringify(mas); 
		localStorage.setItem( 'mas', serialObj);
	}

	function hide () {
		ms.style.opacity = '0';
	}
}