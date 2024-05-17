import { useEffect, useRef } from 'react';

/**
 * Utility hook for detecting and reacting to clicks outside of a given element (e.g. Commonly used in dropdowns such as the organization switcher)
 * @param onClick Handler that runs anytime an outside click is detected
 * @param disabled Condition under which outside click detection is disabled and the handler will not run
 */

export default function useOnClickOutside({ onClick, disabled }) {
	const ref = useRef(null);

	useEffect(() => {
		const listener = (e) => {
			if (
				disabled ||
				ref == null ||
				ref.current == null ||
				ref.current.contains(e.target)
			) {
				return;
			}

			if (onClick) onClick(e);
		};

		document.addEventListener('click', listener);
		document.addEventListener('touchstart', listener);

		return () => {
			document.removeEventListener('click', listener);
			document.removeEventListener('touchstart', listener);
		};
	}, [ref, onClick, disabled]);

	return ref;
}
