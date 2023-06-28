import React from 'react'
function Bordercontent(props) {
    return (
        <>
            <div className={`card mb-4 py-3 ${props.header}`}>
                <div className="card-body">
                    .{props.header}
                </div>
            </div>

        </>
    )
}
function Border() {
    return (
        <div className='pt-4'>
            <div className="container-fluid">

                <h1 className="h3 mb-1 text-gray-800">Border Utilities</h1>
                <p className="mb-4">Bootstrap's default utility classes can be found on the official <a
                    href="https://getbootstrap.com/docs">Bootstrap Documentation</a> page. The custom utilities
                    below were created to extend this theme past the default utility classes built into Bootstrap's
                    framework.</p>


                <div className="row">
                    <div className="col-lg-6">
                        <Bordercontent header={'border-left-primary'} />
                        <Bordercontent header={'border-left-secondary'} />
                        <Bordercontent header={'border-left-success'} />
                        <Bordercontent header={'border-left-info'} />
                        <Bordercontent header={'border-left-warning'} />
                        <Bordercontent header={'border-left-danger'} />
                        <Bordercontent header={'border-left-dark'} />

                    </div>
                    <div className="col-lg-6">
                        <Bordercontent header={'border-bottom-primary'} />
                        <Bordercontent header={'border-bottom-secondary'} />
                        <Bordercontent header={'border-bottom-success'} />
                        <Bordercontent header={'border-bottom-info'} />
                        <Bordercontent header={'border-bottom-warning'} />
                        <Bordercontent header={'border-bottom-danger'} />
                        <Bordercontent header={'border-bottom-dark'} />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Border;