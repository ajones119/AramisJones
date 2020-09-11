import React from "react";

import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';

import { NavBar } from './NavBar';
import { HomeWrapper, MainContent, Greeting, Hobbies, SocialLinks, Avatar} from './HomeStyledComponents';

const SocialLink = (props) => (
    <a target="_blank" rel="noopener noreferer" href={props.url}>
        {props.children}
    </a>
)

const hobbies = [
    'React',
    'Masters of Dungeons',
    'Plays Grungy Bass',
    'Professional Server',
    'Sub-Par Gamer',
    'Married With Cats (and a Dog)'
]



const hobbyStringBuilder = (length = 3) => {
    const hobbyString = hobbies
        .map(hobby =>({hobby, randPos: Math.random()}))
        .sort((a, b) => a.randPos - b.randPos)
        .map(hobbyObject => hobbyObject.hobby)
        .slice(0, length)
        .join('|');

    return hobbyString.toString();
};



export const Home = () => (
    <HomeWrapper>
        <NavBar />
        <MainContent>
            <Avatar picture='./images/Aramis_and_alaska1.jpg'></Avatar>
            <Greeting>Hello There, Im Aramis</Greeting>
            <Hobbies>{hobbyStringBuilder()}</Hobbies>
            <SocialLinks>
                <SocialLink url='https://www.instagram.com/aramisjones13/?hl=en'>
                    <InstagramIcon style={{fontSize: 40}}></InstagramIcon>
                </SocialLink>
                <SocialLink url='https://twitter.com/aramisjones13'>
                    <TwitterIcon style={{fontSize: 40}}></TwitterIcon>
                </SocialLink>
            </SocialLinks>
        </MainContent>
    </HomeWrapper>
);