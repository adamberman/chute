Chute.Views.Index = Backbone.CompositeView.extend({

	initialize: function () {
		this.listenTo(this.collection, 'add', this.addImage);
		this.isLoading = false;
		$(window).on('scroll', this.handleScroll.bind(this));
	},

	handleScroll: function () {
		var triggerPoint = 600;
		if ( !this.isLoading && window.scrollY + triggerPoint > this.el.scrollHeight) {
			this.addMoreImages();
		}
	},

	addImage: function (image) {
		var subview = new Chute.Views.Image({
			model: image
		});
		this.addSubview('.images', subview);
		if (!this.isLoading) {
			this.initMasonry();
		} else {
			var $container = $('.images');
			$container.masonry('appended', subview.el);
		}
	},

	addMoreImages: function () {
		this.isLoading = true;
		this.collection.getNextPage();
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