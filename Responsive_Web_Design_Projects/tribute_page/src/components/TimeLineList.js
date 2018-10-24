import React from "react";

function TimeLineList(props) {
  const data = props.data;
  const renderlist = data.map(timeline => {
    return <li className="timeline-container--timelinelist-li">{timeline}</li>;
  });
  return <ul className="timeline-container--timelinelist">{renderlist}</ul>;
}

export default TimeLineList;
