define(['react'], function(React) {

	var Connections = React.createClass({
		render: function() {
			var people = this.props.data.map(function(person){
				return (<Person data={person} />)
			});
		  return (
		      <div>
		      	{people}
		      </div>
		  );
		}
	});

	var Person = React.createClass({
		render: function() {
		  return (
		  		<div>
		  			<div><h4>{this.props.data.lastName} {this.props.data.firstName}</h4></div>
		  			<div><span>{this.props.data.headline}</span></div>
		  			<div><span>{this.props.data.industry}</span></div>
		  			<div><span>{!!this.props.data.location ? this.props.data.location.name : ''}</span></div>
		  		</div>
		  );
		}
	});

	return {
		render: function(data, container){
			React.renderComponent(
				<Connections data={data} />, 
				container
			);
		}
	};
});
