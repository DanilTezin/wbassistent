import Styles from "./FunctionalCard.module.css";
import ArrowRight from "../../images/logos/arrow-right-black.svg";
import PlayIcon from "../../images/logos/play-icon.svg";

function FunctionalCard({ data, component }) {
  const CustomTag = component === "slider" ? "div" : "li";
  return (
    <CustomTag onClick={() =>{
      window.location.href = data.functionLink
    }} className={`${Styles.container} splide__slide ${CustomTag === 'div' ? Styles.slider : ''}`}>
      
      <h3 className={Styles.title}>{data.title}</h3>
      <p className={Styles.content}>{data.content}</p>
      <div className={Styles.linksContainer}>
        <div className={Styles.linkContainer}>
          <img
            className={Styles.linksImg}
            src={ArrowRight}
            alt="Указатель на ссылку справа"
          />
          <p className={Styles.linksContent}>
            {data.function}:{" "}
            <a className={Styles.link} href={data.functionLink}>
              {data.title}
            </a>
          </p>
        </div>
        <div className={Styles.linkContainer}>
          <img
            className={Styles.linksImg}
            src={PlayIcon}
            alt="Значок запустить видео"
          />
          <a className={Styles.link} href={data.howToUseLink}>
            Видео, как работает {data.title}
          </a>
        </div>
      </div>
    </CustomTag>
  );
}

export default FunctionalCard;
