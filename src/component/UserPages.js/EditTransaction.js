import axios from 'axios'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { urlTransaction } from '../../endpoints'
import TradingView from '../TradingView'
import Header from './Header'
import Sidebar from './Sidebar'
import moment from "moment";
import { expiredToken } from '../../Auth/HandleJWT'


export default function EditTransaction() {
  const { id } = useParams();
  const history = useNavigate();
  const {
    register,
    handleSubmit,
    setValue,
  } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });
  useEffect(() => {
    expiredToken()
    loadData();
    //eslint-disable-next-line
  }, [])
  const handleOnChange = (e) => {
    // const { name, value } = e.target;
  };
  const loadData = async () => {
    const res = await axios.get(`${urlTransaction}/${id}`)
    setValue("coin", res?.data?.coin)
    setValue("amountDeposited", res?.data?.amountDeposited)
    setValue("expectedPayout", res?.data?.expectedPayout)
    setValue("startDate", moment(res?.data?.startDate).format('MMM D, YYYY'))
    setValue("currentBalance", res?.data?.currentBalance)
  }

  const saveTransaction = async (data) => {
    try {
      expiredToken();
      const obj = {
        currentBalance: data?.currentBalance,
        expectedPayout: data?.expectedPayout
      }
      await axios.put(`${urlTransaction}/${id}`, obj);
      history("/transactions");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Header />
            <div className="container-fluid"></div>
            <TradingView />
            <div className="col">
              <div className="card card-registration my-4">
                <div className="row g-0">
                  <div className="card-body p-md-5 text-black">
                    <h4 className="mb-5 text-uppercase text-dark">Edit Transaction</h4>
                    <form className="row">
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="coin"
                        >
                          Coin <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="coin"
                          name="coin"
                          readOnly
                          onChange={(e) => handleOnChange(e)}
                          {...register("coin", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="amountDeposited"
                        >
                          Amount Traded <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="amountDeposited"
                          name="amountDeposited"
                          readOnly
                          onChange={(e) => handleOnChange(e)}
                          {...register("amountDeposited", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="expectedPayout"
                        >
                          Expected payout <span className="text-danger">*</span>
                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="expectedPayout"
                          name="expectedPayout"
                          onChange={(e) => handleOnChange(e)}
                          {...register("expectedPayout", { required: true })}
                        />
                      </div>

                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="startDate"
                        >
                          Start Date <span className="text-danger">*</span>

                        </label>
                        <input
                          type="text"
                          className="form-control form-control-lg"
                          id="startDate"
                          name="startDate"
                          readOnly
                          onChange={(e) => handleOnChange(e)}
                          {...register("startDate", { required: true })}
                        />
                      </div>
                      <div className="form-outline mb-4 col-md-4">
                        <label
                          className="form-label text-dark font-weight-bold"
                          htmlFor="currentBalance"
                        >
                          Current Balance <span className="text-danger">*</span>

                        </label>
                        <input
                          type="number"
                          className="form-control form-control-lg"
                          id="currentBalance"
                          name="currentBalance"
                          onChange={(e) => handleOnChange(e)}
                          {...register("currentBalance", { required: true })}
                        />
                      </div>
                    </form>
                    <div className="d-flex float-right pt-3">
                      <Link
                        type="button"
                        to="/transactions"
                        className="btn btn-dark btn-lg mr-2"
                      >
                        Back
                      </Link>
                      <button
                        type="button"
                        id="submit"
                        className="btn btn-success btn-lg"
                        onClick={handleSubmit(saveTransaction)}
                      >
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}
