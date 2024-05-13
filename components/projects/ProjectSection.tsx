import React from "react";

import SectionTitleProject from "./SectionTitleProject";
import SectionListProject from "./SectionListProject";

const ProjectSection = () => {
  return (
    <div className="pt-2 lg:pt-2 min-h-screen">
      <SectionTitleProject />
      <SectionListProject />
    </div>
  );
};

export default ProjectSection;
