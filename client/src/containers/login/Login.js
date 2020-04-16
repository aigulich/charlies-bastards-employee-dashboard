import React,{useState} from "react";
import { useForm } from "react-hook-form";
import loginHelper from "../../services/loginHelper";
import { useDispatch } from "react-redux";
import { createSession } from "../../reducers/actions/index";
import { withRouter} from "react-router-dom";


function Login() {
  const [message, setMessage] = useState("");
  const { register, errors, handleSubmit } = useForm();
  const dispatch = useDispatch();
  /**
   * @function onSuhmit
   * @param {string} data -Values passed in the input
   * @param {*} e - event
   */

  const onSubmit = (value, e) => {
    e.preventDefault();
    loginHelper(value.email, value.password)
      .then((res) =>
        dispatch(
          createSession(
            res.data.message,
            res.data.token,
            res.data.firstname,
            res.data.lastname
          )
        )
      )
      .catch((err) => setMessage(`${err.response.data.message.message}`));
  };


  return (
    <main>
      <form data-testid="form-component" onSubmit={handleSubmit(onSubmit)}>
        <p>{message}</p>
        <label data-testid="test-label" htmlFor="email">
          E-mail
        </label>
        <input
          data-testid="input-form-email"
          type="text"
          name="email"
          ref={register({ required: true })}
        />
        {errors.email && "This field is required"}

        <label data-testid="test-label" htmlFor="password">
          Password
        </label>
        <input
          data-testid="input-form-password"
          type="password"
          name="password"
          ref={register({ required: true })}
        />
        {errors.password && "This field is required"}

        <button data-testid="submit-button" type="submit">
          {" "}
          Login{" "}
        </button>
      </form>
      <button
        onClick={() => (window.location = "http://localhost:5000/auth/google")}
      >
        {" "}
        Google +
      </button>
    </main>
  );
}

export default withRouter(Login);
