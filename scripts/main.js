require(["jquery", "react", "jsx!HelloWorld"], function($, React, HelloWorld) {
	
	React.renderComponent(
		<HelloWorld />, 
		document.body
	);
 });

