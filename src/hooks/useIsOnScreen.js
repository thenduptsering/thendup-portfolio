import { useEffect, useMemo, useState } from 'react';

export default function useIsOnScreen({ ref, threshold = 0.2 }) {
	if (ref == null) return false;

	const [isOnScreen, setIsOnScreen] = useState(false);

	const observer = useMemo(
		() =>
			new IntersectionObserver(
				([entry]) => {
					console.log({ entry });
					setIsOnScreen(entry.isIntersecting);
				},
				{
					root: null, // Use viewport as the root
					rootMargin: '0px', // No margin
					threshold, // % visibility threshold
				}
			),
		[ref]
	);

	useEffect(() => {
		observer.observe(ref.current);

		return () => {
			observer.disconnect();
		};
	}, []);

	return isOnScreen;
}
