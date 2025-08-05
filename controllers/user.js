import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import { generate } from '../helpers/token.js';
import { ROLES } from '../constants/roles.js';

// register

export async function register(login, password) {
	if (!password) {
		throw new Error('Password is empty');
	}
	const passwordHash = await bcrypt.hash(password, 10);

	const user = await User.create({ login, password: passwordHash });
	const token = generate({ id: user.id });

	return { user, token };
}

// login

export async function login(login, password) {
	const user = await User.findOne({ login });

	if (!user) {
		throw new Error('User not found');
	}

	const isPasswordMatch = await bcrypt.compare(password, user.password);

	if (!isPasswordMatch) {
		throw new Error('Wrong ');
	}

	const token = generate({ id: user.id });

	return { token, user };
}

export function getUsers() {
	return User.find();
}

export function getRoles() {
	return [
		{ id: ROLES.ADMIN, name: 'Admin' },
		{ id: ROLES.MODERATOR, name: 'Moderator' },
		{ id: ROLES.USER, name: 'User' },
	];
}

// delete
export function deleteUser(id) {
	return User.deleteOne({ _id: id });
}

// edit (roles)
export function updateUser(id, userDate) {
	return User.findByIdAndUpdate(id, userDate, { returnDocument: 'after' });
}
