import React from "react"
import Counter from "./counter"


function App() {


    return (
        <>
            <Counter/>
        </>
    )
}

// function App(){
//     const [count, setCount] = useState(0);
//     const [show, setShow] = useState(true);

//     const increment = () => {
//         setCount(count + 1)
//     }
//     const decrement = () => {
//         (count > 0 ? setCount(count - 1) : reset())
//     }
//     const reset = () => {
//         setCount(0)
//     }
//     return(
//         <div>
// <button onClick={() => { setShow(!show) }}>Show/Hide</button>{" "}{show ? "showed" : "hidden"}
//             {show && (
//                 <>
//                     <p>counter-{count}</p>
//                     <button onClick={increment}>+</button>{"  "}
//                     <button onClick={decrement}>-</button>{"  "}
//                     <button onClick={reset}>0</button>
//                 </>
//             )}
//             </div>
//     )
// }

export default App