import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export const NavigationButton = ({ variant="text", color="primary", to="", content }) => {
    const navigate = useNavigate();
    return (
      <Button color={color} variant={variant} onClick={() => navigate(to)}>
        {content}
      </Button>
    );
}