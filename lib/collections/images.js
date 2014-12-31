Chute.Collections.Images = Backbone.PageableCollection.extend({

	model: Chute.Models.Image,

	url: 'http://api.getchute.com/v2/albums/aus6kwrg/assets',
	
	parse: function (response) {
		if (response.data) {
			var imagesArr = [];
			response.data.forEach(function (item) {
				imagesArr.push(new Chute.Models.Image(item));
			})
			this.add(imagesArr, { parse: true });
			delete response.data;
		}
		if (response.pagination) {
			this.state.currentPage = response.pagination.currentPage;
		}
		return response
	}
})

Chute.surfImages = new Chute.Collections.Images()
Chute.surfImages.fetch()