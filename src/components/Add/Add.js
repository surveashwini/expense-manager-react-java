import AddForm from "../AddForm/AddForm";
import { useState } from "react";
import { HAPPY, SAD, STRAIGHT } from "./../../constants/messages";
import sadGif from "../../assets/sad.gif";
import straightGif from "../../assets/straight.gif";
import smileGif from "../../assets/smile.gif";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";
import { EXPENSES_URL } from "../../constants/serverDetails";
import { postRequestOptions } from "../../util/generateRequestOptions";
import { getToastMessage } from "../../util/generateToastMessages";
import {
  ADD_EXPENSE_SUMMARY,
  ADD_EXPENSE_DETAILS,
} from "../../constants/staticValues";
import { useRef } from "react";

import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";

const Add = () => {
  let history = useHistory();
  const [expenseDetails, setExpenseDetails] = useState({
    expense: "",
    amount: "",
    expenseDate: "",
  });
  const [imgPath, setImgPath] = useState("");
  const [message, setMessage] = useState("");
  const [enableSubmit, setEnableSubmit] = useState(false);
  const myToast = useRef(null);

  const setSummaryData = (amount) => {
    if (amount > 5000) {
      setMessage(SAD);
      setImgPath(sadGif);
    } else if (amount > 1000) {
      setMessage(STRAIGHT);
      setImgPath(straightGif);
    } else {
      setMessage(HAPPY);
      setImgPath(smileGif);
    }
  };

  const addExpense = () => {
    const requestOptions = postRequestOptions(EXPENSES_URL, {
      expense: expenseDetails.expense,
      amount: Number(expenseDetails.amount),
      expenseDate: expenseDetails.expenseDate,
    });
    axios(requestOptions).then((response) => {
      myToast.current.show(
        getToastMessage(ADD_EXPENSE_SUMMARY, ADD_EXPENSE_DETAILS)
      );
      setExpenseDetails({ expense: "", amount: "", expenseDate: "" });
      setEnableSubmit(false);
    });
  };

  const handleChange = (value) => {
    if (value) {
      let formValue = { ...expenseDetails, ...value };
      if (value.expense || value.expense === "") {
        setExpenseDetails({ ...formValue });
      } else if (value.amount || value.amount === "") {
        let amount = Number(value.amount);
        setExpenseDetails({ ...expenseDetails, amount });
        setSummaryData(amount);
      } else if (value.expenseDate || value.expenseDate === "") {
        setExpenseDetails({ ...formValue });
      }
      if (formValue.expense && formValue.amount && formValue.expenseDate) {
        setEnableSubmit(true);
      } else {
        setEnableSubmit(false);
      }
    }
  };

  const redirectToReport = () => {
    history.push("/report");
  };

  return (
    <div>
      <div className="d-flex flex-row m-5 rounded card">
        <div className="card add-container w-50">
          <h5 className="card-header bg-dark">
            <div className="flex-column">
              <nav aria-label="row justify-content-center breadcrumb ">
                <ol className="column justify-content-start g-3 breadcrumb">
                  <li className="breadcrumb-item text-light">
                    <Link to="/dashboard">Dashboard</Link>
                  </li>
                  <li
                    className="breadcrumb-item active text-light"
                    aria-current="page"
                  >
                    Add expense
                  </li>
                </ol>
              </nav>
            </div>
          </h5>
          <div className="add-container">
            <div className="card-body">
              <AddForm
                enableSubmit={enableSubmit}
                handleChange={handleChange}
                handleSubmit={addExpense}
                redirectToReport={redirectToReport}
              />
            </div>
          </div>
        </div>

        <div className="card add-container w-50">
          <h5 className="card-header bg-dark text-light"> Summary </h5>
          <div className="card-body summary-body justify-content-center">
            {(expenseDetails.expense && expenseDetails.amount && (
              <>
                <img src={imgPath} alt="mood illustrator" />

                <div>
                  <span className="message">{message}</span>
                  <div>
                    {expenseDetails.amount} for {expenseDetails.expense}
                  </div>
                </div>
              </>
            )) ||
              "Please enter complete data in the form on your left!"}
          </div>
        </div>
      </div>

      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 5 }}>
        <Toast ref={myToast} position="bottom-right" />
      </div>
    </div>
  );
};

export default Add;
