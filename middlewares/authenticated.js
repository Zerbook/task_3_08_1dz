import 'dotenv/config';
import { verify } from '../helpers/token.js';
import { User } from '../models/User.js';

export default async (req, res, next) => {
	const tokenData = verify(req.cookies.token);

	const user = await User.findOne({ _id: tokenData.id });

	if (!user) {
		res.send({ error: 'Authenticated user not found' });

		return;
	}

	req.user = user;

	next();
};
