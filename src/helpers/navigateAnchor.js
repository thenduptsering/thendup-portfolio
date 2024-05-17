const downloadResume = (url) => {
	const anchor = document.createElement('a');
	anchor.href = url;
	anchor.target = 'blank';
	anchor.rel = 'noopener noreferrer';
	anchor.style = 'display: none';
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
};

export default downloadResume;
