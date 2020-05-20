import React from "react";
import "../css/login.css";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import LoginIcon from '@material-ui/icons/PermIdentity';
import logo from "../icons/icon.png";
import { Link } from "react-router-dom";
import Footer from "../functional_componet/footer";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
  },
}));

const Login = () => {
  const classes = useStyles();
  return (
    <div className="login">
      <div className="login-body ui-fluid">
        <div className="login-panel">
          <div className="login-panel-header">
            <img src={logo} alt="Logo"></img>
          </div>
          <div className="login-panel-content">
            <div className="ui-g-12">
              <h1>Sign into SentryGRC Network</h1>
            </div>

            <div className="ui-g">
              <div className="ui-g-12">
                <div>
                <TextField className="text-input" id="standard-basic" label="Username" />
                </div>
              </div>

              <div className="ui-g-12">
                <div>
                <TextField className="text-input"
          id="filled-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
                </div>
              </div>
              <div className="ui-g-12">
              <Button
        variant="contained"
        color="primary"
        className={classes.button}
        endIcon={<LoginIcon />}
      >
        Login
      </Button>
              </div>

              <div className="ui-g-12">
                <span className="account_d">
                  Don't have an account?{" "}
                  <Link to="/register">
                    <span>Sign Up</span>
                  </Link>{" "}
                  now.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="footer">
        <Footer />
      </div>
    </div>
  );
};

export default Login;
