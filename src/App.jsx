import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { Projects } from './pages/Projects';
import { InformationPage } from './pages/InformationPage';
import { NavBarDesktop } from './components/NavBarDesktop';
import { Header } from './containers/Header';
import { NavBarMovile } from './components/NavBarMovile';
import { Main } from './containers/Main';
import './styles/App.css';
import './styles/font-awesome-4.7.0/css/font-awesome.min.css';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [navMovil, setNavMovil] = React.useState(false);
  const toggleNav = ()=>{
    setNavMovil(!navMovil);
    console.log(navMovil);
  }

  return (
    <>
      <BrowserRouter>
        <Header>
          <NavBarDesktop toggleNav={ toggleNav }/>
          {navMovil && <NavBarMovile toggleNav={ toggleNav } />}
        </Header>
        <Main>
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/projects' element={ <Projects />} />
            <Route path='/information' element={ <InformationPage /> } />
          </Routes>
        </Main>
      </BrowserRouter>
    </>
  )
}

export { App };
