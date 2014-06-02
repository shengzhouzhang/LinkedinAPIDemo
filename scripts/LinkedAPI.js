define(['linkedin'], function(Linkedin) {

	IN.init({
		api_key: '75eym30rv08bvx',
		authorize: true
	});

	var API = {
		connections: function(cb) {
			IN.API.Connections("me")
	          .result(function(data) {
	          	cb(data.values)
	          });
		}
	};

	return API;
});
