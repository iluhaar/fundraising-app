import { fetchMocked, postMocked } from "./mocked";

export const fetchJarsData = async (mono: string, pr: string) => {
  const url = `https://fundraising-server.onrender.com/data?mono=${mono}&pr=${pr}`;
  // const url = `http://localhost:3000/data?mono=${mono}&pr=${pr}`;

  return fetchMocked;
  try {
    const data = fetch(url).then((res) => res.json());
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const fetchJarsDataPost = async (mono: string[]) => {
  const url = `https://fundraising-server.onrender.com/data`;
  // const url = `http://localhost:3000/data`;
  const body = JSON.stringify(mono);

  return postMocked;
  try {
    const data = await fetch(url, {
      method: "POST",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    return data;
  } catch (error) {
    console.error("", error);
  }
};
