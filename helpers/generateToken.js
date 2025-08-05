import jwt from 'jsonwebtoken';
import 'dotenv/config';

export default (data) => {
	return jwt.sign(data, process.env.SIGN, { expiresIn: '30d' });
};
