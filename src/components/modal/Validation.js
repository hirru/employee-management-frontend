function isBlank(str) {
  return !str || /^\s*$/.test(str);
}
function isNumber(str) {
  var reg = /^\d+$/;
  return reg.test(str);
}

export const ValidateModalForm = (formData) => {
  const { firstName, lastName, email, address, dob, mobile, city } =
    formData || {};
  let error = {
    firstName: [],
    lastName: [],
    email: [],
    address: [],
    dob: [],
    mobile: [],
    city: [],
  };
  let isFormValid = true;
  if (isBlank(firstName) === true) {
    isFormValid = false;
    error.firstName = ["This field is required."];
  } else if (firstName?.trim().length > 0 && firstName?.trim().length > 50) {
    isFormValid = false;
    error.firstName = ["Name cannot be greater than 50."];
  }
  if (isBlank(lastName) === true) {
    isFormValid = false;
    error.lastName = ["This field is required."];
  } else if (lastName?.trim().length > 0 && lastName?.trim().length > 50) {
    isFormValid = false;
    error.lastName = ["Last Name cannot be greater than 50."];
  }

  if (isBlank(email) === true) {
    isFormValid = false;
    error.email = ["This field is required."];
  } else if (
    email.trim().length > 0 &&
    /^([a-zA-Z0-9_\.\-]+)@([a-zA-Z0-9_\.\-]+)\.([a-zA-Z]{2,5})$/.test(
      formData.email
    ) === false
  ) {
    isFormValid = false;
    error.email = ["This must be a valid email address."];
  }

  if (isBlank(address) === true) {
    isFormValid = false;
    error.address = ["This field is required."];
  } else if (
    address?.trim().length > 0 &&
    (address?.trim().length < 6 || address?.trim().length > 20)
  ) {
    isFormValid = false;
    error.address = ["address length must be between 6 to 20 characters."];
  }

  if (isBlank(dob) === true) {
    isFormValid = false;
    error.dob = ["This field is required."];
  }

  if (isBlank(mobile) === true) {
    isFormValid = false;
    error.mobile = ["This field is required."];
  } else if (!/^\d{10}$/.test(mobile)) {
    isFormValid = false;
    error.mobile = ["Please enter valid number ."];
  }

  if (isBlank(city) === true) {
    isFormValid = false;
    error.city = ["This field is required."];
  } else if (isNumber(city)) {
    isFormValid = false;
    error.city = ["City must be string"];
  }

  return { isFormValid, error };
};
