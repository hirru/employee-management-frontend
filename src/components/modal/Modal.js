import React, { useState, useEffect } from "react";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CancelIcon from "@material-ui/icons/Cancel";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch, useSelector } from "react-redux";
import { ValidateModalForm } from "./Validation";

import "./Modal.css";
import InputField from "../input/Input";
import Button from "../button/Button";
import { PostAction } from "../../redux/actions/Index";
const FormDialog = (props) => {
  const [status, setStatus] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    dob: "",
    mobile: "",
    city: "",
  });

  const [loading, setLoading] = useState(false);

  const dispatch = useDispatch();
  const [errorData, setError] = useState();
  const { userData } = useSelector((state) => state.AuthReducer);
  const handleChange = (e) => {
    setStatus({
      ...status,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    setError();
    setStatus();
  }, [props.open]);

  useEffect(() => {
    if (props.employee !== undefined) {
      setStatus({
        firstName: props.employee.firstName,
        lastName: props.employee.lastName,
        email: props.employee.email,
        address: props.employee.address,
        dob: props.employee.dob,
        mobile: props.employee.mobile,
        city: props.employee.city,
      });
    }
  }, [props.employee]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await ValidateModalForm(status);
    setLoading(true);
    setError();
    if (!result?.isFormValid) {
      setError(result?.error);
      setLoading(false);
      return;
    } else {
      if (props.employee != undefined) {
        const response = await dispatch(PostAction.updateEmployee(status));
      } else {
        const response = await dispatch(PostAction.addEmployee(status));
      }
      setStatus({
        firstName: "",
        lastName: "",
        email: "",
        address: "",
        dob: "",
        mobile: "",
        city: "",
      });
      setError();
      setLoading(false);
      props.handleClose();
    }
  };
  return (
    <div>
      <Dialog
        open={props.open}
        className="details newRender"
        onClose={props.handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title " className="text-center  headStart">
          {props.employee == undefined ? "Add Employee" : "Update Employee"}
          <div className="modelIcon2">
            <IconButton
              type="submit"
              className=" newStatusHead "
              aria-label="search"
            >
              <CancelIcon onClick={props.handleClose} />
            </IconButton>
          </div>
        </DialogTitle>
        <DialogContent className=" d-flex flex-column newStatus ">
          <div>firstName</div>

          <InputField
            // label="firstName"
            type="text"
            variant="outlined"
            id="custom-css-outlined-input"
            name="firstName"
            value={status?.firstName}
            handleChange={handleChange}
            // onSubmit={onSubmit}
          />

          <p className="errorMsg">
            {" "}
            {errorData?.email && errorData.firstName[0]}
          </p>

          <div>lastName</div>

          <InputField
            // label="lastName"
            type="text"
            variant="outlined"
            id="custom-css-outlined-input"
            name="lastName"
            value={status?.lastName}
            handleChange={handleChange}
            // onSubmit={onSubmit}
          />
          <p className="errorMsg">
            {" "}
            {errorData?.email && errorData.lastName[0]}
          </p>

          <div>Email</div>
          <InputField
            // label="email"
            type="text"
            variant="outlined"
            id="custom-css-outlined-input"
            name="email"
            value={status?.email}
            disabled={props.employee != undefined}
            handleChange={handleChange}
            // onSubmit={onSubmit}
          />
          <p className="errorMsg"> {errorData?.email && errorData.email[0]}</p>
          <div>Address</div>

          <InputField
            // label="address"
            type="text"
            variant="outlined"
            id="custom-css-outlined-input"
            name="address"
            value={status?.address}
            handleChange={handleChange}
            // onSubmit={onSubmit}
          />
          <p className="errorMsg">
            {" "}
            {errorData?.address && errorData.address[0]}
          </p>
          <div>DOB</div>

          <InputField
            // label="dob"
            type="text"
            variant="outlined"
            id="custom-css-outlined-input"
            name="dob"
            value={status?.dob}
            handleChange={handleChange}
            // onSubmit={onSubmit}
          />
          <p className="errorMsg"> {errorData?.dob && errorData.dob[0]}</p>
          <div>Mobile</div>
          <InputField
            // label="mobile"
            type="text"
            variant="outlined"
            id="custom-css-outlined-input"
            name="mobile"
            value={status?.mobile}
            handleChange={handleChange}
            // onSubmit={onSubmit}
          />
          <p className="errorMsg">
            {" "}
            {errorData?.mobile && errorData.mobile[0]}
          </p>
          <div>City</div>
          <InputField
            // label="city"
            type="text"
            variant="outlined"
            id="custom-css-outlined-input"
            name="city"
            value={status?.city}
            handleChange={handleChange}
            // onSubmit={onSubmit}
          />
          <p className="errorMsg"> {errorData?.city && errorData.city[0]}</p>
          {/* {<p className="errorMsg text-center">{error}</p>} */}
          <div className="d-flex mt-5 buttonDiv">
            <Button
              background="primary"
              color="tertiary"
              name={props.employee != undefined ? "Update" : "Add"}
              handleClick={handleSubmit}
              loading={loading}
            />{" "}
            <Button
              background="primary"
              color="tertiary"
              name="Cancel"
              handleClick={() => props.handleClose()}
            />
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};
export default FormDialog;
