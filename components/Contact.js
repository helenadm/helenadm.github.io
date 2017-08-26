import theme from './theme'
import index from './Navbar'
import DefaultPage from './DefaultPage'

export default (props) => (
  <div>
    <DefaultPage />
    <div className="page-content">
      <index />
      <img className="imgpackage" src="../static/images/plano.jpg" />
      <div className="icons">
        <a href="https://twitter.com/helenadm" target="_blank">
          <i className="fab fa-twitter" aria-hidden="true" />
        </a>
          <a href="https://github.com/helenadm" target="_blank">
            <i className="fab fa-github" aria-hidden="true" />
          </a>
        <a href="mailto:helenadm89@gmai1.com" target="_blank">
            <i className="fal fa-at" aria-hidden="true" />
        </a>
      </div>
    </div>
    <style jsx>{`

      .page-content {
        padding: 3em 0;
        max-width: 1400px;
      }

      .imgpackage{
          max-width: 95%;
          margin: 3rem;
      }

      img:hover {
         opacity: 0.7;
      }

      .icons{
          margin-top: 100px;
          text-align: center;
      }

      i{
        margin-left: 50px;
        color:black;
      }

      @media screen and (max-width: ${theme['phone']}) {

      }
    `}</style>
  </div>
)
