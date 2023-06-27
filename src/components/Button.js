import React from 'react'

function Buttons(props) {
    return (
        <>
            <a href="http" className={`${props.color} `}>
                <i className={`fab ${props.icon}`}></i>
            </a>
        </>
    )
}
function SplitButton(props) {
    return (
        <>
            <div className="my-2"></div>
            <a href="http" className={`btn ${props.color} btn-icon-split`}>
                <span className="icon text-white-50">
                    <i className={props.icon}></i>
                </span>
                <span className="text">{props.content}</span>
            </a>
        </>
    )
}
function Button() {
    return (
        <div>
            <div className="container-fluid">

                {/* <!-- Page Heading --> */}
                <h1 className="h3 mb-4 text-gray-800">Buttons</h1>

                <div className="row">

                    <div className="col-lg-6">

                        {/* <!-- Circle Buttons --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Circle Buttons</h6>
                            </div>
                            <div className="card-body">
                                <p>Use Font Awesome Icons (included with this theme package) along with the circle
                                    buttons as shown in the examples below!</p>
                                {/* <!-- Circle Buttons (Default) --> */}
                                <div className="mb-2">
                                    <code>.btn-circle</code>
                                </div>
                                <Buttons icon={'fa-facebook-f'} color={'btn btn-primary btn-circle'} />
                                <Buttons icon={'fa-check'} color={'btn btn-success btn-circle'} />
                                <Buttons icon={'fa-info-circle'} color={'btn btn-info btn-circle'} />
                                <Buttons icon={'fa-exclamation-triangle'} color={'btn btn-warning btn-circle'} />
                                <Buttons icon={'fas fa-trash'} color={'btn btn-danger btn-circle'} />

                                <div className="mt-4 mb-2">
                                    <code>.btn-circle .btn-sm</code>
                                </div>
                                <Buttons icon={'fa-facebook-f'} color={'btn btn-primary btn-circle btn-sm'} />
                                <Buttons icon={'fa-check'} color={'btn btn-success btn-circle btn-sm'} />
                                <Buttons icon={'fa-info-circle'} color={'btn btn-info btn-circle btn-sm'} />
                                <Buttons icon={'fa-exclamation-triangle'} color={'btn btn-warning btn-circle btn-sm'} />
                                <Buttons icon={'fas fa-trash'} color={'btn btn-danger btn-circle btn-sm'} />

                                {/* <!-- Circle Buttons (Large) --> */}
                                <div className="mt-4 mb-2">
                                    <code>.btn-circle .btn-lg</code>
                                </div>
                                <Buttons icon={'fa-facebook-f'} color={'btn btn-primary btn-circle btn-lg'} />
                                <Buttons icon={'fa-check'} color={'btn btn-success btn-circle btn-lg'} />
                                <Buttons icon={'fa-info-circle'} color={'btn btn-info btn-circle btn-lg'} />
                                <Buttons icon={'fa-exclamation-triangle'} color={'btn btn-warning btn-circle btn-lg'} />
                                <Buttons icon={'fas fa-trash'} color={'btn btn-danger btn-circle btn-lg'} />

                            </div>
                        </div>

                        {/* <!-- Brand Buttons --> */}
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Brand Buttons</h6>
                            </div>
                            <div className="card-body">
                                <p>Google and Facebook buttons are available featuring each company's respective
                                    brand color. They are used on the user login and registration pages.</p>
                                <p>You can create more custom buttons by adding a new color variable in the
                                    <code>_variables.scss</code> file and then using the Bootstrap button variant
                                    mixin to create a new style, as demonstrated in the <code>_buttons.scss</code>
                                    file.</p>
                                <a href="http" className="btn btn-google btn-block"><i class="fab fa-google fa-fw"></i>
                                    .btn-google</a>
                                <a href="http" className="btn btn-facebook btn-block"><i
                                    className="fab fa-facebook-f fa-fw"></i> .btn-facebook</a>

                            </div>
                        </div>

                    </div>

                    <div className="col-lg-6">

                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h6 className="m-0 font-weight-bold text-primary">Split Buttons with Icon</h6>
                            </div>
                            <div className="card-body">
                                <p>Works with any button colors, just use the <code>.btn-icon-split</code> class and
                                    the markup in the examples below. The examples below also use the
                                    <code>.text-white-50</code> helper class on the icons for additional styling,
                                    but it is not required.</p>
                                <SplitButton icon={'fas fa-flag'} color={'btn-primary'} content={'Split Button Primary'} />
                                <SplitButton icon={'fas fa-check'} color={'btn-success'} content={'Split Button Success'} />
                                <SplitButton icon={'fas fa-info-circle'} color={'btn-info'} content={'Split Button Info'} />
                                <SplitButton icon={'fas fa-exclamation-triangle'} color={'btn-warning'} content={'Split Button Warning'} />
                                <SplitButton icon={'fas fa-trash'} color={'btn-danger'} content={'Split Button danger'} />
                                <SplitButton icon={'fas fa-arrow-right'} color={'btn-secondary'} content={'Split Button Secondary'} />
                                <SplitButton icon={'fas fa-arrow-right'} color={'btn-light '} content={'Split Button light '} />

                                <p>Also works with small and large button classes!</p>
                                <a href="http:" className="btn btn-primary btn-icon-split btn-sm">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-flag"></i>
                                    </span>
                                    <span className="text">Split Button Small</span>
                                </a>
                                <div className="my-2"></div>
                                <a href="http" className="btn btn-primary btn-icon-split btn-lg">
                                    <span className="icon text-white-50">
                                        <i className="fas fa-flag"></i>
                                    </span>
                                    <span className="text">Split Button Large</span>
                                </a>
                            </div>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Button