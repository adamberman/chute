Chute.Views.Image = Backbone.View.extend({
	
	className: 'image',

	template: JST['image'],

	render: function() {
		var content = this.template({
			image: this.model
		});
		this.$el.html(content);
		return this;
	}
})