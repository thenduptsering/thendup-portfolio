import { useEffect, useRef, useState } from 'react';

import useIsOnScreen from '@/hooks/useIsOnScreen';

import skills from '@/constants/skills.json';

export default function Skills() {
	const ref = useRef(null);
	const [animate, setAnimate] = useState(false);
	const [animated, setAnimated] = useState(false);
	const isVisible = useIsOnScreen({ ref: ref });

	useEffect(() => {
		if (isVisible && !animated) {
			setAnimate(true);

			setTimeout(() => {
				setAnimate(false);
				setAnimated(true);
			}, 2000);
		}
	}, [isVisible]);

	return (
		<section
			ref={ref}
			id="skills"
			className={`Home__section Home__section--skills ${
				!animated ? 'Home__section--standby' : ''
			} ${animate ? 'Home__section--animate' : ''}`}
		>
			<h2 className="Home__section-heading">skills</h2>

			<div className="Home__section-info">
				<div className="Home__section-info-main">
					<div className="Home__section-info-skills">
						{skills.map((skill) => {
							return (
								<div key={skill.key} className="Skill">
									<div className="Skill__icon">
										<div className="Skill__icon-backdrop" />

										<img
											className="Skill__icon-pic"
											src={skill.icon}
											alt={`${skill.label} icon`}
										/>
									</div>

									<div className="Skill__label">{skill.label}</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}
