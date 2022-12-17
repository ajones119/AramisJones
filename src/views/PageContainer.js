import React from 'react';
import { NavBar } from '../components/NavBar/NavBar';

export const PageContainer = ({ contents }) => {
    return (
      <div style={{ padding: "5px" }}>
        <NavBar />
        <div style={{ paddingTop: "75px" }}>{contents}</div>
      </div>
    );
}