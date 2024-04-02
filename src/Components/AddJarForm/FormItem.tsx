import React, { useState } from "react";
type Props = {
  isButtonDisabled: boolean;
  handleMonitoringLink: (arg1: string, arg2: string) => void;
};

export const FormItem = ({ isButtonDisabled, handleMonitoringLink }: Props) => {
  const [checkBoxValue, setCheckBoxValue] = useState("mono");
  const [textFieldValue, setTextFieldValue] = useState("");

  const handleSelect = () => {
    handleMonitoringLink(checkBoxValue, textFieldValue);

    setTextFieldValue("");
    setCheckBoxValue("mono");
  };

  return (
    <div className="form-item">
      <div>
        <label htmlFor="mono">
          Моно
          <input
            type="checkbox"
            name="mono"
            id="mono"
            checked={checkBoxValue === "mono" ? true : false}
            onChange={() => setCheckBoxValue("mono")}
          />
        </label>
        <label htmlFor="privat">
          Приват
          <input
            type="checkbox"
            name="privat"
            id="privat"
            checked={checkBoxValue === "pr" ? true : false}
            onChange={() => setCheckBoxValue("pr")}
          />
        </label>
      </div>
      <input
        type="text"
        name="text"
        id="text"
        value={textFieldValue}
        onChange={(e) => setTextFieldValue(e.target.value)}
      />
      <button
        onClick={handleSelect}
        disabled={isButtonDisabled}
        title={
          isButtonDisabled
            ? "Ви можете слідкувати тільки за однією банкою і одним конвертом"
            : ""
        }
      >
        Додати
      </button>
    </div>
  );
};
