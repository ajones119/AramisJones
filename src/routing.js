import React from "react";
import { Route, Routes } from "react-router-dom";
import { ContactInfo } from "./views/ContactInfo/ContactInfo";
import { Home } from "./views/Home/Home";
import { PageContainer } from "./views/PageContainer";
import { PastProjects } from "./views/PastProjects/PastProjects";
import { WorkAndEducation } from "./views/WorkAndEducation/WorkAndEducation";

export const Routing = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/AramisJones" element={<Home />} />
      <Route
        path="/Aramisjones/WorkAndEducation"
        element={<PageContainer contents={<WorkAndEducation />} />}
      />
      <Route
        path="/Aramisjones/PastProjects"
        element={<PageContainer contents={<PastProjects />} />}
      />
      <Route
        path="/Aramisjones/ContactInfo"
        element={<PageContainer contents={<ContactInfo />} />}
      />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};

