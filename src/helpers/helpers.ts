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
    console.error(error);
  }
};

export const fetchJarsDataPost = async (mono: string[]) => {
  const url = `https://fundraising-server.onrender.com/data`;
  const body = JSON.stringify(mono);

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

const getGoal = (goals: number[]) => {
  let maxGoal = 0;

  for (const goal of goals) {
    const currentGoal = goal;
    if (currentGoal > maxGoal) {
      maxGoal = currentGoal;
    }
  }

  return maxGoal;
};

const calculateAccumulatedTotal = (jars: JarType[]) => {
  return jars.reduce((accumulator, currentValue) => {
    const amount = parseInt(currentValue.amount.replace(/[^0-9.]/g, ""));

    return accumulator + amount;
  }, 0);
};

export const calculateAccumulated = (jars: JarType[]) => {
  const goals = jars.map((jar) => parseInt(jar.goal.replace(/[^0-9.]/g, "")));

  const goal = getGoal(goals);

  const total = calculateAccumulatedTotal(jars);

  const progress = ((total / goal) * 100).toFixed(2);

  return { total: formatMoney(total), progress, goal: formatMoney(goal) };
};
