import { Container } from "react-bootstrap";
import { AuthProvider } from "../../contexts/AuthContext";
import { Signup } from "../Authentication/Signup";
import { Navbar } from "../Navbar/Navbar";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Dashboard } from "../Dashboard/Dashboard";
import { Login } from "../Authentication/Login/Login";
import { PasswordReset } from "../Authentication/PasswordReset/PasswordReset";
import { Account } from "../Authentication/Account/Account";

function App() {
  return (
    <>
      <div className="w-full">
        <Navbar />
        <div>
          <Container
            className="d-flex align-items-center justify-content-center"
            style={{ minHeight: "100vh" }}
          >
            <div className="w-100" style={{ maxWidth: "400px" }}>
              <Router>
                <AuthProvider>
                  <Switch>
                    <Route exact path="/" component={Dashboard} />
                    <Route path="/signup" component={Signup} />
                    <Route path="/login" component={Login} />
                    <Route path="/reset-password" component={PasswordReset} />
                    <Route path="/account" component={Account} />
                  </Switch>
                </AuthProvider>
              </Router>
            </div>
          </Container>
        </div>
      </div>
    </>
  );
}

export { App };
