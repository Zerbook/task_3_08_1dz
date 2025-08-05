import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { Icon } from '../../../../../../components';
import { openModal, CLOSE_MODAL, removeCommentAsync } from '../../../../../../actions';
import { useServerRequest } from '../../../../../../hooks';
import styled from 'styled-components';

const CommentContainer = ({ className, postId, id, author, publishedAt, content }) => {
	const dispatch = useDispatch();
	const requestServer = useServerRequest();

	const onCommentRemove = (id) => {
		dispatch(
			openModal({
				text: 'Удалить комментарий?',
				onConfirm: () => {
					dispatch(removeCommentAsync(requestServer, postId, id));
					dispatch(CLOSE_MODAL);
				},
				onCancel: () => dispatch(CLOSE_MODAL),
			}),
		);
	};
	return (
		<div className={className}>
			<div className="comment">
				<div className="information-panel">
					<div className="author">
						<Icon
							inactive={true}
							id="fa-user-circle-o"
							size="18px"
							margin="0 10px 0 0"
							onClick={() => {}}
						/>
						{author}
					</div>
					<div className="published-at">
						<Icon
							inactive={true}
							id="fa-calendar-o"
							size="18px"
							margin="0 10px 0 0"
							onClick={() => {}}
						/>
						{publishedAt}
					</div>
				</div>
				<div className="comment-text">{content}</div>
			</div>
			<Icon
				id="fa-trash-o"
				size="21px"
				margin="0 0 0 10px"
				onClick={() => onCommentRemove(id)}
			/>
		</div>
	);
};

export const Comment = styled(CommentContainer)`
	display: flex;
	margin-top: 10px;

	& .comment {
		width: 550px;
		padding: 5px 10px;
		border: 1px solid #000;
	}

	& .information-panel {
		display: flex;
		justify-content: space-between;
	}

	& .author {
		display: flex;
	}

	& .published-at {
		display: flex;
	}
`;

Comment.propTypes = {
	postId: PropTypes.string.isRequired,
	id: PropTypes.string.isRequired,
	author: PropTypes.string.isRequired,
	content: PropTypes.string.isRequired,
	publishedAt: PropTypes.string.isRequired,
};
