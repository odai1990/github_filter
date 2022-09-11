import HeaderStyles from "./HeaderStyles.module.scss";
import CustomSearch from "../Components/CustomSearch/CustomSearch";

const Header = (props) => {
  return (
    <div className={HeaderStyles.container}>
      <CustomSearch {...props} />
    </div>
  );
};

export default Header;
