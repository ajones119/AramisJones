import { ThemeProvider } from "@mui/material";
import React from "react";
import { Route, Routes } from "react-router-dom";
import { TopTheme } from "./theme";
import { AboutMe } from "./views/AboutMe/AboutMe";
import { Home } from "./views/Home/Home";
import { PageContainer } from "./views/PageContainer";
import { PastProjects } from "./views/PastProjects/PastProjects";
import { WorkAndEducation } from "./views/WorkAndEducation/WorkAndEducation";

export const Routing = () => {
  return (
    <div
      style={{
        backgroundColor: "#212121",
        minHeight: "100vh",
      }}
    >
      <ThemeProvider theme={TopTheme}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AramisJones" element={<Home />} />
          <Route
            path="/Aramisjones/AboutMe"
            element={<PageContainer contents={<AboutMe />} />}
          />
          <Route
            path="/Aramisjones/WorkAndEducation"
            element={<PageContainer contents={<WorkAndEducation />} />}
          />
          <Route
            path="/Aramisjones/PastProjects"
            element={<PageContainer contents={<PastProjects />} />}
          />

          <Route path="/*" element={<Home />} />
        </Routes>
      </ThemeProvider>
    </div>
  );
};

