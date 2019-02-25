window.onload = function () {
var butt = document.querySelector('.products').getElementsByTagName('button');
	for (var i = 0; i < butt.length; i++) {
		butt[i].addEventListener('click',setProduct);
	}

	function setProduct() {
		var price = this.previousSibling.innerHTML;
		var name = this.parentNode.children[2];
		console.log(name);
	}
}