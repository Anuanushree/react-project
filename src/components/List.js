import React from 'react';

function List({ ListRight,ListWrong }) {
  return (
    <div>
      <ListRight name='Single User' />
      <ListRight name='5GB Storage' />
      <ListRight name='Unlimited Public Projects' />
      <ListRight name='Community Access' />
      <ListWrong name='Unlimited Private Projects' />
      <ListWrong name='Dedicated Phone Support' />
      <ListWrong name='Free Subdomain' />
      <ListWrong name='Monthly Status Reports' />

    </div>
  )
}

export default List;