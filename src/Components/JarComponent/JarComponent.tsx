import { JarType } from "../../types/jar";

import logo from "../../assets/logo.jpg";

export const JarComponent = ({
  title,
  description,
  amount,
  //   closed,
  ownerName,
  ownerIcon,
  goal,
  bank,
}: JarType) => {
  const fundLogo = ownerIcon.includes("https") ? ownerIcon : logo;

  return (
    <div className="jar">
      <h2>{bank}</h2>
      <div>
        <div>
          <h3>{title}</h3>{" "}
          <img src={fundLogo} width="150" alt={`logo ${title}`} />{" "}
          <h4>{ownerName}</h4>
        </div>
        <div>
          <p>Зібрано:{amount} ₴</p>
          <p>Ціль: {goal} ₴</p>
        </div>
        <p>{description}</p>
      </div>
    </div>
  );
};
