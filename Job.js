import React, { useEffect, useState } from "react";
import "./jobs.css";

function Job(props){
  const {
    company,
    contract,
    featured,
    id,
    languages,
    level,
    location,
    logo,

    position,
    postedAt,
    role,
    tools,
  } = props.jobInfo;

   // console.log(props.jobInfo);
  var keywords = [role, level, ...languages, ...tools];

  const [icon, setIcon] = useState("");

  const importSvgs = () => {
    const logoSvg = import(logo+'').then((d) => {
      setIcon(d.default);
    });
  };

  useEffect(() => {
    importSvgs();
  }, [logo]);

  return (
    <div
      className={
        featured ? "job-container job-container--borderLeft" : "job-container"
      }
    >
      <div className="logo">
        <img src={icon} alt="" />
      </div>
      <div className="part1">
        <div className="company">
          <span className="cname">{company}</span>
          {props.jobInfo.new && <span className="new">new!</span>}
          {props.jobInfo.featured && <span className="featured">featured</span>}
        </div>

        <div className="position">{position}</div>

        <div className="details">
          <span>{postedAt}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{contract}</span>
          <span>&nbsp;•&nbsp;</span>
          <span>{location}</span>
        </div>
      </div>

      <div className="part2">
        {keywords.map((key, id) => (
          <span onClick={() => !props.selectedKeywords.includes(key) && props.setSelectedKeywords([...props.selectedKeywords,key])} key={id}>
            {key}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Job;