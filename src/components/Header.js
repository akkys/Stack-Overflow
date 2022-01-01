import React from "react";

const Header = (props) => {
  return (
    <div className="container">
      <h3 style={{ margin: "25px 25px 10px 25px" }}>{props.title}</h3>
      <p
        style={{
          margin: "15px 25px 25px 25px",
          fontSize: "18px",
        }}
      >
        {props.questions.length} of {props.totalQuestions.length} questions
      </p>
      <hr />
    </div>
  );
};

export default Header;
