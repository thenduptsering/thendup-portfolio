import { useEffect, useRef } from 'react';
import useMouseMove from '../hooks/useMouseMove';

export default function Blob () {
  const { mouseX, mouseY } = useMouseMove();
  const blobRef = useRef(null);

  if (blobRef?.current != null && mouseX != null && mouseY != null) {
    blobRef.current.animate({
      left: `${mouseX - 250}px`,
      top: `${mouseY - 250}px`,
    }, { duration: 10000, fill: 'forwards' });
  }

  useEffect(() => {
    if (blobRef?.current != null) {
      blobRef.current.animate({
        left: `${mouseX - 250}px`,
        top: `${mouseY - 250}px`,
      }, { duration: 0, fill: 'forwards' });
    }
  }, []);

  return (
    <div className="Blob-Container">
      <div ref={blobRef} className="Blob" />

      <div className="Blob__blur" />
    </div>
  );
}