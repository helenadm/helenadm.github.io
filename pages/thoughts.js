import React from 'react'
import Thoughts from '../components/thoughts'
import DefaultPage from '../components/defaultPage'

const thoughts = () => (
  <div id="wrapper">
    <DefaultPage />
      <Thoughts />
      <footer id="footer">
        <p className="copyright">&copy; Domo</p>
      </footer>
    <style jsx>{`
    `}</style>
  </div>
)

export default (thoughts)
