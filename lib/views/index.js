Chute.Views.Index = Backbone.CompositeView.extend({

	initialize: function () {
		this.listenTo(this.collection, 'add', function(){
			this.addAllImages(this.collection)
		}.bind(this));
	},

	addImage: function (image) {
		var subview = new Chute.Views.Image({
			model: image
		});
		this.addSubview('.images', subview);
	},

	addAllImages: function (images) {
		images.forEach(function(image) {
			this.addImage(image);
		}.bind(this));
	},

	addMoreImages: function () {
		// triggered from infinite scroll event, fetches more images through model, adds them to collection, renders them onto page
	},

	className: 'index',

	template: _.template( $('#index-template').html() ),

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		return this;
	}
})