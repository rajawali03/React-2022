import React from "react";

const List = ({ color, number, children }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        borderBottom: "1px solid rgba(117, 117, 117, 0.5)",
      }}
    >
      <div
        style={{
          height: "5rem",
          width: "5rem",
          borderRadius: "50%",
          backgroundColor: color ? color : "#8e24aa",
          fontWeight: 700,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginRight: "1rem",
        }}
      >
        {number}1
      </div>
      <p style={{ textAlign: "start" }}>{children}</p>
    </div>
  );
};

export default List;
