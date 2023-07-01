import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
const library= [
    {
    id:1,
    bookName:'titanic',
    author:'unknown',
    year:1892,
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(<App library={library} />);

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

