import PropTypes from "prop-types";
import Button from "./Button";

const Unique = ({ title, onAdd, showAdd }) => {
  return (
    <>
      <header className="header">
        <h1>{title}</h1>
        <Button
          color={showAdd ? "red" : "blue"}
          text={showAdd ? "Exit" : "Add task"}
          onClick={onAdd}
        />
      </header>
    </>
  );
};

Unique.propTypes = {
  title: PropTypes.string.isRequired,
};

Unique.defaultProps = {
  title: "Task tracker",
};

export default Unique;
