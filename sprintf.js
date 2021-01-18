function sprintf(template, values) {
	return template.replace(/%s/g, function() {
		return values.shift();
	});
}
