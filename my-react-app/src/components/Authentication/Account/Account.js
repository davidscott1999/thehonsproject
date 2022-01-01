import React, { useState } from 'react';

import {
  Alert,
  Card,
} from 'react-bootstrap';
import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

import Button from '@restart/ui/esm/Button';

import { useAuth } from '../../../contexts/AuthContext';

function Account() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const history = useHistory();

  async function handleLogout() {
    setError("");

    //error handling for creating an account
    try {
      await logout;
      history.push("/login");
    } catch {
      setError("Failed to log out account");
    }
  }

  return (
    <>
      <Card>
        <Card.Body>
          <h2 className="text-center">Reset Password</h2>
          {error && <Alert variant="danger">{error}</Alert>}
          <strong>Email:</strong> {currentUser.email}
          <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
            Update Profile
          </Link>
        </Card.Body>
      </Card>
      <div className="w-100 text-center mt-2">
        <Button variant="link" onClick={handleLogout}>
          Log Out
        </Button>
      </div>
    </>
  );
}

export { Account };
