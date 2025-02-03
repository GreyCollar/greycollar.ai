import Header from "../common/header-simple";
import PropTypes from "prop-types";

// ----------------------------------------------------------------------

export default function SimpleLayout({ children }) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}

SimpleLayout.propTypes = {
  children: PropTypes.node,
};
