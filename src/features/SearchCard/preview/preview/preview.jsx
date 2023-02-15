import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Arrow } from "../../../../components/Arrow/arrow";
import Style from "../preview/preview.module.css";
import imgNotFound from '../../../../images/icons/image-not-found-icon.webp'
export const PreviewCard = ({ currentMedia }) => {

  return (
    <div className={Style.currentPreviewCard}>
      <img className={Style.currentPreviewCardImg} src={currentMedia ? currentMedia : imgNotFound} />
    </div>
  );
};

export const PreviewSlider = ({ setCurrentMedia}) => {
  const item = useSelector((state) => state.searchCardReducer.card);
  const [slide, setSlide] = useState(0);
  const [media, setMedia] = useState(item.mediaFiles);

  useEffect(() => {
    setMedia(item.mediaFiles)
  }, [item])

  let img = document.querySelectorAll("img");
  const enterMedia = (e) => {
    img.forEach((x) => (x.dataset.enter = false));
    e.target.dataset.enter = true;
    setCurrentMedia(e.target.dataset.id);
  };
  const handleTop = () => {
    setSlide(slide + 100);
    if (+slide >= 0) {
      setSlide(0);
    }
  };
  const handleBottom = () => {
    setSlide(slide - 100);
    if (slide < (media.length * 100 - 500) * -1) {
      setSlide(0);
    }
  };
  return (
    <div className={Style.cardPreviewSlider}>
      {media.length > 4 && <Arrow onClick={handleTop} />}
      <ul className={Style.slider}>
        {media.map((x) => (
          <li
            key={x}
            className={Style.sliderItem}
            style={{ top: `${slide + "px"}` }}
          >
            <img
              alt="desc"
              onMouseEnter={enterMedia}
              data-id={x}
              className={Style.sliderItemImg}
              src={x}
            />
          </li>
        ))}
      </ul>
      {media.length > 4 && <Arrow onClick={handleBottom} />}
    </div>
  );
};
