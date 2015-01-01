Chute.Views.Index = Backbone.CompositeView.extend({

	initialize: function () {
		this.listenTo(this.collection, 'add', this.addImage);
		this._masonryInit = false;
	},

	events: {
		'scroll': 'handleScroll'
	},

	handleScroll = function () {
		var triggerPoint = 100;
		if ( !this.isLoading && this.el.scrollTop + this.el.clientHeight + triggerPoint > this.el.scrollHeight) {
			this.addMoreImages();
		}
	},

	addImage: function (image) {
		var subview = new Chute.Views.Image({
			model: image
		});
		this.addSubview('.images', subview);
		if (!this._masonryInit) {
			this.initMasonry();
		} else {
			var $container = $('.images');
			$container.masonry('appended', subview);
		}
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
				gutter: 4,
				isFitWidth: true
			});
		});
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