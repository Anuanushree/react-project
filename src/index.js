import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';


// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );
const notes = [
    {  
        id:1,
        Name: ' Francy product',
        price: ' $40.00-$80.00',
        available: 'View options',

    },
    {
        id: 2,
        Name: ' Special Item',
        price: '$20.00| $18.00',
        available: 'Add to cart',

    },
    {
        id: 3,
        Name: '  Sale Item',
        price: ' $50.00| $25.00',
        available: 'Add to cart',

    },
    {
        id: 4,
        Name: 'Popular Item',
        price: '$40.00',
        available: 'add to card',

    },
    {
        id: 5,
        Name: ' Sale Item',
        price: ' $50.00| $25.00',
        available: 'add to card',

    },
    {
        id: 6,
        Name: ' Francy product',
        price: ' $120.00 - $280.00',
        available: 'add to card',

    },
    {
        id: 7,
        Name: ' Special Item',
        price: ' $20.00| $18.00',
        available: 'add to card',

    },
    {
        id: 8,
        Name: 'Popular Item',
        price: ' $40.00',
        available: 'add to card',

    }

];

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />);

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

