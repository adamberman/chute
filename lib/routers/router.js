Chute.Routers.Router = Backbone.Router.extend({

	initialize: function (options) {
		this.$rootEl = options.$rootEl;
	},

	routes: {
		"": "index"
	},

	index: function() {
		var album = new Chute.Models.Album();
		album.fetch();
		var view = new Chute.Views.Index({ model: album });
		this.$rootEl.html(view.render().$el);
	}
})