import styled from 'styled-components'
import { NavLink } from "react-router-dom";
import RouteNames from "./routes"; 

// An implementation for making active links appear highilghted
// * loosely adapted from: https://codesandbox.io/p/sandbox/react-rourt-dom-navlink-q8ci8?file=%2Fsrc%2Fnavbar.css%3A5%2C1
function ContentNavBar() : JSX.Element
{
  return (<>
    <nav>
      <NavUnorderedList>
        <NavBarItem><StatefulStyledNavLink to={RouteNames.HOME}>Home</StatefulStyledNavLink></NavBarItem>
        <NavBarItem><StatefulStyledNavLink to={RouteNames.ABOUT}>About</StatefulStyledNavLink></NavBarItem>
      </NavUnorderedList>
    </nav>
  </>);
}

// wrap ul tag with some formatting
const NavUnorderedList = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;
  height: 24px;
`

// wrap li tag with some formatting
const NavBarItem = styled.li`
    display: inline;
    margin-left: 12px;
    margin-right: 12px;
    height: 24px;
    line-height: 24px;
`

// apply some custom styling to the buttons on this component
const StatefulStyledNavLink = styled(NavLink)`
  color: white;
  &.active {
    color: lightgray;
  }
`;

export default ContentNavBar;