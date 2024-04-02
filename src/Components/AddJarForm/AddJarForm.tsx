import React, { useEffect, useState } from "react";

import { FormItem } from "./FormItem";

export const AddJarForm = () => {
  const [stringWithIDs, setStringWithIDs] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  const handleClear = () => {
    const isAccepted = window.confirm("Ви точно хочете стерти всі ID?");
    if (isAccepted) setStringWithIDs("");
  };

  const handleMonitoringLink = (checkBox: string, text: string) => {
    const string = `${checkBox}=${text}`;

    setStringWithIDs((prev) =>
      prev.length ? `${prev}&${string}` : `/data?${prev}${string}`
    );
  };

  useEffect(() => {
    setIsButtonDisabled(
      stringWithIDs.includes("mono=") && stringWithIDs.includes("pr=")
    );
  }, [stringWithIDs]);

  return (
    <>
      <h3>Створення посилання для слідкування за збором</h3>
      <p>На цьому етапі у вас вже має бути список ID</p>

      <>
        <FormItem
          handleMonitoringLink={handleMonitoringLink}
          isButtonDisabled={isButtonDisabled}
        />
        <p>
          <span
            style={{
              width: "15vw",
              wordWrap: "break-word",
              display: "inline-block",
              textDecoration: "underline",
            }}
          >
            <a href={`${stringWithIDs}`} target="_blank">
              {stringWithIDs}
            </a>
          </span>
        </p>

        {stringWithIDs.length > 0 && (
          <>
            <button onClick={handleClear}>Стерти</button>
          </>
        )}
      </>
    </>
  );
};
