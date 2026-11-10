import ContentTextSection from "./ContentTextSection"
import styled from "styled-components"

function ContentAbout(): JSX.Element 
{
    return (
        <ContentTextSection>
          <h2>What's the intent?</h2>
          <p>You can do everything the AI can do, but actually playing as well will take some practice...</p>
          <p>Elements of the game are subject to simulated physics. Timing, positioning, and angles truly matter.</p> 

          <h2>Who made this?</h2>
          <p>It's a passion project solely developed by a man who derives great joy from both volleyball and coding.</p>
          
          <h2>How was it done?</h2>
          <p>All visual aspects were designed and drawn by myself. The stick figure style gives a light, fun aesthetic.</p>
          <p>The AI uses particle swarm intelligence to heuristically choose its course of action.</p>

          <h2>What's left?</h2>
          <p>Getting some valuable feedback from playtesters on the pre-release version. Note that the available features in the final version may differ from what is currently presented.</p>

          <h2>Business Inquiries</h2>
          <BusinessInfo>
            <p>Free Gift Studio</p>
            <p>1001677562 ONTARIO INC</p>
            <p><a href="mailto:support@freegiftstudio.ca">support@freegiftstudio.ca</a></p>
          </BusinessInfo>
        </ContentTextSection>
    );
}
export default ContentAbout;

const BusinessInfo = styled.div`
  p {
    margin: 0.2rem 0;
  }
`
