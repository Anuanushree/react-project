import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
const library = [
  {
    id: 1,
    Name: 'Anu',
    bookName: 'The Sunset Crowd',
    location: 'chennai',
    date: '13/03/2023',
  },
  {
    id: 2,
    Name: 'ammu',
    bookName: 'The angry bird',
    location: 'chennai',
    date: '14/03/2023',
  },
];

ReactDOM.createRoot(document.getElementById('root')).render(<App library={library} />);

// ReactDOM.createRoot(document.getElementById('root')).render(<App />)

