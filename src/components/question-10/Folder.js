import React, { useState } from "react";
import Icon from "./Icon";
import "./styles.css";

const Folder = ({ files }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };
  return (
    <div>
      {files.isFolder && (
        <div
          onClick={() => {
            handleExpand();
          }}>
          <Icon
            name={isExpanded ? "caretDown" : "caretRight"}
            className="icon-container"
          />

          {files.name}
        </div>
      )}
      {!files.children && !files.isFolder && (
        <div>
          <Icon name={files.name.split(".")[1]} className="icon-container" />

          {files.name}
        </div>
      )}
      {isExpanded && files.children && (
        <div>
          {files.children.map((e, index) => {
            return <Folder files={e} key={index} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Folder;
