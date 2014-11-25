var React = require("react");
require('node-jsx').install({extension: '.jsx'});

module.exports = jsxRender;

function jsxRender(config) {
	var compiled = {};
	var render = function (viewPath, options, callback) {
		try {
			if (!compiled.hasOwnProperty(viewPath)) {
				compiled[viewPath] = React.createFactory(require(viewPath));
			}
   			var view = React.renderToString( compiled[viewPath](options.locals) );
   			return callback(null, view);
		} catch(ex) {
   			throw new Error(ex);
   		}

   	}
    return render

};