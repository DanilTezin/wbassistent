import { useState } from "react";
import Style from "../Questions/Questions.module.css";
import { data } from "../../utils/constants/questionsData.jsx";

function Questions() {
  const [selected, setSelected] = useState(null);
  const toggle = (i) => {
    if (selected == i) {
      return setSelected(null);
    }
    setSelected(i);
  };

  return (
    <section className={`${Style.section}`}>
      <h2 className={`${Style.title}`}>
        Часто задаваемые <br /> <span className={`${Style.qves}`}>вопросы</span>
      </h2>
      <div>
        {data.map((item, i) => (
          <div
            className={`${Style.container}`}
            key={item.id}
            onClick={() => toggle(i)}
          >
            <h4 className={`${Style.question}`}>{item.title}</h4>
            <p
              className={
                selected === i ? `${Style.answerActive}` : `${Style.answer}`
              }
            >
              {item.answer}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Questions;
