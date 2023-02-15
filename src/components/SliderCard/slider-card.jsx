import styles from './slider-card.module.css'
import { FunctionalCardsData } from "../../utils/constants/functionalCardsData";
import FunctionalCard from "../FunctionalCard/FunctionalCard";
import { Splide, SplideSlide } from "@splidejs/react-splide";

function SliderCard() {
  return (
    <Splide  aria-label="My Favorite Images" className={styles.slider}>
      {FunctionalCardsData.map((el, index) => {
        return (
          <SplideSlide key={index}>
            <FunctionalCard data={el} component='slider'/>
          </SplideSlide>
        );
      })}
    </Splide>
  );
}

export default SliderCard;

// function SliderCard() {
//   return (
//     <section class="splide" aria-label="Splide Basic HTML Example">
//       <div class="splide__track">
//         <ul class="splide__list">
//           {FunctionalCardsData.map((el, index) => {
//             return (
//               <FunctionalCard className="splide__slide" data={el} key={index} />
//             );
//           })}
//         </ul>
//       </div>
//     </section>
//   );
// }

// export default SliderCard;
