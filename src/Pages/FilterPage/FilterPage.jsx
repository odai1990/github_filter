import { useEffect, useState } from "react";
import { callAPi } from "../../API/configuration";
import FilterPageStyles from "./FilterPageStyles.module.scss";
import CustomCard from "../../Components/CustomCard/CustomCard";

const FilterPage = (props) => {
  const [repo, setRepo] = useState([]);
  useEffect(() => {
    callAPi({
      search: "TheAlgorithms/Python",
      url: "GET /search/repositories",
    }).then((data) => {
      setRepo(data.data.items || []);
    });
  }, []);

  return (
    <div className={FilterPageStyles.container}>
      {repo?.map((data) => (
        <CustomCard data={data} key={data?.id} onClick={() => {}} />
      ))}
    </div>
  );
};

export default FilterPage;
