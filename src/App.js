import React, { Component } from 'react'
import AboutMe from './components/AboutMe/AboutMe'
import Navbar from './components/Navbar/Navbar'
import Hero from './components/Hero/Hero'
import SkillStack from './components/SkillStack/SkillStack'
import Projects from './components/Projects/Projects'
import Background from './components/Background/Background'
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
      </>
    )
  }
}

export default App;
