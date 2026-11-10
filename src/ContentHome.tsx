import styled from "styled-components";
import ContentIconPanel from "./ContentIconPanel";
import YoutubeEmbed from "./YoutubeEmbed";
import FeatureItem from "./FeatureItem";
import ContentImages from "./assets/img";
import RouteNames from './routes';
import {Link} from 'react-router-dom';

// defines in the content in the Home page
function ContentHome(): JSX.Element 
{
    return (
        <>
        <HomeContentContainer>
            <OverviewSection/>
            <FeatureSection/>
            <DetailsSection/>
        </HomeContentContainer>
        </>
    );
}

// the section of the home page that the user will first see
// not necessary if video thumbnail has the game name: <GameTitle>PAPER VOLLEYBALL</GameTitle>
function OverviewSection(): JSX.Element { return <>
    <div>
        <TopSpacer />
        <YoutubeEmbed embedId="kU4L7DWgKIo" />
        <ContentIconPanel height="48px"/>
        <br/>
    </div>
</>;}

// the section of the home page that showcases the various features of the game, in case they did not watch the video
function FeatureSection(): JSX.Element { return <>
    <div>
        <SectionDivider><span>Features</span></SectionDivider>
        <FeatureItem imgsrc={ContentImages.imgAttack}caption="Set up the perfect attack!"/>
        <FeatureItem imgsrc={ContentImages.imgCustomization} caption="Customize and level up your character"/>
        <FeatureItem imgsrc={ContentImages.imgAiTech} caption="Play against smart AI"/>
        <FeatureItem imgsrc={ContentImages.imgAngle} caption="Ball angle and speed within your control"/>
    </div>
</>}

// the section of the home page that allows user to move to the About page if they want to learn even more
function DetailsSection(): JSX.Element {return <>
    <div>
        <p>Click <Link to={RouteNames.ABOUT}>here</Link> to learn more about the game!</p>
        <br/>
    </div>
</>}

//const GameTitle = styled.h1 `
//  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);  /* Drop shadow */
//  letter-spacing: 6px;  /* Increase character spacing */
//`
// some formatting for this container
const TopSpacer = styled.div`
  height: 1.5rem;
`

const SectionDivider = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin: 2rem auto 1rem;
  width: 90%;
  max-width: 860px;

  &::before, &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: rgba(255, 255, 255, 0.25);
  }

  span {
    font-size: 0.85em;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    opacity: 0.5;
    white-space: nowrap;
  }
`

const HomeContentContainer = styled.div`
  width: 95%;
  margin: 0 auto;
`

export default ContentHome;
