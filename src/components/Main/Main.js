import "./Main.scss";
import React from "react";
import { Link } from "react-router-dom";

const Main = () => {
  const [users, setUsers] = React.useState([]);
  const f = async () => {
    const res = await fetch("https://reqres.in/api/users");
    const json = await res.json();
    setUsers(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);

  return (
    <div>
      <div className="card-title">
        <p>All Members</p>
        <Link to="/createuser">
          <button className="create_button">Create New Member</button>
        </Link>
      </div>

      <div className="Main">
        <div className="card-container">
          {users.length &&
            users.map((user) => {
              return (
                <div className="card" key={user.id}>
                  <img key={user.avatar} src={user.avatar} />
                  <p>
                    <strong>
                      <p className="card_name">
                        {user.first_name} {user.last_name}
                      </p>
                    </strong>
                  </p>
                  <p className="card_email">{user.email}</p>
                  <Link to={`/userpage/${user.id}`}>
                    <button className="card_button">
                      <p>Review</p>
                    </button>
                  </Link>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default Main;
