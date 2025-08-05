import { transformPost } from '../transformers';

export const getPosts = (searchPhrase, page, limit) => {
	return fetch(
		`http://localhost:3000/posts?title_like=${searchPhrase}&_page=${page}&_limit=${limit}`,
	)
		.then((loadedPosts) =>
			Promise.all([loadedPosts.json(), loadedPosts.headers.get('Link')]),
		)
		.then(([loadedPosts, links]) => ({
			posts: loadedPosts && loadedPosts.map(transformPost),
			links,
		}));
};

// export const getPosts = (page, limit) => {
// 	return fetch(`http://localhost:3000/posts?_page=${page}&_limit=${limit}`)
// 		.then((response) => {
// 			if (!response.ok) {
// 				throw new Error(`HTTP error! Status: ${response.status}`);
// 			}
// 			return response.json();
// 		})
// 		.then((loadedPosts) => {
// 			console.log('page', page);
// 			console.log('loadedPosts', loadedPosts);
// 			if (!Array.isArray(loadedPosts)) {
// 				return []; // Возвращаем пустой массив как запасной вариант
// 			}

// 			return loadedPosts.map(transformPost);
// 		})
// 		.catch((error) => {
// 			console.error('Error fetching posts:', error);
// 			return []; // Возвращаем пустой массив в случае ошибки
// 		});
// };
