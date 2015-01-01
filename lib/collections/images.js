Chute.Collections.Images = Backbone.PageableCollection.extend({

	model: Chute.Models.Image,

	url: 'http://api.getchute.com/v2/albums/aus6kwrg/assets',
	
	parse: function (response) {
		if (response.data) {
			var that = this;
			response.data.forEach(function (item) {
				that.add(new Chute.Models.Image(item), { parse: true });
			})
			delete response.data;
		}
		if (response.pagination) {
			this.state.currentPage = response.pagination.current_page;
		}
		return response
	}
})

Chute.surfImages = new Chute.Collections.Images()
Chute.surfImages.fetch()