/* exported util */

var util = {
	build: function(suffix) {
		var prefix = 'http://172.24.30.22:8080';

		if (location.origin.indexOf('localhost') !== -1) {
			prefix = 'http://localhost:8080';
		}

		return prefix + suffix;
	}
};
