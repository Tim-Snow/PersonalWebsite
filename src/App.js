import React from 'react'

import Profile from './components/Profile'
import AboutMe from './components/AboutMe'
import Activity from './components/Activity'
import Contact from './components/Contact'
import Portfolio from './components/Portfolio'

function App() {
  return (
    <div style={styles.container}>
      <Profile />
      <div style={styles.bottomSection}>
        <AboutMe />
        <Activity />
      </div>
      <Portfolio />
      <Contact />
    </div>
  )
}

const styles = {
  container: {
    backgroundColor: '#335',
  },
  bottomSection: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
  },
}

export default App