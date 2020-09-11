import React from "react";

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { NavBar } from './NavBar';
import { HomeWrapper, Greeting, Hobbies, SocialLinks, Avatar} from './HomeStyledComponents';
import { ResumeWrapper, MainContent, HeaderWrapper, Dates, Header, SubHeader, ResumeEntryWrapper, Description, SectionTitle, ClassEntryWrapper, ClassHeader} from './ResumeStyledComponents';

const SocialLink = (props) => (
    <a target="_blank" rel="noopener noreferer" href={props.url}>
        {props.children}
    </a>
)

const ContactEntry = ({header = '',
                        description = ''
                        }) => (

    <ResumeEntryWrapper>
        <HeaderWrapper><Header>{header}</Header></HeaderWrapper>
        <Description>{description}</Description>
    </ResumeEntryWrapper>
);

const contactEntryBuilder = (entries) =>(
    entries.map(
        <ContactEntry
        header = {entries.header}
        description = {entries.description}
        ></ContactEntry>
    )
)

export const Contact = () => (
    <HomeWrapper>
        <NavBar />
        <MainContent>
            <ContactEntry header = 'Personal Email'
                          description = 'agj1113@gmail.com'></ContactEntry>
            <ContactEntry header = 'School Email'
                          description = 'ajones119@uco.edu'/>
            <ContactEntry header = 'Phone'
                        description = '(405)532-2291'/>
            <ContactEntry header = 'References'
                          description = 'References available upon request.'/>
        </MainContent>
    </HomeWrapper>
);