import React from 'react'
import Contact from '../components/contact'
import DefaultPage from '../components/default-page'

const contact = () => (
  <div id="wrapper">
    <DefaultPage />
    <Contact />
    <footer id="footer">
      <p className="copyright">&copy; Domo</p>
    </footer>
  </div>
)

export default (contact)
