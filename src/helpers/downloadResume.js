const RESUME_URL = '/_thenduptsering_resume.pdf';

const downloadResume = () => {
	const anchor = document.createElement('a');
	anchor.href = RESUME_URL;
	anchor.download = RESUME_URL.split('/').pop();
	anchor.style = 'display: none';
	document.body.appendChild(anchor);
	anchor.click();
	document.body.removeChild(anchor);
};

export default downloadResume;
