import React from 'react'

function List2({ListRight,ListWrong}) {
  return (
    <div>
          <ListRight name='5 Users' />
          <ListRight name='50GB Storage' />
          <ListRight name='Unlimited Public Projects' />
          <ListRight name='Community Access' />
          <ListRight name='Unlimited Private Projects' />
          <ListRight name='Dedicated Phone Support' />
          <ListRight name='Free Subdomain' />
          <ListWrong name='Monthly Status Reports' />
    </div>
  )
}

export default List2