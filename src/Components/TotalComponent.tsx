import { Progressbar } from "./Progressbar/Progressbar";

type Props = {
  total: string;
  goal: string;
  progress: string;
};

export const TotalComponent = ({ total, goal, progress }: Props) => {
  return (
    <div className="totalComponent">
      <h3>Ціль: {goal} ₴</h3>
      <h4>Всього зібрано: {total} ₴</h4>
      <Progressbar progress={progress} />
    </div>
  );
};
