import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('src/db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);

server.use((req, res, next) => {
	if (req.query.page || req.query.limit) {
		req.query._page = req.query.page;
		req.query._limit = req.query.limit;
	}
	next();
});

server.use(router);
server.listen(3000, () => {
	console.log('JSON Server is running');
});
