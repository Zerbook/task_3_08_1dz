import { setPostData } from './set-post-data';

export const loadPostAsync = (requestServer, postId) => (dispatch) => {
	return requestServer('fetchPost', postId).then((postData) => {
		if (postData.res) {
			dispatch(setPostData(postData.res));
		}
		// console.log('postData', postData);
		return postData;
	});
};
