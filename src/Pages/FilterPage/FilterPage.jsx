import { useState } from "react";
import FilterPageStyles from "./FilterPageStyles.module.scss";
import CustomCard from "../../Components/CustomCard/CustomCard";
import Header from "../../Layout/Header";
import CustomNotification from "../../Components/CustomNotification/CustomNotification";

const FilterPage = () => {
  // This state for filterd repos after user selected them
  const [filteredRepo, setFilteredRepo] = useState([]);
  // This state for show eeroes in case we try to add duplicate repo
  const [showNotification, setShowNotification] = useState(false);
  // this function to delete repo from selected repo
  const onDeleteElement = (index) => {
    const temp = [...filteredRepo];
    temp.splice(index, 1);
    setFilteredRepo(temp);
  };
  return (
    <>
      {showNotification && <CustomNotification />}
      <Header
        filteredRepo={filteredRepo}
        setFilteredRepo={setFilteredRepo}
        setShowNotification={setShowNotification}
      />
      <div className={FilterPageStyles.container}>
        {filteredRepo?.map((data, index) => (
          <CustomCard
            data={data}
            key={data?.id}
            index={index}
            onDeleteElement={onDeleteElement}
          />
        ))}
      </div>
    </>
  );
};

export default FilterPage;
