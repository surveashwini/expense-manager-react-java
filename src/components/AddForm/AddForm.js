import { useState } from "react";
import { useRef } from "react";

const AddForm = ({
  enableSubmit,
  handleChange,
  handleSubmit,
  redirectToReport,
}) => {
  const [expense, setExpense] = useState("");
  const [amount, setAmount] = useState("");
  const [expenseDate, setExpensedate] = useState("");
  const [showProgress, setShowProgress] = useState(false);
  const addExpenseForm = useRef(null);

  const resetForm = () => {
    addExpenseForm?.current?.reset();
  };

  const change = (event, target) => {
    event.preventDefault();
    handleChange({ [target.id]: target.value });
  };

  const submit = (event) => {
    event.preventDefault();
    handleSubmit({ expense, amount, expenseDate });
    setTimeout(() => {
      resetForm();
    }, 1000);
  };

  return (
    <div>
      <form ref={addExpenseForm} onSubmit={submit}>
        <div className="type row justify-content-center g-3 align-items-center m-2">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Expense Name
            </span>
            <input
              type="text"
              id="expense"
              className="form-control"
              autoComplete="off"
              onChange={(event) => change(event, event.target)}
            />
          </div>
        </div>
        <div className="amount row justify-content-center g-3 align-items-center m-2">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Expense Amt
            </span>
            <input
              type="number"
              id="amount"
              className="form-control"
              autoComplete="off"
              onChange={(event) => change(event, event.target)}
            />
          </div>
        </div>
        <div className="type row justify-content-center g-3 align-items-center m-2">
          <div className="input-group mb-3">
            <span className="input-group-text" id="inputGroup-sizing-default">
              Expense Date
            </span>
            <input
              type="date"
              id="expenseDate"
              className="form-control"
              autoComplete="off"
              onChange={(event) => change(event, event.target)}
            />
          </div>
        </div>
        <div className="action row justify-content-center g-3 align-items-center m-2">
          <div
            className={
              !(expense && amount && expenseDate) ? "disabled-button" : ""
            }
          >
            {showProgress && (
              <button className="btn btn-primary" type="button" disabled>
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </button>
            )}
            <button
              type="button"
              disabled={!enableSubmit}
              className="m-2 btn btn-primary"
              id="liveToastBtn"
              onClick={submit}
            >
              Submit
            </button>
            <button
              type="button"
              className="m-2 btn btn-primary"
              onClick={redirectToReport}
            >
              Report
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddForm;
