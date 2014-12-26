window.JST = {};

window.JST['index'] = _.template(
	'<div class="images"></div>'
);

window.JST['image'] = _.template(
	'<img src="' + '<%= image.get("url") %>"'
);