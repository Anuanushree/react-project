import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const tables=[
    {
        name:'anu',
        email:'anugmail.com',
        password:1233
    }
]
export default tables;
ReactDOM.createRoot(document.getElementById('root')).render(<App />)

