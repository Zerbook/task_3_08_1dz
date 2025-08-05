import mongoose from 'mongoose';
import roles from '../constants/roles';

const UserSchema = mongoose.Schema(
	{
		login: {
			type: String,
			required: true,
		},
		password: {
			type: String,
			required: true,
		},
		role: {
			type: Number,
			default: roles.USER,
		},
	},
	{ timestamps: true },
);

export const User = mongoose.model('User', UserSchema);
