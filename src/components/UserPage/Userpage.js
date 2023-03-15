import React from "react";
import { Link, useParams } from "react-router-dom";
import "./Userpage.scss";

const Userpage = () => {
  const id = useParams();
  console.log(id);
  const [user, setUser] = React.useState();
  const f = async () => {
    const res = await fetch(`https://reqres.in/api/users/${id.id}`);
    console.log("res:", res);
    const json = await res.json();
    setUser(json.data);
  };
  React.useEffect(() => {
    f();
  }, []);
  console.log("user:", user);
  return (
    <div>
      {user && (
        <div className="card-container">
          <div className="card_user" key={user.id}>
            <img key={user.avatar} src={user.avatar} />
            <p>
              <strong>
                <p className="card_name">
                  {user.first_name} {user.last_name}
                </p>
              </strong>
            </p>
            <p className="usercard_email">{user.email}</p>
            <Link to={`/`}>
              <button className="card_button">
                <p>Back</p>
              </button>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Userpage;
