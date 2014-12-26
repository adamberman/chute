Chute.Models.Album = Backbone.Model.extend({

	urlRoot: "http://api.getchute.com/v2/albums/aus6kwrg/assets",

	images: function() {
		if (!this._images) {
			this._images = new Chute.Collections.Images([], { album: this });
		}
		return this._images
	},

	parse: function (response) {
		if (response.data) {
			var imagesArr = [];
			_.each(response.data, function (item) {
				imagesArr.push(new Chute.Models.Image(item));
			})
			this.images().add(imagesArr, { parse: true });
			delete response.data;
		}
		if (response.pagination) {
			this.nextImagesLink = response.pagination.next_page;
			delete response.pagination
		}
		return response
	}
})

Chute.surfAlbum = new Chute.Models.Album()
Chute.surfAlbum.fetch()