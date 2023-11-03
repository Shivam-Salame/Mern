import React from "react";

// function Greet() {
//     return <p>Shivam</p>
// }

// using jsx
const Greet = () => {
    return (
    <div className="toing">
        <h1>Shivam</h1>
    </div>
    )
}

// without using jsx
// const Greet = () => {
//     return React.createElement(
//         'div',
//         {id: 'hello', className: 'dummyClass' },
//         React.createElement('h1', null, 'Hello shivam'))
// }

export default Greet;