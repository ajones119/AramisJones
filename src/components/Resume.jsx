import React from "react";

import { NavBar } from './NavBar';
import { ResumeWrapper, MainContent, HeaderWrapper, Dates, Header, SubHeader, ResumeEntryWrapper, Description, SectionTitle, ClassEntryWrapper, ClassHeader} from './ResumeStyledComponents';
import { Container } from "@material-ui/core";



const ResumeEntry = ( {header = '',
                    subHeader = '',
                    dates = '',
                    description = ''}) =>(
    <ResumeEntryWrapper>
        <HeaderWrapper>
            <Header>{header}</Header>
                    <Dates>{dates}</Dates>
        </HeaderWrapper>
        <SubHeader>{subHeader}</SubHeader>
        <Description>{description}</Description>
    </ResumeEntryWrapper>
);
const ClassEntry = ( {header = '',
                    subHeader = '',
                    dates = '',
                    description = ''}) =>(
    <ClassEntryWrapper>
        <HeaderWrapper>
            <ClassHeader>{header}</ClassHeader>
                    
        </HeaderWrapper>
        <SubHeader>{subHeader}</SubHeader>
        
    </ClassEntryWrapper>
);



const resumeEntryBuilder = (entries) => (
    entries.map(entry =>
        <ResumeEntry
        header={entry.header}
        subHeader={entry.subHeader}
        dates={entry.dates}
        description={entry.description} />
        )
)

const classEntryBuilder = (entries) => (
    entries.map(entry =>
        <ClassEntry
        header={entry.header}
        subHeader={entry.subHeader}
        dates={entry.dates}
        description={entry.description} />
        )
)

export const Resume = () => (
    <ResumeWrapper>
        <NavBar />
        <MainContent>
            <SectionTitle>Education</SectionTitle>
            <ResumeEntry header = 'University of Central Oklahoma'
                         subHeader = 'Software Engineering'
                         dates = '2017 - now'
                         description = 'I am currently studying Software Engineering at UCO and will graduate with a Software Engineering degree, a Physics Minor and a Math Minor in the spring of 2021.'   
            />
            <ResumeEntry header = 'Oklahoma State University - OKC'
                         subHeader = 'Engineering'
                         dates = '2016 - 2017'
                         description = 'I spent a year finishing my associates degree at OSU-OKC'   
            />
             <ResumeEntry header = 'Northern Oklahoma College'
                         subHeader = 'Engineering'
                         dates = '2015 - 2016'
                         description = 'I spent my first year of college studying Engineering and playing soccer at NOC'   
            />  
            <ResumeEntry header = 'Canadian Valley Vo-Tech'
                         subHeader = 'Intro to Engineering'
                         dates = '2013 - 2015'
                         description = 'While in High School, I also graduated from the into to Engineering Program at CVTC'   
            />        
             <ResumeEntry header = 'Yukon High School'
                         subHeader = ''
                         dates = '2013 - 2015'
                         description = 'I graduated from High School at YHS in Yukon, OK'   
            /> 
            <SectionTitle>Relevent Courses I've Taken</SectionTitle>
            <ClassEntry header = 'Programming I & II'
                         subHeader = '@ UCO'
                         dates = ''
                         description = ''   
            /> 
            <ClassEntry header = 'Calculus I, II, III, & IV'
                         subHeader = '@ UCO, OSU-OKC, & NOC'
                         dates = ''
                         description = ''   
            /> 
            <ClassEntry header = 'Linear Algebra'
                         subHeader = '@ UCO'
                         dates = ''
                         description = ''   
            /> 
             <ClassEntry header = 'Modern Physics'
                         subHeader = '@ UCO'
                         dates = ''
                         description = ''   
            />            
            <ClassEntry header = 'Discrete Structures and Algorithms'
                         subHeader = '@ UCO'
                         dates = ''
                         description = ''   
            /> 
            <ClassEntry header = 'Object Oriented Software'
                         subHeader = '@ UCO'
                         dates = ''
                         description = ''   
            /> 
            <ClassEntry header = 'Computer Organization'
                         subHeader = '@ UCO'
                         dates = ''
                         description = ''   
            />  
             <ClassEntry header = 'Programming Languages'
                         subHeader = '@ UCO'
                         dates = ''
                         description = ''   
            /> 
            <ClassEntry header = 'Enterprise Programming'
                         subHeader = '@ UCO'
                         dates = ''
                         description = ''   
            />                                   
             <ClassEntry header = 'Software Engineering I'
                         subHeader = '@ UCO'
                         dates = ''
                         description = ''   
            /> 
             <ClassEntry header = 'Software Architecture'
                         subHeader = '@ UCO'
                         dates = ''
                         description = ''   
            />     

            <SectionTitle>Skills and Experience</SectionTitle>
            <ClassEntry header = 'Angular 8 & REACT'
                         subHeader = ''
                         dates = ''
                         description = ''   
            />  
                          <ClassEntry header = 'Programming in C++, TypeScript, HTML, Java, C#, and JSX'
                         subHeader = ''
                         dates = ''
                         description = ''   
            />   
                         <ClassEntry header = 'UML Diagrams'
                         subHeader = ''
                         dates = ''
                         description = ''   
            />   
                         <ClassEntry header = 'Microsoft Azure and Git'
                         subHeader = ''
                         dates = ''
                         description = ''   
            /> 
                     <ClassEntry header = 'Front & Back End Web Development'
                         subHeader = ''
                         dates = ''
                         description = ''   
            /> 
                     <ClassEntry header = 'Working with RESTful APIs'
                         subHeader = ''
                         dates = ''
                         description = ''   
            />              
                      <ClassEntry header = 'Object Oriented Programming'
                         subHeader = ''
                         dates = ''
                         description = ''   
            />              
                      <ClassEntry header = 'Microsoft Office'
                         subHeader = ''
                         dates = ''
                         description = ''   
            />              

            <SectionTitle>Work History</SectionTitle> 
            <ResumeEntry header = 'Whiskey Cake'
                         subHeader = 'Server'
                         dates = 'Feb. 2020 - Now'
                         description = ''   
            />  
            <ResumeEntry header = 'Bjs Resturaunt and Brewhouse'
                         subHeader = 'Host, Busser, & Server'
                         dates = 'May 2016 - Aug. 2016 & June 2018 - Feb 2020'
                         description = ''   
            /> 
              <ResumeEntry header = 'First Choice Appraisals'
                         subHeader = 'Assistant'
                         dates = 'Aug. 2016 - June 2018'
                         description = 'Here I organized a schedule, researched homes, input data into WINTotal, and Took pictures for Residential Appraisals'   
            />                                        

        </MainContent>
    </ResumeWrapper>
);