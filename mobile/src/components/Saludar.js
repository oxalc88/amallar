import { Text } from "react-native";
import PropTypes from "prop-types";

const Saludar = (props) => {
  //   const { firstname, lastname } = props;
  const { firstname = "Rolando", lastname = "Oxalc" } = props;
  return (
    <Text>
      Hola {firstname} {lastname}, a ver si aprendes esto en 3 días
    </Text>
  );
};

Saludar.propTypes = {
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string,
};

export default Saludar;
