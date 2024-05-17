import useMouseMove from '@/hooks/useMouseMove';
import { useEffect, useRef, useState } from 'react';

const random = (min, max) => Math.floor(min + Math.random() * (max - min));
const remain = (n) => 100 - n;

const getRandomCoordinates = () => {
	const offset = 25;

	const coordinates = [];
	for (let i = 0; i < 4; i++) {
		const coordinatePct = random(offset, remain(offset));
		coordinates.push(coordinatePct);
		coordinates.push(remain(coordinatePct));
	}

	return coordinates;
};

export default function Blob() {
	const [blobCoordinates, setBlobCoordinates] = useState(
		'72% 28% 47% 53% / 67% 42% 58% 33%'
	);
	const { mouseX, mouseY } = useMouseMove();
	const blobRef = useRef(null);

	const morphBlob = () => {
		const c = getRandomCoordinates();

		setBlobCoordinates(
			`${c[0]}% ${c[1]}% ${c[2]}% ${c[3]}% / ${c[4]}% ${c[6]}% ${c[7]}% ${c[5]}%`
		);
	};

	if (blobRef?.current != null && mouseX != null && mouseY != null) {
		blobRef.current.animate(
			{
				left: `${mouseX - 250}px`,
				top: `${mouseY - 250}px`,
				borderRadius: blobCoordinates,
			},
			{ duration: 10000, fill: 'forwards' }
		);
	}

	useEffect(() => {
		if (blobRef?.current != null) {
			blobRef.current.animate(
				{
					left: `${mouseX - 250}px`,
					top: `${mouseY - 250}px`,
					borderRadius: blobCoordinates,
				},
				{ duration: 0, fill: 'forwards' }
			);
		}

		const interval = setInterval(() => {
			morphBlob();
		}, 1500);

		return () => {
			clearInterval(interval);
		};
	}, []);

	return (
		<div className="Blob-Container">
			<div ref={blobRef} className="Blob" />

			<div className="Blob__blur" />
		</div>
	);
}
