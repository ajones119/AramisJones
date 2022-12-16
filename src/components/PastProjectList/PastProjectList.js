import React from 'react';
import { PastProjectListEntry } from './PastProjectListEntry';
import { PAST_PROJECTS } from './PastProjectsConst';

export const PastProjectList = () => {
    return (
        <div>
            {
                PAST_PROJECTS.map((project) => (
                    <PastProjectListEntry pastProject={project} />
                ))
            }
        </div>
    );
}