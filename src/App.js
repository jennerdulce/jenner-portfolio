import React, { Component } from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SkillStack from './components/SkillStack/SkillStack'
import Projects from './components/Projects/Projects'
import Background from './components/Background/Background'
import Recommendations from './components/Recommendations/Recommendations'
import Footer from './components/Footer/Footer'
import ContactMe from './components/ContactMe/ContactMe'
import './App.css'

class App extends Component {
  render()  {
    return(
      <>
        <Background />
        <Navbar />
        <Hero />
        <AboutMe />
        <SkillStack />
        <Projects />
        <Recommendations />
        <ContactMe />
        <Footer />
      </>
    )
  }
}

export default App;
