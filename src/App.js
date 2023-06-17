
import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
function Pagination(props) {
  return (
    <>
      <h4 class="small font-weight-bold">{props.text}<span
        class="float-right">{props.per}</span></h4>
      <div class="progress mb-4">
        <div class={`progress-bar bg-${props.color}`} role="progressbar" style={{ width: `${props.per}` }}></div>
      </div>

    </>
  )
}
function Color(props) {
  return (
    <>
      <div className="col-lg-6 mb-4">
        <div className={`card text-white shadow bg-${props.text}`}>
          <div className='card-body'>
            {props.text}
            <div className="text-white-70 small">{props.code}</div>
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  )
}
function Card(props) {
  return (
    <>
      {/* <div className="row"> */}
      <div className="col-xl-3 col-md-4 mb-4" >
        <div className="card border-left-success shadow h-100 py-2">
          <div className="card-body">
            <div className="row align-items-center">
              <div className="col md-4">
                <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                  {props.text}</div>
                <div className="h5 mb-0 font-weight-bold text-gray-800">{props.salary}</div>
              </div>
              <div className="col-auto">
                <img src={`${props.img}`} alt='...' />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <p>{props.text}</p> */}
      {/* <p>{props.salary}</p> */}
      {/* <p>{props.img}</p> */}
    </ >
  )
}
function App() {
  const monthly = "EARNINGS (MONTHLY)";
  const monthlysalary = '$ 40,000';
  const monthlyimg = 'https://em-content.zobj.net/thumbs/120/microsoft/319/calendar_1f4c5.png'
  const annual = "EARNINGS (ANNUAL)";
  const annualsalary = '$215,000';
  const annualimg = 'https://em-content.zobj.net/thumbs/120/toss-face/342/heavy-dollar-sign_1f4b2.png'
  const task = "TASKS";
  const percentage = '50%';
  const taskimg = 'https://em-content.zobj.net/thumbs/120/google/350/clipboard_1f4cb.png'
  const request = "PENDING REQUESTS";
  const number = '18';
  const requestimg = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHoAAAB7CAMAAACM22RzAAAAYFBMVEX///8AAAB+fn5sbGx7e3sbGxsyMjK3t7c6OjpYWFjf39/t7e2FhYUtLS3MzMy9vb3GxsYJCQkjIyOjo6NMTEzz8/PW1taMjIxjY2OxsbH5+fmqqqrm5uZHR0eTk5NSUlJijh/AAAACKUlEQVRoge3ba5OCIBQGYFBLu0mZuWZq//9fbq0XDFwUgePuzHk/OZP2pKIDHCLkJ8yLLhQkl8hjhIclMGyX07mTv2Dhd+pGruHl1j6vIVMav+jTOvR2tZN+n3bfxgIPJEH3ENfk2W5lBChxC+akfaR9KJmQvBEjsmkvNxztN+IWaaSRRhpppJFGGul/Qd+ryDj5SB97mj5SK4n16b0dmSb69NUSTQ/r0TdturQkV/oXnDysyKf9AprE/s44tXSn//orBWmkkUYaaaSRnksXh0UpzOlHelqU9GpKGxSCajP6tlwe6QBr0UblGDZGzqYzE1oeaOnQxKDOuVHJM+hssb1RV49mPFyH63FRriPdfk3aVZBGGmmkkUYaaaSRRhrpFemo2Yim5gKspWjFtPsN1M/2Yn4bwJTSnhrJOjBQFXaS4xic7ews8b2r61kjLcBo3D3M65oGE587kr3Xl91Ua1jFmQlrq06bZl0qbIFmtuRt2bbYfCZ9tyXn/Eay3xamMwfyJfo8oYyxkId183XDnUJ+9HG4s14YkwusH4llelDQnpiJNItMD+YtHy5lmR4s2r87lSXa43LoVhbpAE4WaJ/LyolX+/TgjXOeOtAuveMvA+WMr3W6eHIZZNF+Txcpv9olhNzTIZcvMHJPU3BZphNlJcUlHYHJIl3ByQJdgY0PRPoJKX/QO1B5SAP++0egPWCZDzJGh11Oc1tN7vqfa8ivXndFU7edoW+hGDRzCevbIgAAAABJRU5ErkJggg=='
  return (
    <div>
      <div>
        <div className='row '>
          <Card text={monthly} img={monthlyimg} salary={monthlysalary} />
          <Card text={annual} img={annualimg} salary={annualsalary} />
          <Card text={task} img={taskimg} salary={percentage} />
          <Card text={request} img={requestimg} salary={number} />
        </div>
      </div>
      <div>
        <div className='row '>
          <div className='col-6'>
            <Color text='primary' code='#4e73df' />
            <Color text='success' code='#1cc88a' />
            <Color text='info' code='#36b9cc' />
            <Color text='warning' code='#f6c23e' />
            <Color text='danger' code='#e74a3b' />
            <Color text='secondary' code='#858796' />
            <Color style={{ color: 'red' }} text='ligh' code='#f8f9fc' />
            <Color text='dark' code='#5a5c69' />
          </div>
          <div className='col-6'>
            <div class="card-body">
              <Pagination text='Server Migration' per='20%' color='danger' />
              <Pagination text='Sales Tracking ' per='40%' color='warning' />
              <Pagination text='Customer Database' per='60%' color='secondary' />
              <Pagination text='Payout Details' per='80%' color='info' />
              <Pagination text='Account Setup' per='100%' color='success' />
            </div>
          </div>
        </div>
      </div>
    </div >

  )
}

export default App