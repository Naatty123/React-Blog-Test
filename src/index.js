import React from 'react';
import ReactDOM from 'react-dom/client';
import Main from './Main';
import Header from './Header';
import Footer from './Footer';
import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
function fullName(mnae){
  return mname.firstName + ' ' + mname.lastName
}
const mname ={
  firstName: 'Melat',
  lastName: 'Engeda',
}
const fullElement = (
  <div>
    <h1>Name: Natnael Engead</h1>
    <h2>Upload: Not Uploaded</h2>
    <p>Other: No Other Things to List</p>
  </div>
)

function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  root.render(element)

}



// const Name = <h1 className='text-red-400 text-4xl'>{fullName(mname)}</h1>
root.render(
  <React.StrictMode>
    <Header />
    <Main />
    <Footer />
  </React.StrictMode>
//  fullElement
  // React.createElement('h1',{className: 'text-5xl'}, 'Natty Marn')
  // element
);
// setInterval(tick, 1000);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
