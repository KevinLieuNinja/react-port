import React from "react";
import { useSpring, animated } from "react-spring";
import { Link } from "react-router-dom";

function CardInfo(props) {
  const style = useSpring({
    opacity: 1,
    from: { opacity: 0 },
  });

  return (
    <animated.div className="k-card-info" style={style}>
      <p className="k-card-title">{props.title}</p>
      <p className="k-card-sub-title">{props.subTitle}</p>
      {props.link !== "/about" ? (
        <a href={props.link} target="_blank" rel="noOpener noReferrer">
          Check Out!
        </a>
      ) : (
        <Link to={props.link}>About</Link>
      )}
    </animated.div>
  );
}

export default CardInfo;
