import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
const library = [
  {
    id: 1,
    Name: 'unknown',
    bookName: 'titanic',
    location: 'chennai',
    date: '13/03/2023',
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(<App library={library} />);

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

