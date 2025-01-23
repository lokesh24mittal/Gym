import React from "react";
import SinglePlan from "./SinglePlan";
import CouplePlan from "./CouplePlan";

const FeeDetails = () => {
  const data1 = [
    { rate: "1 month", session: "12", fee: "12,000" },
    { rate: "3 months", session: "36", fee: "29,000" },
    { rate: "6 months", session: "72", fee: "46,000" },
  ];

  const data2 = [
    { rate: "1 month", session: "12", fee: "18,000" },
    { rate: "3 months", session: "36", fee: "43,400" },
    { rate: "6 months", session: "72", fee: "69,400" },
  ];

  const headerStyle = {
    backgroundColor: "#f2f2f2",
    color: "#333",
    padding: "10px",
    textAlign: "left",
    borderBottom: "2px solid #ddd",
  };

  const cellStyle = {
    padding: "10px",
    borderBottom: "1px solid #ddd",
  };

  const rowStyleEven = {
    backgroundColor: "#f9f9f9",
  };

  const rowStyleOdd = {
    backgroundColor: "#ffffff",
  };

  return (
    <>
      <SinglePlan
        headerStyle={headerStyle}
        cellStyle={cellStyle}
        rowStyleEven={rowStyleEven}
        rowStyleOdd={rowStyleOdd}
        data1={data1}
      />

      <CouplePlan
        headerStyle={headerStyle}
        cellStyle={cellStyle}
        rowStyleEven={rowStyleEven}
        rowStyleOdd={rowStyleOdd}
        data1={data2}
      />
    </>
  );
};

export default FeeDetails;
