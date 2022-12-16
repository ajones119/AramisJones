import React from 'react';
import { WorkAndExperienceList } from '../../components/WorkAndExperienceList/WorkAndExperienceList';
import { EDUCATION_HISTORY, PAYCOM_WORK_HISTORY, SKILLS, WORK_HISTORY } from '../../components/WorkAndExperienceList/WorkAndExperienceConsts';

export const WorkAndEducation = () => {
    return (
      <>
        <WorkAndExperienceList
          title="Paycom - May 2021 - Today as a Software Engineer"
          listEntries={PAYCOM_WORK_HISTORY}
        />
        <WorkAndExperienceList
          title="Other Professional Experience"
          listEntries={WORK_HISTORY}
        />
        <WorkAndExperienceList title="Skills" listEntries={SKILLS} />
        <WorkAndExperienceList
          title="Education"
          listEntries={EDUCATION_HISTORY}
        />
      </>
    );
}
