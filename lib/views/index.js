Chute.Views.Index = Backbone.CompositeView.extend({

	initialize: function () {
		this.listenTo(this.collection, 'add', this.addImage)
	},

	addImage: function (image) {
		var subview = new Chute.Views.Image({
			model: image
		});
		this.addSubview('.images', subview);
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