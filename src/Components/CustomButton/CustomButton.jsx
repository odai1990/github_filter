import React from "react";
import PropTypes from "prop-types";
import CustomButtonStyles from "./CustomButtonStyles.module.scss";
const CustomButton = ({ name, onClick }) => {
  return <button className={CustomButtonStyles.container}>{name}</button>;
};

CustomButton.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CustomButton;
