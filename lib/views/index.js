Chute.Views.Index = Backbone.CompositeView.extend({

	initialize: function () {
		this.addAllImages(this.collection);
	},

	addImage: function (image) {
		var subview = new Chute.Views.Image({
			model: image
		});
		this.addSubview('.images', subview);
	},

	addAllImages: function (images) {
		_.each(images, function(image) {
			this.addImage(image);
		}.bind(this));
	},

	addMoreImages: function () {
		// triggered from infinite scroll event, fetches more images through model, adds them to collection, renders them onto page
	},

	className: 'index',

	template: JST['index'],

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})