define(["react"], function(React){

	var HelloWorld = React.createClass({
		render: function(){
		  return (
		      <div>
		        Hello World React
		        <Haha />
		      </div>
		  );
		}
	});

	var Haha = React.createClass({
		render: function(){
		  return (
		      <div>
		        haha ha
		      </div>
		  );
		}
	});

	return HelloWorld;
});
