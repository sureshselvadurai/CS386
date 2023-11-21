const mongoose = require('mongoose');
let schemaUser = mongoose.Schema({
	courseID: {
		type: String,
		required: true,
		unique: true
	},
	name: {
		type: String,
		required: true,
		unique: true,
		default:"Unknown"
	},
	preReqs: {
		type: Array,
		required: true,
		default:"Unknown"
	},
	active: {
		type: Boolean,
		required: true,
		default: true
	}
})
module.exports = mongoose.model('CSCourse', schemaUser);


