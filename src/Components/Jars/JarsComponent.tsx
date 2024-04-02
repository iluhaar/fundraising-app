import React, { useEffect, useState } from "react";
import { fetchJarsData, fetchJarsDataPost } from "../../helpers/helpers";
import { JarComponent } from "../JarComponent/JarComponent";
import { TotalComponent } from "../TotalComponent";
import { JarsType } from "../../types/jar";

import "../../App.css";

import ReactGA from "react-ga";
ReactGA.initialize("G-XCBHE38N1Z");

export const JarsComponent = () => {
  const [jarsData, setJars] = useState<JarsType | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const queryParameters = new URLSearchParams(window.location.search);
  const monoId = queryParameters.get("mono");
  const pr = queryParameters.get("pr");
  const allMonoParams = queryParameters.getAll("mono");

  useEffect(() => {
    ReactGA.send({ hitType: "pageview", page: window.location.pathname });
  }, []);

  useEffect(() => {
    async function fetchData() {
      if (allMonoParams.length > 1) {
        const data = await fetchJarsDataPost(allMonoParams);
        if (data !== undefined) {
          setJars(data);
          setIsLoading(false);
        }
        return;
      }
      if (monoId === null || pr === null) return null;
      const data = await fetchJarsData(monoId, pr);

      if (data !== undefined) {
        setJars(data);
        setIsLoading(false);
      }
    }

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (isLoading) {
    return (
      <>
        <h1>...Loading</h1>
      </>
    );
  }

  if (jarsData === null) return null;

  return (
    <>
      <TotalComponent
        total={jarsData.total}
        goal={jarsData.goal}
        progress={jarsData.progress}
      />

      <section className="jars_wrapper">
        {jarsData.data.length &&
          jarsData.data.map((jar, index) => (
            <JarComponent {...jar} key={index + `${jar.bank}`} />
          ))}
      </section>
    </>
  );
};
