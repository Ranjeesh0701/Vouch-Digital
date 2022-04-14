import styled from "styled-components";
import { useState } from "react";
import axios from "axios";
import { Alert } from "reactstrap";

const WelcomeHeader = styled.h4`
  font-weight: 800;
  margin: 0px;
  font-size: 30px;
`;

const WelcomeSubHeader = styled.p`
  font-size: 12px;
  font-weight: 600;
  color: #869599;
`;

const Input = styled.input`
  margin: 7px 0px;
  padding: 14px 10px;
  border-radius: 4px;
  outline: none;
  font-size: 12px;
  font-weight: 600;
  color: #b8b8b8;
  border: 1px solid #cccccc;
  &::placeholder {
    color: #cccccc;
  }
  &:focus {
    border: 1px solid #023047;
  }
`;

const CheckBox = styled.input`
  accent-color: #023047;
`;

const InputButton = styled.input`
  margin: 7px 0px;
  padding: 14px 10px;
  border-radius: 2px;
  outline: none;
  font-size: 12px;
  font-weight: 700;
  color: #ffffff;
  background-color: #023047;
  box-shadow: 0px 0px 2px 1px #cdcece;
`;

const Text = styled.p`
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  color: #023047;
`;

const LoginContainer = (props) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [visible, setVisible] = useState(false);

  const [error, setError] = useState("");

  const onDismiss = () => {
    setVisible(!visible);
  };

  const handlePost = () => {
    axios
      .post("https://reqres.in/api/login", {
        email: username,
        password,
      })
      .then((res) => {
        setError("");
        setVisible(false);
        props.setLoggedIn(true);
        window.sessionStorage.setItem("user", username);
        window.sessionStorage.setItem("token", res.data.token);
      })
      .catch((err) => {
        if (username === "" && password === "") {
          setError("Missing email or username.");
        } else if (username === "") {
          setError("Missing email.");
        } else if (password === "") {
          setError("Missing password.");
        } else {
          setError("User not found.");
        }
        setVisible(true);
        return;
      });
  };

  return (
    <div>
      {props.logged ? (
        <Alert color="warning">Login Success.</Alert>
      ) : (
        <div className="mx-lg-5" style={{ position: "relative" }}>
          <Alert
            color="secondary"
            isOpen={visible}
            toggle={onDismiss}
            fade={true}
            className="mb-5"
            style={{ fontSize: "14px", fontWeight: "600" }}
          >
            {error}
          </Alert>
          <div className="text w-100">
            <WelcomeHeader>Welcome Back</WelcomeHeader>
            <WelcomeSubHeader>Sub-title text goes here</WelcomeSubHeader>
          </div>
          <div className="form w-100">
            <form
              className="row justify-content-center"
              onSubmit={(e) => e.preventDefault()}
            >
              <Input
                type="text"
                placeholder="Email Address *"
                className="mt-2"
                value={username}
                onChange={({ target }) => setUsername(target.value)}
              />
              <Input
                type="password"
                placeholder="Password *"
                value={password}
                onChange={({ target }) => setPassword(target.value)}
              />
              <InputButton type="submit" value="Login" onClick={handlePost} />
              <div
                className="row w-100 px-0"
                style={{
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  className="col-auto px-0 my-1"
                >
                  <CheckBox type="checkbox" id="checkbox_id" />
                  <label htmlFor="checkbox_id">
                    <Text className="my-0 ms-2 me-4">Remember Password</Text>
                  </label>
                </div>
                <div className="col-auto px-0 my-1">
                  <a href="/" style={{ textDecoration: "none" }}>
                    <Text className="my-0">Forget Password?</Text>
                  </a>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default LoginContainer;
