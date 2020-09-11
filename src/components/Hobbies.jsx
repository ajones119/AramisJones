import React from "react";

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import { NavBar } from './NavBar';
import {Avatar, TitlePicture, SubPicture, HobbyEntryWrapper, HobbyWrapper, Description, subPicture, SubHeader, Header, HeaderWrapper, MainContent, SectionTitle} from './HobbiesStyledComponent'

const HobbyEntry = ( {titlePicture ='',
                        header = '',
                        description = '',
                        subPicture = '',
                        url = ''}) =>(
    <HobbyEntryWrapper>
        <SectionTitle>{header}</SectionTitle>
        <TitlePicture picture = {titlePicture} />

                <Description>
                    {description}
                </Description>
                <a href={url}>{url}</a>
                <SubPicture picture = {subPicture} />


    </HobbyEntryWrapper>
                            
);





const hobbyEntryBuilder = (entries) => (
    entries.map(entry =>
        <HobbyEntry
        header={entry.header}
        titlePicture={entry.titlePicture}
        subPicture={entry.subPicture}
        url={entry.url}
        description={entry.description} />
        )
)

export const Hobbies2 = () => (
    <HobbyWrapper>
        <NavBar />
        <MainContent>
        <HobbyEntry header = 'Starfighter'
                          titlePicture = './images/Band3.JPG'
                          subPicture = './images/Band2.JPG'
                          description = 'Starfighter is a 3 piece rock band. In it, I play bass and sing. We have played at several local bars and venues including The Blue Note, The Drunken Fry, and The Deli.'
                          url = 'https://starfighter.bandcamp.com/releases'
            />
        </MainContent>
    </HobbyWrapper>
);