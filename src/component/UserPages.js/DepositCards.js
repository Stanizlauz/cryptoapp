import React from 'react'

export default function DepositCards({ image, coin }) {
    return (
        <>

                <li className="col-12 col-md-6 col-lg-3">
                    <div className="cnt-block equal-hight" style={{ height: 349 }}>
                        <figure>{image}</figure>
                        <div className="p-4">
                            <div className="font-weight-bolder">
                                {coin}
                            </div>
                            <div className="mt-2" style={{ color: '#666666' }}>
                                Deposit using {coin}
                            </div>
                            <div className="mt-4">
                                <a className="btn btn-primary pointer text-white" data-toggle="modal" data-target="#exampleModal">Continue</a>
                            </div>
                        </div>
                    </div>
                </li>
        </>
    )
}
