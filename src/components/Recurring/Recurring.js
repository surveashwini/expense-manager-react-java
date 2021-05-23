import { Link } from "react-router-dom";
import { useState } from "react";
import "./Recurring.scss";
import { useRef } from "react";
import axios from "axios";
import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";
import { RECURRING_URL } from "../../constants/serverDetails";
import { postRequestOptions } from "../../util/generateRequestOptions";
import { getToastMessage } from "../../util/generateToastMessages";
import {
  ADD_EXPENSE_SUMMARY,
  ADD_EXPENSE_DETAILS,
} from "../../constants/staticValues";
import { DASHBOARD } from "../../routes/routes";

const Recurring = () => {
  const durationOptions = ["Weekly", "Monthly", "Yearly"];
  const [recurring, setRecurring] = useState({
    expense: "",
    amount: "",
    duration: "",
  });
  const myToast = useRef(null);
  const recurringExpenseForm = useRef(null);

  const onChange = (target) => {
    setRecurring({ ...recurring, [target.id]: target.value });
  };

  const addRecurringExpense = () => {
    const requestOptions = postRequestOptions(RECURRING_URL, {
      recurringExpense: recurring.expense,
      recurringAmount: Number(recurring.amount),
      duration: recurring.duration.toLowerCase(),
    });
    axios(requestOptions)
      .then((response) => {
        myToast.current.show(
          getToastMessage(ADD_EXPENSE_SUMMARY, ADD_EXPENSE_DETAILS)
        );
        recurringExpenseForm?.current?.reset();
        setRecurring({
          expense: "",
          amount: "",
          duration: "Weekly",
        });
      })
      .catch((error) => {});
  };

  return (
    <div className="d-flex flex-row m-5 rounded card">
      <div className="card recurring-container">
        <h5 className="card-header bg-dark">
          <div className="flex-column">
            <nav aria-label="row justify-content-center breadcrumb ">
              <ol className="column justify-content-start g-3 breadcrumb">
                <li className="breadcrumb-item text-light">
                  <Link to={DASHBOARD}>Dashboard</Link>
                </li>
                <li
                  className="breadcrumb-item active text-light"
                  aria-current="page"
                >
                  Recurring Expenses
                </li>
              </ol>
            </nav>
          </div>
        </h5>
        <div className="recurring-container">
          <div className="card-body d-flex justify-content-center">
            <form ref={recurringExpenseForm}>
              <div className="type row justify-content-center g-3 align-items-center m-2">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Expense
                  </span>
                  <input
                    type="text"
                    id="expense"
                    className="form-control"
                    autoComplete="off"
                    onChange={(event) => onChange(event.target)}
                  />
                </div>
              </div>
              <div className="amount row justify-content-center g-3 align-items-center m-2">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Amount
                  </span>
                  <input
                    type="number"
                    id="amount"
                    className="form-control"
                    autoComplete="off"
                    onChange={(event) => onChange(event.target)}
                  />
                </div>
              </div>
              <div className="amount row justify-content-center g-3 align-items-center m-2">
                <div className="input-group mb-3">
                  <span
                    className="input-group-text"
                    id="inputGroup-sizing-default"
                  >
                    Duration
                  </span>
                  <select
                    className="form-select"
                    id="duration"
                    onChange={(event) => onChange(event.target)}
                  >
                    {durationOptions.map((duration) => (
                      <option key={duration} value={duration}>
                        {duration}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="amount row justify-content-center g-3 align-items-center m-2">
                <div>
                  <button
                    type="button"
                    className="m-2 btn btn-primary"
                    disabled={
                      !(
                        recurring.expense &&
                        recurring.amount &&
                        recurring.duration
                      )
                    }
                    onClick={addRecurringExpense}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 5 }}>
        <Toast ref={myToast} position="bottom-right" />
      </div>
    </div>
  );
};

export default Recurring;
