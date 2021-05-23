import "./Report.scss";
import { useEffect, useState } from "react";
import axios from "axios";
import { MdEdit, MdDelete, MdDone, MdClose } from "react-icons/md";
import { Link } from "react-router-dom";

import { useRef } from "react";

import { Toast } from "primereact/toast";
import "primereact/resources/themes/saga-green/theme.css";
import "primereact/resources/primereact.min.css";

import { EXPENSES_URL } from "../../constants/serverDetails";
import noData from "../../assets/no-data.gif";
import {
  getRequestOptions,
  deleteRequestOptions,
  postRequestOptions,
} from "../../util/generateRequestOptions";
import { getToastMessage } from "../../util/generateToastMessages";
import {
  EDIT_EXPENSE_SUMMARY,
  EDIT_EXPENSE_DETAILS,
  DELETE_EXPENSE_SUMMARY,
  DELETE_EXPENSE_DETAILS,
} from "../../constants/staticValues";
import { DASHBOARD } from "../../routes/routes";

const Report = () => {
  const [expenseList, setExpenseList] = useState([]);
  const [loader, setLoader] = useState(false);
  const myToast = useRef(null);
  const [editRecordDetails, seteditRecordDetails] = useState({
    edit: false,
    index: null,
  });
  const [updatedValue, setUpdatedValue] = useState(null);

  const fetchData = async () => {
    const response = await axios(getRequestOptions(EXPENSES_URL));
    setLoader(false);
    setExpenseList(response.data);
  };

  useEffect(async () => {
    setLoader(true);
    fetchData();
  }, []);

  const deleteRecord = async (i) => {
    const response = await axios(deleteRequestOptions(EXPENSES_URL, i));
    fetchData();
    myToast.current.show(
      getToastMessage(DELETE_EXPENSE_SUMMARY, DELETE_EXPENSE_DETAILS)
    );
  };

  const editRecord = (index) => {
    setUpdatedValue(null);
    seteditRecordDetails({ edit: true, index });
  };

  const updateRecord = async (id) => {
    const response = await axios(
      postRequestOptions(EXPENSES_URL, updatedValue)
    );
    fetchData();
    seteditRecordDetails({ edit: false, index: null });

    myToast.current.show(
      getToastMessage(EDIT_EXPENSE_SUMMARY, EDIT_EXPENSE_DETAILS)
    );
  };

  const validateInputChange = (index, type, updatedValue) => {
    updatedValue = type === "amount" ? Number(updatedValue) : updatedValue;
    if (expenseList[index][type] !== updatedValue) {
      const updatedRecord = {
        ...expenseList[index],
        [type]: updatedValue,
      };
      setUpdatedValue(updatedRecord);
    } else {
      setUpdatedValue(null);
    }
  };

  return (
    <div>
      <div className="d-flex flex-row m-5 rounded card">
        <div className="card report-container">
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
                    Report
                  </li>
                </ol>
              </nav>
            </div>
          </h5>
          <div className="add-container">
            <div className="card-body">
              {loader ? (
                <div className="d-flex justify-content-center">
                  <div className="spinner-border text-dark" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              ) : (
                <div>
                  {expenseList.length > 0 ? (
                    <form>
                      <table className="table">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Expense name</th>
                            <th scope="col">Amount</th>
                            <th scope="col">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          {expenseList.map((expense, index) => (
                            <tr key={index}>
                              <th scope="row">{index + 1}</th>

                              {!editRecordDetails.edit ||
                              (editRecordDetails.edit &&
                                editRecordDetails.index !== index) ? (
                                <>
                                  <td>{expense.expense}</td>
                                  <td>{expense.amount}</td>
                                </>
                              ) : (
                                <>
                                  <td>
                                    <input
                                      defaultValue={expense?.expense || ""}
                                      onChange={(event) =>
                                        validateInputChange(
                                          index,
                                          "expense",
                                          event.target.value
                                        )
                                      }
                                    />
                                  </td>
                                  <td>
                                    <input
                                      defaultValue={expense?.amount || ""}
                                      onChange={(event) =>
                                        validateInputChange(
                                          index,
                                          "amount",
                                          event.target.value
                                        )
                                      }
                                    />
                                  </td>
                                </>
                              )}

                              {!editRecordDetails.edit ||
                              (editRecordDetails.edit &&
                                editRecordDetails.index !== index) ? (
                                <td>
                                  <MdEdit
                                    className="clickable-data"
                                    onClick={() => editRecord(index)}
                                  />

                                  <MdDelete
                                    className="clickable-data"
                                    onClick={() => deleteRecord(expense.id)}
                                  />
                                </td>
                              ) : (
                                <td>
                                  <MdDone
                                    className={
                                      updatedValue
                                        ? "clickable-data"
                                        : "disabled"
                                    }
                                    onClick={() => updateRecord(expense.id)}
                                  />
                                  <MdClose
                                    className="clickable-data"
                                    onClick={() =>
                                      seteditRecordDetails({
                                        edit: false,
                                        index: null,
                                      })
                                    }
                                  />
                                </td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </form>
                  ) : (
                    <img src={noData} />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="position-fixed bottom-0 end-0 p-3" style={{ zIndex: 5 }}>
        <Toast ref={myToast} position="bottom-right" />
      </div>
    </div>
  );
};

export default Report;
