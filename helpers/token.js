import jwt from 'jsonwebtoken';
import 'dotenv/config';

export const generate = (data) => {
	return jwt.sign(data, process.env.SIGN, { expiresIn: '30d' });
};

export const verify = (token) => {
	return jwt.verify(token, process.env.SIGN);
};
