function callBatphone() {
	var pjson = require('./package.json');
	console.log('calling batman ' + pjson.version);
}
exports.callBatphone = callBatphone;

