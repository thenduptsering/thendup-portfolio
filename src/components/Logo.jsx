import { useEffect, useState } from 'react';

export default function Logo ({ animationClassName, animationTime = 2500 }) {
  const [appendClass, setAppendClass] = useState(true);

  useEffect(() => {
    if (animationClassName == null) return;

    setAppendClass(true);

    setTimeout(() => {
      setAppendClass(false);
    }, animationTime);
  }, [])

  return (
    <div className={`Logo fa-stack fa-2x ${appendClass ? animationClassName : ''}`}>
      <i className="Logo__left fa-solid fa-angle-left fa-stack-2x" />
      <i className="Logo__right fa-solid fa-angle-right fa-stack-2x" />
    </div>
  );
}