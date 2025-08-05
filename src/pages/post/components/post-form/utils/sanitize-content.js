export const sanizeContent = (content) => {
	// const rrr = content.replaceAll('&nbsp;', ' ').replace(/ +/, ' ');
	// console.log(rrr);
	return content
		.replaceAll('&nbsp;', ' ')
		.replaceAll('<div><br></div>', '\n')
		.replaceAll('<div>', '\n')
		.replaceAll('</div>', '');
};

// .replaceAll('&nbsp;', '');

// .replaceAll(/\s+/g, ' ')

//		.replace(/ +/, ' ')
