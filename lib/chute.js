window.Chute = {
	Models: {},
	Collections: {},
	Views: {},
	Routers: {},
	initialize: function() {
		new Chute.Routers.Router({$rootEl: $("#main")});
		Backbone.history.start();
	}
};

$(document).ready(function(){
	Chute.initialize();
})