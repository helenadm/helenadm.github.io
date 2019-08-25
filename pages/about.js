import React from 'react'
import About from '../components/about'
import DefaultPage from '../components/default-page'

const contact = () => (
  <div id="wrapper">
    <DefaultPage />
    <About />
    <footer id="footer">
      <p className="copyright">&copy; Domo</p>
    </footer>
  </div>
)

export default (contact)
