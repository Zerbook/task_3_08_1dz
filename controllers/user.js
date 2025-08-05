import bcrypt from 'bcrypt';
import { User } from '../models/User.js';
import generateToken from '../helpers/generateToken.js';

// register

export async function register(login, password) {
	if (!password) {
		throw new Error('Password is empty');
	}
	const passwordHash = await bcrypt.hash(password, 10);

	const user = await User.create({ login, password: passwordHash });

	return user;
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

	const token = generateToken({ id: user.id });

	return { token, user };
}

// delete

// edit (roles)
