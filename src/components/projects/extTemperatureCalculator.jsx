import React, { useState } from "react";

const convertTemperature = (value, fromUnit, toUnit) => {
  if (value === "" || isNaN(value)) return "";

  const temp = parseFloat(value);

  let celsius;
  switch (fromUnit) {
    case "Celsius":
      celsius = temp;
      break;
    case "Fahrenheit":
      celsius = (temp - 32) * (5 / 9);
      break;
    case "Kelvin":
      celsius = temp - 273.15;
      break;
    default:
      return "";
  }

  switch (toUnit) {
    case "Celsius":
      return celsius;
    case "Fahrenheit":
      return (celsius * 9) / 5 + 32;
    case "Kelvin":
      return celsius + 273.15;
    default:
      return "";
  }
};

const TemperatureCalculator = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputUnit, setInputUnit] = useState("Celsius");
  const [outputUnit, setOutputUnit] = useState("Fahrenheit");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setResult(convertTemperature(value, inputUnit, outputUnit));
  };

  const handleInputUnitChange = (e) => {
    const value = e.target.value;
    setInputUnit(value);
    setResult(convertTemperature(inputValue, value, outputUnit));
  };

  const handleOutputUnitChange = (e) => {
    const value = e.target.value;
    setOutputUnit(value);
    setResult(convertTemperature(inputValue, inputUnit, value));
  };

  const resetFields = () => {
    setInputValue("");
    setResult("");
  };

  return (
    <div className="p-6 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-md max-w-sm mx-auto">
      <h1 className="text-xl font-bold mb-4 text-center text-gray-800 dark:text-gray-200">
        Temperature Converter
      </h1>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Starting Value
        </label>
        <input
          type="number"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Enter value"
          className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
        />
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Starting Unit
        </label>
        <select
          value={inputUnit}
          onChange={handleInputUnitChange}
          className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
          Result Unit
        </label>
        <select
          value={outputUnit}
          onChange={handleOutputUnitChange}
          className="w-full px-3 py-2 border rounded-md dark:bg-gray-700 dark:text-gray-200"
        >
          <option value="Celsius">Celsius</option>
          <option value="Fahrenheit">Fahrenheit</option>
          <option value="Kelvin">Kelvin</option>
        </select>
      </div>
      <div className="text-center mb-4">
        <p className="text-lg font-bold dark:text-gray-300">
          Result: {result}
        </p>
      </div>
      <button
        onClick={resetFields}
        className="w-full bg-red-600 text-white px-4 py-2 rounded-md"
      >
        Reset
      </button>
    </div>
  );
};

export default TemperatureCalculator;

