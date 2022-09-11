import React, { useEffect, useRef, useState } from "react";
import { callAPi } from "../../API/configuration";
import PropTypes from "prop-types";
import CustomSearchStyles from "./CustomSearchStyles.module.scss";
import Search from "../../Assets/img/search.png";
const CustomSearch = ({
  setFilteredRepo,
  setShowNotification,
  filteredRepo,
}) => {
  // This state to show drop down list for search to show suggestions for user to select from
  const [showList, setShowList] = useState(false);
  // This state to save all repo that comes from api after user add key words
  const [repo, setRepo] = useState([]);
  // This Ref fro timer to make debounce when user writing
  const timer = useRef(true);
  // These Ref to control the drop down list when to close
  const containerRef = useRef(null);
  const btnRef = useRef(null);

  // This function for calling APi
  const onSearchRepo = (value) => {
    clearTimeout(timer.current);
    if (value !== "")
      timer.current = setTimeout(() => {
        callAPi({
          search: value,
          url: "GET /search/repositories",
        }).then((data) => {
          setRepo(data.data.items || []);
        });
      }, 500);
  };

  // This useEffect to detect when the user click out side the drop down list to close it
  useEffect(() => {
    const closeDropDown = (e) => {
      if (
        e.path[0] !== btnRef.current &&
        !containerRef.current?.contains(e.target)
      ) {
        setShowList(false);
      }
    };
    document.body.addEventListener("click", closeDropDown);
    return () => document.body.removeEventListener("click", closeDropDown);
  }, []);

  return (
    <div className={CustomSearchStyles.container}>
      <div className={CustomSearchStyles.container_search}>
        <img src={Search} alt="Search" />
        <input
          ref={btnRef}
          onClick={(e) => {
            if (e.target.value !== "") setShowList(true);
          }}
          type="text"
          name="search"
          id="search"
          onChange={(e) => {
            // this function to show the drop down list and pass the user input to api function
            if (e.target.value !== "") {
              setShowList(true);
              onSearchRepo(e.target.value);
            } else {
              setShowList(false);
              setRepo([]);
            }
          }}
        />
      </div>

      {showList && (
        // Read the return data from api to fill the drop down list
        <div
          ref={containerRef}
          className={CustomSearchStyles.container_dropDownList}
        >
          {repo?.map((ele, index) => (
            <div
              key={ele.full_name}
              onClick={() => {
                // This function for check if there is duplication and show notification error or add it to filter state (user choices )
                if (filteredRepo.find((ele) => ele.id === repo[index].id))
                  setShowNotification(true);
                else {
                  setShowNotification(false);

                  setFilteredRepo((prev) => [...prev, repo[index]]);
                }
              }}
            >
              {ele.full_name}
            </div>
          ))}
          {(!repo.length && <div>No Results</div>) || null}
        </div>
      )}
    </div>
  );
};

CustomSearch.propTypes = {
  setShowNotification: PropTypes.func.isRequired,
  filteredRepo: PropTypes.array.isRequired,
};

export default CustomSearch;
