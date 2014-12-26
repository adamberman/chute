Chute.Routers.Router = Backbone.Router.extend({

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "index"
	},

	index: function() {
		var view = new Chute.Views.Index({ 
			model: Chute.surfAlbum, 
			collection: Chute.surfAlbum.images() 
		});
		
		this.$rootEl.html(view.render().$el);
	}
})