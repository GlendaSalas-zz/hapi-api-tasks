const mongoose = require('mongoose')

mongoose.Promise = global.Promise
const TasksSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
})
const Tasks = mongoose.model('tasks', TasksSchema)
module.exports = { Tasks }
