import React, { useState } from "react";
import "./index.css";
import "./App.css";
import { CSSTransition } from "react-transition-group";

export default function Example() {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <CSSTransition in={inProp} timeout={200} className="my-node">
        <div>Test</div>
      </CSSTransition>
      <button type="button" onClick={() => setInProp(true)}>
        Click to Enter
      </button>
    </div>
  );
}

// export default function Example() {
//   // Declare a new state variable, which we'll call "count"
//   const [count, setCount] = useState(0);

//   const [displayClass, setDisplayClass] = useState("feedback");

//   useEffect(() => {
//     setDisplayClass("feedbackMore");
//   }, [count]);

//   return (
//     <div>
//       <p className={displayClass}>You clicked {count} times</p>
//       <button onClick={() => setCount(count + 1)}>Click me</button>
//     </div>
//   );
// }
