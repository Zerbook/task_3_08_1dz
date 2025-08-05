import bcrypt from 'bcrypt';
import { User } from '../models/User.js';

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

// logout

// delete

// edit (roles)
