define(['react', './LinkedAPI'], function(React, API) {

	IN.Event.on(IN, "auth", function() {
		API.connections(function(connections) {
			console.log(connections);
		});
	});

	var HelloWorld = React.createClass({
		render: function() {
		  return (
		      <div>
		        Hello World React
		        <Haha />
		      </div>
		  );
		}
	});

	var Haha = React.createClass({
		render: function() {
		  return (
		      <div>
		        haha ha
		      </div>
		  );
		}
	});

	return HelloWorld;
});
