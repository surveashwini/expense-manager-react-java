import { useHistory } from "react-router-dom";
import { AiFillPlusCircle } from "react-icons/ai";
import Nav from "../Nav/Nav";
import dashboardBg from "../../assets/dashboard.png";
import "./Dashboard.scss";
const Dashboard = () => {
  const history = useHistory();

  const addExpense = () => {
    history.push("/expense-manager-react-java/add");
  };

  const showReport = () => {
    history.push("/expense-manager-react-java/report");
  };

  const addRecurring = () => {
    history.push("/expense-manager-react-java/recurring");
  };

  const showAnalysis = () => {
    history.push("/expense-manager-react-java/analysis");
  };

  return (
    <>
      <Nav />
      <div
        className="dashboard-container"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)),url(${dashboardBg})`,
        }}
      >
        <h1 className="display-1">Expense Manager</h1>
        <h4 className="display-9">Manage your expenses with us!</h4>
        <div className="container-fluid d-flex align-items-center justify-content-center w-50 dashboard-items">
          <div className="flex-row">
            <div className="rounded card m-5 card-containers">
              <h5 className="card-header bg-dark text-light"> Add expenses </h5>
              <div className="card-body">
                <p className="card-text">
                  Just click the below button to add your expenses for the
                  day/month/year
                </p>
                <button className="btn dashboard-btn" onClick={addExpense}>
                  <AiFillPlusCircle style={{ fontSize: "1.5rem" }} />
                  <span> Add expense</span>
                </button>
              </div>
            </div>

            <div className="rounded card m-5 card-containers">
              <h5 className="card-header bg-dark text-light">
                Expense analysis
              </h5>
              <div className="card-body">
                <p className="card-text">
                  Just click the below button to analyse your expense trend
                </p>
                <button className="btn dashboard-btn" onClick={showAnalysis}>
                  <AiFillPlusCircle style={{ fontSize: "1.5rem" }} />
                  <span> Expense analysis</span>
                </button>
              </div>
            </div>
          </div>

          <div className="flex-row">
            <div className="rounded card m-5 card-containers">
              <h5 className="card-header bg-dark text-light">
                Recurring expenses
              </h5>
              <div className="card-body">
                <p className="card-text">
                  Just add the expense once, and then forget about adding it
                  repetitively
                </p>
                <button className="btn dashboard-btn" onClick={addRecurring}>
                  <AiFillPlusCircle style={{ fontSize: "1.5rem" }} />
                  <span> Add Recurring expenses</span>
                </button>
              </div>
            </div>

            <div className="rounded card m-5 card-containers">
              <h5 className="card-header bg-dark text-light">
                {" "}
                Expense report{" "}
              </h5>
              <div className="card-body">
                <p className="card-text">
                  View your past expenses from this report
                </p>
                <button className="btn dashboard-btn" onClick={showReport}>
                  <AiFillPlusCircle style={{ fontSize: "1.5rem" }} />
                  <span> Expense report</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
