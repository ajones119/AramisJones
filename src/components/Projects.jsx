import React from "react";

import { NavBar } from './NavBar';
import { TitlePicture, SubPicture, ResumeWrapper, MainContent, HeaderWrapper, Dates, Header, SubHeader, ProjectsEntryWrapper, Description, SectionTitle, ClassEntryWrapper, ProjectsWrapper } from './ProjectsStyledComponents';
import { Container } from "@material-ui/core";





const ProjectEntry = ( {titlePicture ='',
                        header = '',
                        description = '',
                        subPicture = ''}) =>(
    <ProjectsEntryWrapper>
        <TitlePicture picture = {titlePicture} />
        <SectionTitle>{header}</SectionTitle>         
        <Description>
          {description}
        </Description>
         <SubPicture picture = {subPicture} />

        
    </ProjectsEntryWrapper>
                            
);





const projectEntryBuilder = (entries) => (
    entries.map(entry =>
        <ProjectEntry
        header={entry.header}
        titlePicture={entry.titlePicture}
        subPicture={entry.subPicture}
        description={entry.description} />
        )
)




export const Projects = () => (
    <ProjectsWrapper>
        <NavBar />
        <MainContent>
                         
            <ProjectEntry header = 'Lone Defender'
                          titlePicture = './images/LD1.png'
                          subPicture = './images/LD3.png'
                          description = 'Lone Defender is a game that uses Object Oriented Java Programming. In it, the player must chose from 3 characters, each with their own weapons, and fight off waves of enemies to protect their village. There are 5 different kind of enemies with varying speeds, health, attacks, and movement. The 3 heroes each have different speeds and weapons, with one having a bow, another having a staff that shoots fireballs to a location, and the last having a magic sword that leaces copies of itself behind to defend against attackers!'
                          
            />
             <ProjectEntry header = 'Voter Tool'
                          titlePicture = './images/Voter-tool5.png'
                          subPicture = './images/Voter-tool3.png'
                          description = 'This project utilizes Angular, Bootsrap, and the Google Civic API in order to show a user information about their representatives, upcoming elections, and polling locations for the user. It takes a users address, city, and state in order to search the api for the information needed. It then organizes it in a reader friendly manner.'
            />

            <ProjectEntry header = 'Website for a D&D Group'
                          titlePicture = './images/DnD1.png'
                          subPicture = './images/DnD3.png'
                          description = 'I made this site so that our Dungeons and Dragons group had a way to keep track of what had gone on in the prior weeks and to have a quick way to search basic information. It contains summaries for the past weeks, notes for the GM, lore for the world we are playing in, and it utilizes a DND5e API in order to allow the user to quickly lookup information.'
            />


            
        </MainContent>
    </ProjectsWrapper>
);