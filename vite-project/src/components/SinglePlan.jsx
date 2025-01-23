import React from "react";

const SinglePlan = ({
  headerStyle,
  data1,
  rowStyleEven,
  rowStyleOdd,
  cellStyle,
}) => {
  return (
    <div>
      <h1 className="font-bold text-3xl text-center">Single Plan</h1>
      <div style={{ margin: "20px", fontFamily: "Arial, sans-serif" }}>
        <table style={{ borderCollapse: "collapse", width: "100%" }}>
          <thead>
            <tr>
              <th style={headerStyle}>Rate</th>
              <th style={headerStyle}>Session</th>
              <th style={headerStyle}>Fee</th>
            </tr>
          </thead>
          <tbody>
            {data1.map((row, index) => (
              <tr
                key={index}
                style={index % 2 === 0 ? rowStyleEven : rowStyleOdd}
              >
                <td style={cellStyle}>{row.rate}</td>
                <td style={cellStyle}>{row.session}</td>
                <td style={cellStyle}>{row.fee}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SinglePlan;
