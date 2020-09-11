import Styled from '@emotion/styled';

export const ProjectsWrapper = Styled.div`
    background-image: url('./images/background2.jpg');
    background-size: cover;
    height: 100%;
    overflow: hidden;
`;

export const MainContent = Styled.div`
    color: white;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
        flex-direction: column;
    min-height: 100vh;
    max-width: 60%;
    margin-left: 20%;
    -ms-flex-pack: center;
        justify-content: center;
    text-align: center;
`;

export const HeaderWrapper = Styled.div`
    display: flex;
    justify-content: space-between;
`

export const Dates = Styled.div`
    line-height: 40px;
    font-weight: 600;
`

export const Header = Styled.div`
    font-size: 2.20em;
    font-weight: 720;    
`;

export const SubHeader = Styled.div`
    font-size: 1.20em;
    font-style: italic;
    padding-bottom: 10px
`;

export const ProjectsEntryWrapper = Styled.div`
    padding: 20px;
    text-align: left;
`;
export const ClassEntryWrapper = Styled.div`
    padding: 5px;
    text-align: right;
`;

export const Description = Styled.div`
    padding: 10px;
    
`;

export const SectionTitle = Styled.div`
    font-size: 3.00em;
    font-weight: 720;  
    text-align: center;
`
export const TitlePicture = Styled.img`
    margin-left: auto;
    margin-right: auto; 
    background-image: url(${props => props.picture});
    width: 700px;
    height: 450px;
    background-size: cover;
    background-position: top center;
    display: block;
`;

export const SubPicture = Styled.img`
    margin-left: 20px;
    margin-right: auto; 
    background-image: url(${props => props.picture});
    width: 350px;
    height: 300px;
    background-size: cover;
    background-position: top left;
`;

