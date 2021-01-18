// expanded
function checkLength(value) {
	return (value.toString().length < 2 ? '0' + value : value);
}

// compressed
function checkLength(a){return 2>a.toString().length?"0"+a:a};
