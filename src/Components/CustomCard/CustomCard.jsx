import React from "react";
import PropTypes from "prop-types";
import CustomButton from "../CustomButton/CustomButton";
import git from "../../Assets/img/git.png";
import Star from "../../Assets/img/Star.png";
import Fork from "../../Assets/img/fork.png";
import Issue from "../../Assets/img/issue.png";
import Calender from "../../Assets/img/calendar.png";
import Plus from "../../Assets/img/plus.png";
import Language from "../../Assets/img/language.png";
import license from "../../Assets/img/seal.png";
import CustomCardStyles from "./CustomCardStyles.module.scss";
import moment from "moment";

// This is the custom card component
const CustomCard = ({ data, onDeleteElement, index }) => {
  return (
    <div className={CustomCardStyles.container}>
      <div className={CustomCardStyles.container_upperWhite}>
        <img
          className={CustomCardStyles.container_upperWhite_image}
          src={git}
          alt="git"
        />
      </div>
      <img
        className={CustomCardStyles.container_avatar}
        src={data?.owner?.avatar_url}
        alt="avatar"
      />
      {/* Start Icon */}
      <div className={CustomCardStyles.scrollbar}>
        <div className={CustomCardStyles.scrollbar_name}>
          <a target="_blank" rel="noreferrer" href={data?.html_url}>
            {data?.full_name}
          </a>
        </div>
        <div className={CustomCardStyles.container_info}>
          <div className={CustomCardStyles.container_info_image}>
            <img src={Star} alt="Star" />
            <span>Stars</span>
          </div>
          <span>{data?.stargazers_count || "-"}</span>
        </div>
        {/* Start Icon */}
        {/* Fork Icon */}
        <div className={CustomCardStyles.container_info}>
          <div className={CustomCardStyles.container_info_image}>
            <img src={Fork} alt="Fork" />
            <span>Forks</span>
          </div>
          <span>{data?.forks_count || "-"}</span>
        </div>
        {/* Fork Icon */}
        {/* Issue Icon */}
        <div className={CustomCardStyles.container_info}>
          <div className={CustomCardStyles.container_info_image}>
            <img src={Issue} alt="Issue" />
            <span>Open Issues</span>
          </div>
          <span>{data?.open_issues_count || "-"}</span>
        </div>
        {/* Issue Icon */}
        {/* Creation date Icon */}
        <div className={CustomCardStyles.container_info}>
          <div className={CustomCardStyles.container_info_image}>
            <img src={Calender} alt="Calender" />
            <span>Creation Date</span>
          </div>
          <span>{moment(data?.created_at).format("DD-MM-YYYY") || "-"}</span>
        </div>
        {/* Creation date Icon */}
        {/* Last Update it Icon */}
        <div className={CustomCardStyles.container_info}>
          <div className={CustomCardStyles.container_info_image}>
            <img src={Plus} alt="Plus" />
            <span>Last Update Date</span>
          </div>
          <span>{moment(data?.updated_at).format("DD-MM-YYYY") || "-"}</span>
        </div>
        {/* Last Update it Icon */}
        {/* Last Update it Icon */}
        <div className={CustomCardStyles.container_info}>
          <div className={CustomCardStyles.container_info_image}>
            <img src={Calender} alt="Calender" />
            <span>Age</span>
          </div>
          {/* Using moment to change format and get diff  */}
          <span>{moment().diff(moment(data?.updated_at), "years")} years</span>
        </div>
        {/* Last Update it Icon */}
        {/* language Icon */}
        <div className={CustomCardStyles.container_info}>
          <div className={CustomCardStyles.container_info_image}>
            <img src={Language} alt="language" />
            <span>Language</span>
          </div>
          <span>{data?.language || "-"}</span>
        </div>
        {/* language Icon */}
        {/* license Icon */}
        <div className={CustomCardStyles.container_info}>
          <div className={CustomCardStyles.container_info_image}>
            <img src={license} alt="license" />
            <span>license</span>
          </div>
          <span>{data?.license?.name || "-"}</span>
        </div>
        {/* license Icon */}
      </div>
      <CustomButton name="Remove Repo" onClick={() => onDeleteElement(index)} />
    </div>
  );
};

CustomCard.propTypes = {
  data: PropTypes.object.isRequired,
  onDeleteElement: PropTypes.func.isRequired,
  index: PropTypes.number.isRequired,
};

export default CustomCard;
