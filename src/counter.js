import React, { useReducer, useState } from "react"


const formReducer = (form, { target: { value, name, type, checked } }) => {
    return { ...form, [name]: type === "checkbox" ? checked : value }
}
function Counter() {
    // const [first, setfirst] = useState("")
    // const [last, setlast] = useState("")
    // const [pass, setpass] = useState("")
    // const [cpass, setcpass] = useState("")
    // const [email, setemail] = useState("")
    // const [check, setcheck] = useState(false)

    // const [form, setForm] = useState({
    //     first: "",
    //     last: "",
    //     pass: "",
    //     cpass: "",
    //     email: "",
    //     course:"",
    //     check: false

    // })

    const [form, dispatch] = useReducer(formReducer,{
        first: "",
        last: "",
        pass: "",
        cpass: "",
        email: "",
        course: "",
        check: false

    })
    // const handleChange = ({ target: { value, name, type, checked } }) => {
    //     setForm({ ...form, [name]: type === "checkbox" ? checked : value })
    // }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(form)
    }
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-sm-3"></div>
                <div className="col-sm-6">
                    <div className="card">
                        <div className="card-body">
                            <h1 className="card-title">Register</h1>
                            <form className="mt-4" onSubmit={handleSubmit}>
                                <div className="form-group">
                                    <label htmlFor="fname">First Name:</label>
                                    <input id="fname" name="first" type="text" className="form-control" /*onChange={({ target: { value } }) => setfirst(value)}*/
                                        //value={form.first}
                                        /*onChange={({ target: { value } }) => setForm({ ...form, first: value })}*/
                                        /*onChange={handleChange}*/
                                        onChange={dispatch} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="lname">Last Name:</label>
                                    <input id="lname" name="last" type="text" className="form-control" /*onChange={({ target: { value } }) => setlast(value)}*/
                                        /*onChange={({ target: { value } }) => setForm({ ...form, last: value })}*/
                                        onChange={dispatch} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input id="email" name="email" type="text" className="form-control" /*onChange={({ target: { value } }) => setemail(value)}*/
                                        /*onChange={({ target: { value } }) => setForm({ ...form, email: value })}*/
                                        onChange={dispatch} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input id="password" name="pass" type="text" className="form-control" /*onChange={({ target: { value } }) => setpass(value)}*/
                                        /*onChange={({ target: { value } }) => setForm({ ...form, pass: value })}*/
                                        onChange={dispatch} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="cpassword">Comfirm Password:</label>
                                    <input id="cpassword" type="text" name="cpass" className="form-control" /*onChange={({ target: { value } }) => setcpass(value)}*/
                                        /*onChange={({ target: { value } }) => setForm({ ...form, cpass: value })}*/
                                        onChange={dispatch} required />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="course">Course :</label>
                                    <select id="course" name="course" onChange={dispatch}>
                                        <option value="">--select--</option>
                                        <option value="mern">MERN</option>
                                        <option value="marn">MARN</option>
                                        <option value="python">PYTHON</option>
                                        <option value="java">JAVA</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <input id="check" type="checkbox" name="check" className="form-check-label"  /*onChange={({ target: { checked } }) => setcheck(checked)}*/
                                        /*onChange={({ target: { checked } }) => setForm({ ...form, check: checked })}*/
                                        onChange={dispatch} required />
                                    <label htmlFor="check">Terms and conditions</label>
                                </div>
                                <div className="form-group">
                                    <button type="submit" className="btn btn-success">submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3"></div>
            </div>
        </div>
    )
}

/*// const countReducer = (count, action) => {
//     switch (action) {
//         case "Increment": {
//             return count + 1;
//         }
//         case "Decrement": {
//             return count - 1;
//         }
//         case "Reset": {
//             return 0;
//         }
//         default: {
//             return count;
//         }
//     }
// }
//function Counter() {
    // const [count, dispatch] = useReducer(countReducer, 0);
    // const [show, setShow] = useState(true);

    //return(
 // <div>
        //     <button onClick={() => { setShow(!show) }}>Show/Hide</button>{" "}{show ? "showed" : "hidden"}
        //     {show && (
        //         <>
        //             <p>counter-{count}</p>
        //             <button onClick={() => dispatch("Increment")}>+</button>{"  "}
        //             <button onClick={() => dispatch("Decrement")}>-</button>{"  "}
        //             <button onClick={() => dispatch("Reset")}>0</button>
        //         </>
        //     )}
        // </div>
        //)}*/


/*// function App(){
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
// }*/

export default Counter