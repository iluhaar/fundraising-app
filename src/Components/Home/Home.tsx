import previewImg from "../../assets/previewExample.png";
import firstStepMono from "../../assets/guides/mono-guide/first-screen.png";
import secondStepMono from "../../assets/guides/mono-guide/second-screen.png";
import thirdStepMono from "../../assets/guides/mono-guide/third-screen.png";
import privatStep from "../../assets/guides/privat-guide/step.png";

import { NavLink } from "react-router-dom";
import { AddJarForm } from "../AddJarForm/AddJarForm";

export const Home = () => {
  return (
    <div className="home__wrapper">
      <h1>Вітаю! Це сервіс для моніторінгу динаміки зборів</h1>
      <section>
        <h2>З цим сервісом ви зможете моніторити:</h2>
        <ul style={{ textAlign: "initial", textWrap: "pretty" }}>
          <li>
            збори на моно, коли до загалього збору долучаються ще люди, як
            приклад це{" "}
            <strong style={{ textDecoration: "underline" }}>
              <a
                href="https://ain.ua/2023/08/18/kejs-tylovyky-azovu-malenki-zbory-shho-peretvoryatsya-u-25-mln-gryven/"
                target="_blank"
              >
                "Тиловики Азову"
              </a>
            </strong>
          </li>
          <li>збори коли збір йде на банку моно і на конверт приватбанку</li>
        </ul>
        <div style={{ display: "flex" }}>
          <strong>
            <p>Приклад:</p>
          </strong>
          <img
            src={previewImg}
            className="previewImg"
            width="550"
            alt="preview image"
          />
        </div>
      </section>
      <section>
        <h2>Як моніторити збір і додавати лінки на банки?</h2>
        <details className="spoiler">
          <summary>Важлива деталь!</summary>
          <section>
            <h4>На даний момент сервіс підтримує 2 види моніторингу</h4>
            <ul>
              <li>ви можете слідкувати за довільною кількістю монобанок</li>
              <li>за одною банкою і одним конвертом одночасно</li>
            </ul>

            <p>
              Якщо у вас специфічний випадок, то можете звернутися до мене
              особисто контакти на сторінці{" "}
              <NavLink to="/contacts">зворотній зв'язок</NavLink>
            </p>
          </section>
        </details>
        <h3>
          Спершу вам потрібно підготувати список унікальних ідентифікаторів
          (далі ID) монобанок чи приват конвертів
        </h3>
        <section>
          <h4 id="#beginning-mono">Як знайти потрібний ID монобанки </h4>Я не
          буде описувати етап створення банки, тому перейдемо одразу до пошуку
          id
          <ol>
            <li>Відкриваємо посилання на монобанку</li>
            <details className="spoiler">
              <summary>Зображення</summary>
              <img
                src={firstStepMono}
                alt="Відкриваємо посилання на монобанку"
                width="550"
                className="stepsImg"
              />
            </details>

            <li>
              Настикаємо на "Streaming widget"
              <details className="spoiler">
                <summary>Зображення</summary>
                <img
                  src={secondStepMono}
                  alt="Відкриваємо посилання на монобанку"
                  width="550"
                  className="stepsImg"
                />
              </details>
            </li>
            <li>
              У вкладці що вікрилась копіюєте все що після "longJarId=" і до "&"
              <details className="spoiler">
                <summary>Зображення</summary>
                <img
                  src={thirdStepMono}
                  alt='
            У вкладці що вікрилась копіюєте все що після "longJarId=" і до "&"'
                  width="550"
                  className="stepsImg"
                />
              </details>
            </li>
            <li>
              Запишіть цей ID кудись, щоб не загубити і переходьте до наступної
              банки починаючи{" "}
              <strong>
                <a href="#beginning-mono">з першого пункту </a>
              </strong>
            </li>
          </ol>
        </section>
        <section>
          <h4 id="beginning-privat">Як знайти потрібний ID приват конверту </h4>
          <p>В Приваті все трохи простіше</p>
          <ol>
            <li>
              Відкрити посилання на конверт і скопіювати ID після останнього "/"
              <details className="spoiler">
                <summary>Зображення</summary>
                <img
                  src={privatStep}
                  alt="Відкриваємо посилання на конверт"
                  width="550"
                  className="stepsImg"
                />
              </details>
            </li>
            <li>Записати кудись цей ID</li>
          </ol>
        </section>

        <AddJarForm />

        <section className="warning">
          <h3>Важливо!!</h3>
          <p>
            Якщо ваше посилання виходить дуже довгим, то вам потрібно скористатися
            сервісом скорочення посиалань, наприклад{" "}
            <a href="https://www.shorturl.at/" target="_blank">
              https://www.shorturl.at/
            </a>
          </p>
        </section>
      </section>
    </div>
  );
};
