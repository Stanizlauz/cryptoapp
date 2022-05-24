import React from 'react'
import TradingView from '../TradingView'

export default function Transaction() {
    return (
        <>
            <div className="card shadow mb-4">
                <div className="card-header py-3">
                    <h6 className="m-0 font-weight-bold text-primary">Transaction History</h6>
                </div>
                <TradingView />
                <div className="card-body bg-dark">
                    <div className="table-responsive">
                        <table className="table table-bordered" id="dataTable" width="100%" cellSpacing={0}>
                            <thead>
                                <tr >
                                    <th>S/N</th>
                                    <th>Transaction ID</th>
                                    <th>Deposit Coin</th>
                                    <th>Trade Plan</th>
                                    <th>Amount Traded</th>
                                    <th>Expected Payout</th>
                                    <th>Start date</th>
                                    <th>End Date</th>
                                    <th>Trade Status</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>TXCC34</td>
                                    <td>BTC</td>
                                    <td>Mini Plan</td>
                                    <td>$2013</td>
                                    <td>$320,800</td>
                                    <td>10/2/2022</td>
                                    <td>12/3/2022</td>
                                    <td><span className="badge bg-warning text-white p-2 font-weight-bold" >
                                        Pending
                                    </span></td>
                                </tr>
                                <tr>
                                    <td>2</td>
                                    <td>TXCC34</td>
                                    <td>ETH</td>
                                    <td>Mini Plan</td>
                                    <td>$2013</td>
                                    <td>$320,800</td>
                                    <td>10/2/2022</td>
                                    <td>12/3/2022</td>
                                    <td><span className="badge bg-danger text-white p-2 font-weight-bold" >
                                        Closed
                                    </span></td>
                                </tr>
                                <tr>
                                    <td>3</td>
                                    <td>TXCC34</td>
                                    <td>ADA</td>
                                    <td>Mini Plan</td>
                                    <td>$2013</td>
                                    <td>$320,800</td>
                                    <td>10/2/2022</td>
                                    <td>12/3/2022</td>
                                    <td><span className="badge bg-primary text-white p-2 font-weight-bold" >
                                        Active  
                                    </span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}
