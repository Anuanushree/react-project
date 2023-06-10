import React from 'react'
function ListRight(props) {
  return (
    <li>{props.name}</li>
  )
}
function Btn(props) {
  return (
    <a href="https://">{props.name}</a>
  )
}
function ListWrong(props) {
  return (
    <li>{props.name}</li>
  )
}
function App() {
  return (
    <div>
      <div>
        <h5> FREE</h5>
        <h6> $0 month</h6>
        <hr></hr>
        <ul>
          <ListRight name='Single User' />
          <ListRight name='5GB Storage' />
          <ListRight name='Unlimited Public Projects' />
          <ListRight name='Community Access' />
          <ListWrong name='Unlimited Private Projects' />
          <ListWrong name='Dedicated Phone Support' />
          <ListWrong name='Free Subdomain' />
          <ListWrong name='Monthly Status Reports' />
        </ul>
        <div>
          <Btn name="Button" />
        </div>
      </div>
      <div>
        <h5> PLUS</h5>
        <h6> $9 month</h6>
        <hr></hr>
        <ul>
          <ListRight name='5 Users' />
          <ListRight name='50GB Storage' />
          <ListRight name='Unlimited Public Projects' />
          <ListRight name='Community Access' />
          <ListRight name='Unlimited Private Projects' />
          <ListRight name='Dedicated Phone Support' />
          <ListRight name='Free Subdomain' />
          <ListWrong name='Monthly Status Reports' />
        </ul>
        <div>
          <Btn name="button" />
        </div>
      </div>
      <div>
        <h5> PRO</h5>
        <h6>$49 month</h6>
        <hr></hr>
        <ul>
          <ListRight name='5 Users' />
          <ListRight name='150GB Storage' />
          <ListRight name='Unlimited Public Projects' />
          <ListRight name='Community Access' />
          <ListRight name='Unlimited Private Projects' />
          <ListRight name='Dedicated Phone Support' />
          <ListRight name='Unlimited Free Subdomain' />
          <ListRight name='Monthly Status Reports' />
        </ul>
        <div>
          <Btn name="button" />
        </div>
      </div>
    </div>
  )
}

export default App

