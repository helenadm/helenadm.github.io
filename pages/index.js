import React from 'react'
import Home from '../components/home'
import DefaultPage from '../components/default-page'

const Index = () => (
  <div id="wrapper">
    <DefaultPage />
      <Home />
      <footer id="footer">
        <p className="copyright">&copy; Domo</p>
      </footer>
    <style jsx>{`
    `}</style>
  </div>
)

export default (Index)
