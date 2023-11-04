import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';

function AnimatedButton() {
  const btnRef = useRef(null);

  const handleButtonClick = () => {
    const tl = gsap.timeline();
    tl.fromTo(
      btnRef.current,
      { autoAlpha: 0, scale: 0.7 },
      { autoAlpha: 1, scale: 1, duration: 0.5 }
    );
  };

  useEffect(() => {
    // Initial animation on mount, if needed
    gsap.set(btnRef.current, { autoAlpha: 0, scale: 0.7 });
  }, []);

  return (
    <div>
      <button ref={btnRef} onClick={handleButtonClick} style={{border:"1px solid black",visibility:"inherit",color:"red"}}>
        Click to Animate
      </button>
    </div>
  );
}

export default AnimatedButton;
