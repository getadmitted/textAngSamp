var mongoose = require('mongoose');

module.exports = mongoose.model('Todo', {
	date: String,
	store: String,
	desc: String,
	price: String,
	cardNo: String
});