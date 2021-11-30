import React, { useState } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import "./LandingPage.css";
import FeedCard from "../../../components/feedCard/FeedCard";
import Button from "../../../components/button/Button";
import Modal from "../../../components/modal/Modal";
import { NavLink, Redirect, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { AuthAction } from "../../../redux/actions/Index";
import { ROUTES } from "../../../services/constants/Index";
function LandingPage() {
  const [open, setOpen] = useState(false);
  const [employee, setEmployee] = useState();

  const dispatch = useDispatch();
  const history = useHistory();

  if (localStorage.getItem("token") === null) {
    return <Redirect to={ROUTES.LOGIN} />;
  }

  return (
    <div>
      <Navbar bg="blue" className="navBarMain" expand="lg">
        <Container>
          <Navbar.Brand
            to={{
              pathname: "/home",
            }}
          >
            Employee Management
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Button
            background="secondary"
            color="secondary"
            name="Sign out"
            handleClick={() => {
              dispatch(AuthAction.logOut());
              history.push(ROUTES.LOGIN);
            }}
          />
        </Container>
      </Navbar>
      <div>
        <div className="text-right mr-5 mt-3">
          <Button
            background="primary"
            color="tertiary"
            name="Add Employee"
            handleClick={() => {
              setOpen(!open);
            }}
          />
        </div>
        <Modal
          open={open}
          handleClose={() => {
            setOpen(false);
            setEmployee();
          }}
          employee={employee}
        />
        <FeedCard setOpen={setOpen} setEmployee={setEmployee} />
      </div>
    </div>
  );
}

export default LandingPage;
