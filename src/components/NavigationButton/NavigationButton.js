import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { openNewTab } from './helpers';
import "./NavigationButton.css"

export const NavigationButton = ({
  variant = "text",
  color = "primary",
  to = "",
  content,
  toExternal = false
}) => {
    const navigate = useNavigate();
    return (
        <Button
          color={color}
          variant={variant}
          onClick={() => {
            toExternal ? 
            openNewTab(to)
            : navigate(to)
          }}
          className="nav-button"
        >
          {content}
        </Button>
    );
}