
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { login } from "../actions/userAction";
import React from 'react';

  const LoginAdmin = () => {
  const initialState = {
    email: "",
    password: "",
  };
  const [log, setLogin] = useState(initialState);
  const dispatch = useDispatch();
  const handleInputChange = event => {
    const { name, value } = event.target;
    setLogin({ ...log, [name]: value });
  };

  const signin = () => {
    const { email, password } = log;
    if(email == '' || password == ''){
      alert('All fields are required');
      return 
    }
    dispatch(login(email, password))
  };
  return (
    <div className="submit-form">
      <div>
        <div className="form-group">
          <label htmlFor="title">Email</label>
          <input
            type="text"
            className="form-control"
            id="email"
            required
            value={log.email}
            onChange={handleInputChange}
            name="email"
          />
        </div>

        <div className="form-group">
          <label htmlFor="description">Password</label>
          <input
            type="text"
            className="form-control"
            id="password"
            required
            value={log.password}
            onChange={handleInputChange}
            name="password"
          />
        </div>

        <button onClick={signin} className="btn btn-success">
          Submit
        </button>
      </div>
    </div>
  );
};

export default LoginAdmin;
