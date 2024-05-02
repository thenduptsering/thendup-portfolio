import { useState } from 'react';

export default function Tooltip ({ content, children, direction, delay = 200 }) {
  const [show, setShow] = useState();

  const style = {
    transition: `opacity ${delay}ms, visibility ${delay}ms`,
    transitionDelay: `${delay}ms`,
  };

  return (
     <div
      tabIndex="0"
      className="Tooltip-Container"
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
    >
      <div
        style={style}
        className={`Tooltip__tooltip ${!show ? 'Tooltip__tooltip--hide' : ''} Tooltip__tooltip--${direction}`}
      >
        {content}
      </div>
      
      <div className="Tooltip__primary">{children}</div>
    </div>
  );
}