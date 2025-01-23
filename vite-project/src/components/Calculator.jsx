import React, { useState } from "react";
import { useForm } from "react-hook-form";
const Calculator = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [oneMonthTotal, setOneMonthTotal] = useState();
  const [twoMonthTotal, settwoMonthTotal] = useState();
  const [threeMonthTotal, setThreeMonthTotal] = useState();

  const calculateSessionFee = (
    totalNoOfClient,
    noOfClients,
    fee,
    noOfSessions,
    months
  ) => {
    let tax = fee * 0.5;
    let newFee = fee - tax;
    let sessionFee;

    if (totalNoOfClient <= 8) {
      newFee = newFee * 0.4;
    } else if (totalNoOfClient >= 9 && totalNoOfClient <= 12) {
      newFee *= 0.5;
    } else if (totalNoOfClient >= 12 && totalNoOfClient <= 16) {
      newFee *= 0.55;
    } else {
      newFee *= 0.6;
    }
    sessionFee = newFee / 12;
    return Math.trunc(sessionFee);
  };

  const onSubmit = (data) => {
    console.log(data);

    // const oneMonthTotal = () => {
    //   let tax = data.oneMonthFee * 0.2;

    //   let newFee = data.oneMonthFee - tax;
    //   console.log(newFee);
    //   let oneSession;
    //   let oneTotal;

    //   if (data.totalNoOfClients >= 9) {
    //     oneSession = newFee / 12;
    //   } else if (data.totalNoOfClients < 9) {
    //     newFee = data.oneMonthFe * 0.35;
    //     oneSession = newFee / 12;
    //   }
    //   oneTotal = oneSession * data.oneMonthSessions;
    //   return oneTotal;
    // };
    // console.log(oneMonthTotal());

    let oneMonthTotal = calculateSessionFee(
      data.totalNoOfClients,
      data.numberOfOneMonthClient,
      data.oneMonthFee,
      data.oneMonthSessions,
      1
    );

    let twoMonthTotal = calculateSessionFee(
      data.totalNoOfClients,
      data.twoMonthsClient,
      data.twoMonthsFee,
      data.twoMonthsSessions,
      2
    );
    let threeMonthTotal = calculateSessionFee(
      data.totalNoOfClients,
      data.noOfThreeMonthClient,
      data.threeMonthFee,
      data.threeMonthSessions,
      3
    );

    setOneMonthTotal(oneMonthTotal);
    settwoMonthTotal(twoMonthTotal);
    setThreeMonthTotal(threeMonthTotal);

    localStorage.setItem("oneMonthTotal", oneMonthTotal);
    localStorage.setItem("twoMonthTotal", twoMonthTotal);
    localStorage.setItem("threeMonthTotal", threeMonthTotal);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold text-blue-500 mb-6 text-center mt-[4rem]">
        Gym Trainer Form
      </h1>
      <div className="p-2 flex flex-col sm:flex-row justify-evenly w-full gap-10">
        <form
          className="space-y-4 bg-white p-8 rounded shadow-md w-full max-w-2xl"
          onSubmit={handleSubmit(onSubmit)}
        >
          <div>
            <label htmlFor="dropdown" className="block text-gray-700 mb-2">
              Select a Plan:
            </label>
            <select
              id="dropdown"
              name="dropdown"
              className="w-full p-2 border border-gray-300 rounded"
              {...register("plan", { required: true })}
            >
              {errors.plan && (
                <p style={{ color: "red", fontSize: "0.9em" }}>
                  This is required field
                </p>
              )}
              <option disabled>Choose an option</option>
              <option value="single_plan">Single Plan</option>
              <option value="couple_plan">couple Plan</option>
            </select>
          </div>
          <div>
            <label htmlFor="" className="block text-gray-700 mb-2">
              Total Number of clients:
            </label>
            <input
              type="text"
              id=""
              name=""
              className="w-full p-2 border border-gray-300 rounded"
              placeholder="Total Number of clients"
              {...register("totalNoOfClients", {
                validate: (value) =>
                  value >= 0 || "value must be positive number",
              })}
            />
            {errors.totalNoOfClients && (
              <p style={{ color: "red", fontSize: "0.9em" }}>
                {errors.totalNoOfClients.message}
              </p>
            )}
          </div>
          <fieldset className="border border-gray-300 p-4 rounded-md shadow-sm">
            <legend className="text-lg font-medium text-gray-700 px-2">
              For 1 month
            </legend>
            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                Number of One Month Clients:
              </label>
              <input
                type="text"
                id=""
                name=""
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Number of One Month Clients"
                {...register("numberOfOneMonthClient", {
                  validate: (value) =>
                    value >= 0 || "value must be positive number",
                })}
              />
              {errors.numberOfOneMonthClient && (
                <p style={{ color: "red", fontSize: "0.9em" }}>
                  {errors.numberOfOneMonthClient.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                1 month Fee
              </label>
              <input
                type="number"
                id=""
                name=""
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="1 month Fee"
                {...register("oneMonthFee", {
                  validate: (value) =>
                    value >= 0 || "value must be positive number",
                })}
              />
              {errors.oneMonthFee && (
                <p style={{ color: "red", fontSize: "0.9em" }}>
                  {errors.oneMonthFee.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700 mb-2">
                1 month Sessions
              </label>
              <input
                type="number"
                id=""
                name=""
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="1 month sessions"
                {...register("oneMonthSessions", {
                  validate: (value) =>
                    value >= 0 || "value must be positive number",
                })}
              />
              {errors.oneMonthSessions && (
                <p style={{ color: "red", fontSize: "0.9em" }}>
                  {errors.oneMonthSessions.message}
                </p>
              )}
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 p-4 rounded-md shadow-sm">
            <legend className="text-lg font-medium text-gray-700 px-2">
              For 2 month
            </legend>
            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                Number of two Month Clients:
              </label>
              <input
                type="text"
                id=""
                name=""
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Number of One Month Clients"
                {...register("twoMonthsClient", {
                  validate: (value) =>
                    value >= 0 || "value must be positive number",
                })}
              />
              {errors.twoMonthsClient && (
                <p style={{ color: "red", fontSize: "0.9em" }}>
                  {errors.twoMonthsClient.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                2 month Fee
              </label>
              <input
                type="number"
                id=""
                name=""
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="2 month Fee"
                {...register("twoMonthsFee", {
                  validate: (value) =>
                    value >= 0 || "value must be positive number",
                })}
              />
              {errors.twoMonthsFee && (
                <p style={{ color: "red", fontSize: "0.9em" }}>
                  {errors.twoMonthsFee.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                2 month Sessions
              </label>
              <input
                type="number"
                id=""
                name=""
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="2 month sessions"
                {...register("twoMonthsSessions", {
                  validate: (value) =>
                    value >= 0 || "value must be positive number",
                })}
              />
              {errors.twoMonthsSessions && (
                <p style={{ color: "red", fontSize: "0.9em" }}>
                  {errors.twoMonthsSessions.message}
                </p>
              )}
            </div>
          </fieldset>

          <fieldset className="border border-gray-300 p-4 rounded-md shadow-sm">
            <legend className="text-lg font-medium text-gray-700 px-2">
              For 3 month
            </legend>
            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                Number of Three Month Clients:
              </label>
              <input
                type="text"
                id=""
                name=""
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="Number of Three month Clients"
                {...register("noOfThreeMonthClient", {
                  validate: (value) =>
                    value >= 0 || "value must be positive number",
                })}
              />
              {errors.noOfThreeMonthClient && (
                <p style={{ color: "red", fontSize: "0.9em" }}>
                  {errors.noOfThreeMonthClient.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                3 month Fee
              </label>
              <input
                type="number"
                id=""
                name=""
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="3 month Fee"
                {...register("threeMonthFee", {
                  validate: (value) =>
                    value >= 0 || "value must be positive number",
                })}
              />
              {errors.threeMonthFee && (
                <p style={{ color: "red", fontSize: "0.9em" }}>
                  {errors.threeMonthFee.message}
                </p>
              )}
            </div>
            <div>
              <label htmlFor="" className="block text-gray-700 mb-2">
                3 month Sessions
              </label>
              <input
                type="number"
                id=""
                name=""
                className="w-full p-2 border border-gray-300 rounded"
                placeholder="3 month sessions"
                {...register("threeMonthSessions", {
                  validate: (value) =>
                    value >= 0 || "value must be positive number",
                })}
              />
              {errors.threeMonthSessions && (
                <p style={{ color: "red", fontSize: "0.9em" }}>
                  {errors.threeMonthSessions.message}
                </p>
              )}
            </div>
          </fieldset>

          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
          >
            Submit
          </button>
        </form>

        <div className=" bg-white  p-8 rounded shadow-md w-full max-w-sm max-h-fit">
          <h1 className="text-lg font-bold text-blue-500 mb-4 text-center">
            Results
          </h1>
          <p className="text-gray-700 text-lg mb-2">
            1 month Total:{oneMonthTotal}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            2 Month Total:{twoMonthTotal}
          </p>
          <p className="text-gray-700 text-lg mb-2">
            3 Month Total:{threeMonthTotal}
          </p>
          <h2 className="font-bold text-xl">
            Total Revenue:
            {oneMonthTotal + twoMonthTotal + threeMonthTotal}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Calculator;
