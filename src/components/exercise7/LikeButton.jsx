import { useRef, useState } from "react";

const LikeButton = ({ initialCount = 0 }) => {
  const [count, setCount] = useState(initialCount);
  const lastTimeClicked = useRef(0);

  const incrementLike = () => {
    const now = Date.now();
    if (now - lastTimeClicked.current >= 500) {
      setCount(count + 1);
      lastTimeClicked.current = now;
    }
  };
  return (
    <div>
      <p>Likes: {count}</p>
      <button className="btn btn-primary" onClick={incrementLike}>
        Increment
      </button>
    </div>
  );
};

export default LikeButton;
