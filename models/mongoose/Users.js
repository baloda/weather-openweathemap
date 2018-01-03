var mongoose = require('mongoose'),
	bp = require('bluebird');
var bcrypt = bp.promisifyAll(require("bcrypt"));

var Schema = mongoose.Schema;

var schema = new Schema({
	name: {
		type: String
	},
	email: {
		type: String,
		unique: true,
		index: true,
		required: [true, 'Email is required'],
		match: [/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Email is not valid']
	},
	profileImage: {
		type: String,
		default: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpyKmXSqSPCJleLzN1sHNQs75BUgGPe7oQS4PHVm61MyYsTRNv'
	},
	password: {
		type: String,
		required: true,
		minlength: 6
	},
	createdAt: {
		type: Date,
		default: Date.now()
	},
	updatedAt: {
		type: Date,
		default: Date.now()
	}
});


schema.pre('validate', async function(next) {
	console.log(this.password.length);
	if(this.password && this.password.length>=6) next();
	let error = new Error();
	error.message = 'Password Should be minimum length of 6';
	next(error);
});
schema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    }
    try {
        const hash = await bcrypt.hashAsync(this.password, 10);
        this.password = hash;
        next();
    } catch (err) {
        next(err);
    }
});
	
schema.methods.isPasswordValid = function (password) {
	try {
		return bcrypt.compareAsync(password, this.password);
	}
	catch (err) {
		throw err;
	}
};

var Users = mongoose.model('Users', schema, 'Users');


module.exports = Users;