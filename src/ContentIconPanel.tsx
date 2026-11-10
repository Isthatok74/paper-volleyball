import styled from 'styled-components'
import Icons from "./assets/icons/index.ts";
import ImageLink from "./ImageLink.tsx";

// define input for the icon links panel
interface iconLinksProps {
  height: string;
}

// returns the panel as a component
function ContentIconPanel(props: iconLinksProps): JSX.Element
{
    return ( 
      <PanelContainer>
        <BetaCta
          href="https://go.freegiftstudio.ca/papervolleyball/discord/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Join the beta on Discord"
        >
          <BetaIcon src={Icons.iconDiscord} alt="" />
          <BetaCopy>
            <BetaHeading>Join the Beta!</BetaHeading>
            <BetaDescription>Help test the game, share feedback, and play before release.</BetaDescription>
          </BetaCopy>
          <BetaButton>Sign up on Discord <span aria-hidden="true">→</span></BetaButton>
        </BetaCta>

        <CtaGrid>
          <WishlistGroup>
            <CtaHeading>Wishlist it now!</CtaHeading>
            <CtaDescription>Choose your platform</CtaDescription>
            <IconList>
              <IconListItem><ImageLink height={props.height} hover="Wishlist it on Steam!" image={Icons.iconSteam} link="https://store.steampowered.com/app/5292050/Paper_Volleyball/"/></IconListItem>
              <IconListItem><ImageLink height={props.height} hover="Google Play — coming soon!" image={Icons.iconPlay} link=""/></IconListItem>
              <IconListItem><ImageLink height={props.height} hover="Apple App Store — coming soon!" image={Icons.iconApple} link=""/></IconListItem>
            </IconList>
          </WishlistGroup>

          <CtaGroup>
            <CtaHeading>Follow me on socials!</CtaHeading>
            <CtaDescription>Updates, clips &amp; dev support</CtaDescription>
            <IconList>
              <IconListItem><ImageLink height={props.height} hover="Subscribe on YouTube" image={Icons.iconYoutube} link="https://www.youtube.com/@PaperVolleyball"/></IconListItem>
              <IconListItem><ImageLink height={props.height} hover="Follow me on Instagram!" image={Icons.iconInstagram} link="https://www.instagram.com/papervolleyball/"/></IconListItem>
              <IconListItem><ImageLink height={props.height} hover="Buy me a coffee!" image={Icons.iconCoffee} link="https://buymeacoffee.com/freegiftstudio"/></IconListItem>
            </IconList>
          </CtaGroup>

          <CtaGroup>
            <CtaHeading>Business inquiries</CtaHeading>
            <CtaDescription>Get in touch by email</CtaDescription>
            <IconList>
              <IconListItem><ImageLink height={props.height} hover="Email me for business inquiries" image={Icons.iconEmail} link="mailto:papervolleyballdev@gmail.com"/></IconListItem>
            </IconList>
          </CtaGroup>
        </CtaGrid>
      </PanelContainer>
    );
}

const PanelContainer = styled.div`
    width: min(90%, 860px, calc(100vw - 28px));
    box-sizing: border-box;
    margin: 1.25rem auto 0;
`

const BetaCta = styled.a`
    box-sizing: border-box;
    display: grid;
    grid-template-columns: auto 1fr auto;
    align-items: center;
    gap: 20px;
    width: 100%;
    padding: 22px 24px;
    color: white;
    text-align: left;
    border: 2px solid #8d96ff;
    border-radius: 16px;
    background: linear-gradient(135deg, rgba(88, 101, 242, 0.42), rgba(88, 101, 242, 0.14));
    box-shadow: 0 0 24px rgba(88, 101, 242, 0.18);
    transition: transform 0.2s ease, border-color 0.2s ease, box-shadow 0.2s ease;

    &:hover {
        color: white;
        transform: translateY(-2px);
        border-color: #b4baff;
        box-shadow: 0 8px 30px rgba(88, 101, 242, 0.32);
    }

    &:focus-visible {
        outline: 3px solid white;
        outline-offset: 4px;
    }

    @media (max-width: 700px) {
        grid-template-columns: auto 1fr;
        gap: 14px;
        padding: 20px;
    }
`

const BetaIcon = styled.img`
    width: 64px;
    height: 64px;
    object-fit: contain;
    filter: invert(100%) sepia(100%) saturate(0%) hue-rotate(57deg) brightness(107%) contrast(101%);

    @media (max-width: 700px) {
        width: 52px;
        height: 52px;
    }
`

const BetaCopy = styled.div`
    min-width: 0;
`

const BetaHeading = styled.h2`
    margin: 0;
    font-size: 1.35em;
`

const BetaDescription = styled.p`
    margin: 6px 0 0;
    font-size: 0.78em;
    opacity: 0.88;
`

const BetaButton = styled.span`
    padding: 11px 16px;
    white-space: nowrap;
    font-size: 0.76em;
    font-weight: bold;
    color: #202331;
    border-radius: 10px;
    background: white;

    @media (max-width: 700px) {
        grid-column: 1 / -1;
        text-align: center;
    }
`

const CtaGrid = styled.div`
    box-sizing: border-box;
    margin-top: 16px;
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 16px;

    @media (max-width: 700px) {
        grid-template-columns: 1fr;
    }
`

const CtaGroup = styled.section`
    min-width: 0;
    box-sizing: border-box;
    padding: 20px 16px 12px;
    border: 2px solid rgba(255, 255, 255, 0.14);
    border-radius: 14px;
    background: rgba(255, 255, 255, 0.045);
`

const WishlistGroup = styled(CtaGroup)`
    border-color: rgba(141, 150, 255, 0.58);
    background: linear-gradient(145deg, rgba(88, 101, 242, 0.16), rgba(255, 255, 255, 0.055));
    box-shadow: inset 0 0 24px rgba(88, 101, 242, 0.08), 0 4px 18px rgba(0, 0, 0, 0.12);
`

const CtaHeading = styled.h2`
    margin: 0;
    font-size: 1.15em;
`

const CtaDescription = styled.p`
    margin: 6px 0 4px;
    font-size: 0.72em;
    opacity: 0.75;
`

const IconList = styled.ul`
    list-style: none;
    padding: 4px;
    margin: 4px 0 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    flex-wrap: wrap;
`

// format the individual icons in this panel
const IconListItem = styled.li`
    list-style: none;
    padding: 10px;
    margin: 4px;
    transition: transform 0.2s ease, filter 0.2s ease;
    
    &:hover {
        transform: scale(1.05);
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.3));
    }
`

export default ContentIconPanel;
