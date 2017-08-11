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
        <i className="fab fa-twitter" aria-hidden="true" />
        <i className="fab fa-github" aria-hidden="true" />
        <i className="fal fa-at" aria-hidden="true" />
      </div>
    </div>
    <style jsx>{`

      .page-content {
        padding: 3em 0;
      }

      .wrapper {
        max-width: 50em;
        margin-right: auto;
        margin-left: auto;
      }

      img:hover {
         opacity: 0.7;
      }

      .paper1 {
        max-width: 50em;
        border: 3px solid #eaecee;
        background-color: #fff;
        min-height: 25em;
        margin-right: auto;
        margin-left: auto;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .paper {
        border: 2px solid #ccc;
        background-color: #D6EAF8;
        padding: 4.5em 5.5em;
        min-height: 400px;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .icons{
          margin-top: 100px;
          text-align: center;
      }

      i{
        margin-left: 50px;
      }

      @media screen and (max-width: ${theme['phone']}) {

        .wrapper {
          max-width: 100%;
        }

        .paper {
          padding: 1em;
        }
      }
    `}</style>
  </div>
)
