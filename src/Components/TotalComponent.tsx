import { calculateAccumulated } from "../helpers/helpers";
import { JarType } from "../types/jar";
import { Progressbar } from "./Progressbar/Progressbar";

type Props = {
  jarsData: JarType[];
};

export const TotalComponent = ({ jarsData }: Props) => {
  const {
    total: accumulated,
    progress,
    goal: totalGoal,
  } = calculateAccumulated(jarsData);

  return (
    <div>
      <h3>Ціль: {totalGoal} ₴</h3>
      <h4>Всього зібрано: {accumulated} ₴</h4>
      <Progressbar progress={progress} />
    </div>
  );
};
