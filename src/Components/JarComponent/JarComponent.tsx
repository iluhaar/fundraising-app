import { JarType } from "../../types/jar";

import logo from "../../assets/logo.jpg";

export const JarComponent = ({
  title,
  description,
  amount,
  closed,
  ownerName,
  ownerIcon,
  goal,
  bank,
  jarId,
}: JarType) => {
  const jarLink = jarId && `https://send.monobank.ua/jar/${jarId}`;

  const fundLogo = ownerIcon.includes("https") ? ownerIcon : logo;

  return (
    <div className="jar">
      <h3>{bank}</h3>
      <div className="raising-info">
        <div>
          <div>
            <h4>{title}</h4>
            <img
              className="jar-logo"
              src={fundLogo}
              width="150"
              alt={`logo ${title}`}
            />{" "}
            <div>
              <h5>{ownerName}</h5>
            </div>
          </div>
          <div>
            <span>
              <div style={{ textDecoration: closed ? "line-through" : "" }}>
                Зібрано:{amount} ₴
              </div>
              {closed && <h4> Збір закрито 💪</h4>}
            </span>
            <p>Ціль: {goal} ₴</p>
          </div>
          <p>{description}</p>
        </div>
      </div>

      <div>
        {jarId && (
          <button className="donate_button">
            <a href={jarLink} target="_blank">
              Банка
            </a>
          </button>
        )}
      </div>
    </div>
  );
};
