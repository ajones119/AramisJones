import { Button, Typography } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import "./NavigationButton.css"

export const NavigationButton = ({ variant="text", color="primary", to="", content }) => {
    const navigate = useNavigate();
    return (
        <Button
          color={color}
          variant={variant}
          onClick={() => navigate(to)}
          className="nav-button"
        >
          {content}
        </Button>
    );
}