import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Createuser.scss";

const Createuser = () => {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [job, setJob] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const body = JSON.stringify({
      name: name,
      job: job,
    });
    const res = await fetch("https://reqres.in/api/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body,
    });
    const json = await res.json();
    console.log("json:", json);
    alert(JSON.stringify(json));
  };

  const handleGoHome = () => {
    navigate("/");
  };
  return (
    <div>
      <form className="" onSubmit={handleSubmit}>
        <h3>Create Member</h3>
        <label htmlFor="name-input"></label>
        <input
          id="name-input"
          type="text"
          value={name}
          placeholder="name"
          onChange={(e) => setName(e.target.value)}
        />

        <label htmlFor="job-input"></label>
        <input
          id="job-input"
          type="text"
          value={job}
          placeholder="job"
          onChange={(e) => setJob(e.target.value)}
        />

        <button type="submit">Submit</button>
        <button type="button" onClick={handleGoHome}>
          Back
        </button>
      </form>
    </div>
  );
};

export default Createuser;
