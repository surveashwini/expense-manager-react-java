import { useHistory } from "react-router-dom";
import { BASE_PATH } from "../../routes/routes";
const Nav = () => {
  const userName = sessionStorage.getItem("user");
  const history = useHistory();
  const logout = () => {
    sessionStorage.clear();
    history.push(BASE_PATH);
  };
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-dark w-100">
      <div className="container-fluid w-100">
        <div className="collapse navbar-collapse d-flex w-100">
          <span className="text-light p-top-2 h3 w-100 d-flex justify-content-center">
            Welcome {userName}
          </span>
          <button className="btn btn-secondary" onClick={logout}>
            Logout
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
