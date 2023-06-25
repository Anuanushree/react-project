import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
let data =[]
ReactDOM.createRoot(document.getElementById('root')).render(<App data={data} />)

