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

	initMasonry: function() {
		var $container = $('.images');
		$container.imagesLoaded(function(){
			$container.masonry({
				columnWidth: 100,
				itemSelector: '.image',
				gutter: 15
			});
		});
	},

	className: 'index',

	template: _.template( $('#index-template').html() ),

	render: function () {
		var content = this.template();
		this.$el.html(content);
		this.attachSubviews();
		this.initMasonry();
		return this;
	}
})