function getText() {
	return '<h2>Congratulations, you won!</h2>';
}

function showText() {
	document.getElementById('textbox').innerHTML = getText();
}

document.getElementById('submit').addEventListener('click', showText);