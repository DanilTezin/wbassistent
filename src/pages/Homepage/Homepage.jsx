import FunctionalCardsList from "../../components/FunctionalCardsList/FunctionalCardsList";
import HowToUseSKUSearch from "../../components/HowToUseSKUSearch/HowToUseSKUSearch";
import OurAdvantages from "../../components/OurAdvantages/OurAdvantages";
import Questions from "../../components/Questions/Questions";
import SearchField from "../../components/SearchField/SearchField";

function Homepage() {
  return (
    <div>
      <SearchField />
      <OurAdvantages/>
      <FunctionalCardsList />
      <HowToUseSKUSearch />
      <Questions />
    </div>
  );
}

export default Homepage;
