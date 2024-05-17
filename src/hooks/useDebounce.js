import { useRef } from 'react';

const useDebounce = (cb, delay = 1000) => {
	// create a timeout ref so that it persists through re-renders
	let timeout = useRef(null);

	return (...args) => {
		// if the function is called again, clear the previous timeout immediately
		if (timeout.current != null) {
			clearTimeout(timeout.current);
		}

		// run the callback after a set period of time
		timeout.current = setTimeout(() => {
			cb(...args);
		}, delay);
	};
};

export default useDebounce;
