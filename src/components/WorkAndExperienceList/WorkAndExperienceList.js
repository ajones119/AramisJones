import { Typography } from '@mui/material';
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";
import React from 'react';

export const WorkAndExperienceList = ({ title, listEntries, icon }) => {
    return (
      <div style={{ marginLeft: "50px" }}>
        <Typography variant="h2" color="secondary">
          {title}
        </Typography>
          {
            listEntries.map(entry => 
                    <Typography color="primary" variant="body1" style={{ marginLeft: "25px" }}><Brightness1OutlinedIcon sx={{ fontSize: 10 }} />  {entry}</Typography>
            )
          }
      </div>
    );
};