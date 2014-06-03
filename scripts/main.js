require(["jquery", "jsx!Connections", "./LinkedAPI"], function($, Connections, API) {
	
	IN.Event.on(IN, "auth", function() {
		API.connections(function(connections) {
			console.log(connections);
			Connections.render(connections, document.body);
		});
	});
 });

