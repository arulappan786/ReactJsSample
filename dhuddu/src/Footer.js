import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <p>Copyright &copy;{props.year}</p>
    </footer>
  );
};

const year = new Date();

Footer.defaultProps = {
  year: year.getFullYear(),
};

export default Footer;
