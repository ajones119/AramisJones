import React from 'react';
import { WorkAndExperienceList } from '../../components/WorkAndExperienceList/WorkAndExperienceList';
import { EDUCATION_HISTORY, PAYCOM_WORK_HISTORY, SKILLS, WORK_HISTORY } from '../../components/WorkAndExperienceList/WorkAndExperienceConsts';
import SchoolIcon from '@mui/icons-material/School';
import DvrIcon from "@mui/icons-material/Dvr";
import CoffeeIcon from "@mui/icons-material/Coffee";
import EngineeringIcon from "@mui/icons-material/Engineering";
import { Button, Typography } from '@mui/material';
import "../../components/NavigationButton/NavigationButton.css"
import RESUME_PDF from "../../images/_Aramis_Jones_Resume_final.pdf";

export const WorkAndEducation = () => {
    return (
      <>
        <WorkAndExperienceList
          title="Paycom - May 2021 - Today as a Software Engineer"
          listEntries={PAYCOM_WORK_HISTORY}
          icon={<EngineeringIcon color="secondary" fontSize="large" />}
        />
        <WorkAndExperienceList
          title="Other Professional Experience"
          listEntries={WORK_HISTORY}
          icon={<CoffeeIcon color="secondary" fontSize="large" />}
        />
        <WorkAndExperienceList
          title="Skills"
          listEntries={SKILLS}
          icon={<DvrIcon color="secondary" fontSize="large" />}
        />
        <WorkAndExperienceList
          title="Education"
          listEntries={EDUCATION_HISTORY}
          icon={<SchoolIcon color="secondary" fontSize="large" />}
        />
        <div style={{ paddingLeft: "25px", paddingTop: "25px" }}>
          <Button className="nav-button" variant="text">
            <Typography variant="h4">
              <a
                download={"Aramis_Jones_Resume_2022.pdf"}
                href={RESUME_PDF}
                target="_blank"
                rel="noreferrer"
              >
                Download Resume as PDF
              </a>
            </Typography>
          </Button>
        </div>
      </>
    );
}
