import React, { useEffect, useRef, useState } from 'react';

const InputFocus = () => {
  const inputRef = useRef(null);
  const [refstate, setRefstate] = useState(false);

  useEffect(() => {
    if (refstate) {
      inputRef.current.focus();
      console.log("input focused");
    } else {
      inputRef.current.blur();
      console.log("input blurred");
    }
  }, [refstate]);  // Add refstate to the dependency array to re-run the effect
  
  return (
    <div>
      <input ref={inputRef} placeholder='focus to useref' />
      <button onClick={() => setRefstate(!refstate)}>Toggle Focus</button>
    </div>
  );
}

export default InputFocus;
