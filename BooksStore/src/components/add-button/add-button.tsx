import React from "react";
import "./add-button.css";

interface IaddBtn {
  onForm: () => void;
}

const AddButton = (props: IaddBtn): JSX.Element => {
  return (
    <div className="button_container">
      <button className="add-button" onClick={() => props.onForm()}>
        Add New Book
      </button>
    </div>
  );
};

export default AddButton;
