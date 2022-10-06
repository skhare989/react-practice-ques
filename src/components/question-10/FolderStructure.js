import React from "react";
import { files } from "./data";
import Folder from "./Folder";

const FolderStructure = () => {
  return (
    <div>
      <Folder files={files} />
    </div>
  );
};

export default FolderStructure;
