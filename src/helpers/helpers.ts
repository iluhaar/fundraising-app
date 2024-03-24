import { JarType } from "../types/jar";

const formatMoney = (money: number) => {
  const formattedNumber = (money / 100).toLocaleString("uk-UA", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  return formattedNumber;
};

export const fetchJarsData = async (mono: string, pr: string) => {
  const url = `https://fundraising-server.onrender.com/data?mono=${mono}&pr=${pr}`;
  // const url = `http://localhost:3000/data?mono=${mono}&pr=${pr}`;

  try {
    const data = fetch(url).then((res) => res.json());
    return data;
  } catch (error) {
    console.log("🚀 ~ getPrivatData ~ error:", error);
  }
};

export const calculateAccumulated = (jars: JarType[]) => {
  let goal = "";

  jars.forEach((jar) => {
    if (goal !== jar.goal) {
      return String((goal = jar.goal));
    }
  });

  const total: number = jars.reduce((accumulator, currentValue) => {
    const amount = parseInt(currentValue.amount.replace(/[^0-9.]/g, ""));

    return accumulator + amount;
  }, 0);

  const goalNumber: number = parseInt(goal.replace(/[^0-9.]/g, ""));
  const progress = ((total / goalNumber) * 100).toFixed(2);

  return { total: formatMoney(total), progress, goal };
};
