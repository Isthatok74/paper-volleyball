import styled, { createGlobalStyle } from 'styled-components';
import { HashRouter as Router, Route, Routes, Navigate} from 'react-router-dom';

import RouteNames from './routes';

import ContentNavBar from './ContentNavBar';
import ContentFooter from './ContentFooter';

import ContentHome from './ContentHome';
import ContentAbout from './ContentAbout';

function App() : JSX.Element {

  return (
    <Router> 
    <RootContainer>
      
      {/*Apply some global styling*/}
      <GlobalStyles />

      {/*Define the header across the whole app*/}
      <AppHeader>
        <ContentNavBar/>
      </AppHeader>

      {/*The main content of the app is defined here*/}
      <AppMain>
        <Routes>
            <Route path={RouteNames.ABOUT} element={<ContentAbout/>} />
            <Route path={RouteNames.HOME} element={<ContentHome/>} />
            <Route path="*" element={<Navigate to={RouteNames.HOME}/>} /> 
        </Routes>
      </AppMain>

      {/*Define the footer across the whole app*/}
      <AppFooter>
        <ContentFooter/>
      </AppFooter>

    </RootContainer>
    </Router>
  );
}

// Root container styles
const RootContainer = styled.div`
  margin: 0 auto;
  text-align: center;
  min-height: 100vh;
`;

// Global styles to reset default margins
const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
  }
`;

// styling for the header bar
const AppHeader = styled.header`
  background-color: #333;
  padding: 1rem;
`

// styling for the footer bar
const AppFooter = styled.footer`
  background-color: #333;
  color: white;
  padding: 1rem;
`

// styling applied to the main content
const AppMain = styled.main`
  background-color: #282c34;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(8px + 2vmin);
  color: white;
  text-align: center;
`

export default App;