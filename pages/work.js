import React from 'react'
import Work from '../components/work'
import DefaultPage from '../components/default-page'

const about = () => (
  <div id="wrapper">
    <DefaultPage />
    <Work />
    <footer id="footer">
      <p className="copyright">&copy; Domo</p>
    </footer>
  </div>
)

export default (about)
