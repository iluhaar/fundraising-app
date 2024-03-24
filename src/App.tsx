import { useEffect, useState } from "react";

import { JarComponent } from "./Components/JarComponent/JarComponent";
import { TotalComponent } from "./Components/TotalComponent";

import { fetchJarsData, fetchJarsDataPost } from "./helpers/helpers";

import { JarType } from "./types/jar";

import "./App.css";

function App() {
  const [jarsData, setJars] = useState<JarType[] | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const queryParameters = new URLSearchParams(window.location.search);
  const monoId = queryParameters.get("mono");
  const pr = queryParameters.get("pr");

  const allMonoParams = queryParameters.getAll("mono");

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
    <div className="app_wrapper">
      <section className="jars_wrapper">
        {jarsData.length &&
          jarsData.map((jar, index) => (
            <JarComponent {...jar} key={index + `${jar.bank}`} />
          ))}
      </section>
      <TotalComponent jarsData={jarsData} />
    </div>
  );
}

export default App;
