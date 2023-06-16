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
        important:false

    },
    {
        id: 2,
        Name: ' Special Item',
        price: '$20.00| $18.00',
        available: 'Add to cart',
        important: true

    },
    {
        id: 3,
        Name: '  Sale Item',
        price: ' $50.00| $25.00',
        available: 'Add to cart',
        important: false

    },
    {
        id: 4,
        Name: 'Popular Item',
        price: '$40.00',
        available: 'add to card',
        important: true

    },
    {
        id: 5,
        Name: ' Sale Item',
        price: ' $50.00| $25.00',
        available: 'add to card',
        important: false

    },
    {
        id: 6,
        Name: ' Francy product',
        price: ' $120.00 - $280.00',
        available: 'add to card',
        important: false

    },
    {
        id: 7,
        Name: ' Special Item',
        price: ' $20.00| $18.00',
        available: 'add to card',
        important: true

    },
    {
        id: 8,
        Name: 'Popular Item',
        price: ' $40.00',
        available: 'add to card',
        important: true

    }

];

ReactDOM.createRoot(document.getElementById('root')).render(<App notes={notes} />);

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

