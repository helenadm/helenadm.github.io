import theme from './theme'
import index from './Navbar'
import Boda from './Boda'

export default (props) => (
  <div>
    <div className="page-content">
      <div>
        <index />
        <div className="wrapper">
          <div className="wrapper1">
            <div className="photopaper">
              <img className="photo" src="../static/playa.jpg" />
            </div>
          </div>
        </div>
        <div className="space" />
        <div className="wrapper1">
          <div className="photopaper">
             <img className="photo" src="../static/cayon.jpg" />
          </div>
        </div>
          <div className="space" />
        <div className="wrapper1">
          <div className="photopaper">
             <img className="photo" src="../static/LA.jpg" />
          </div>
        </div>
        <div className="wrapper1">
          <div className="space" />
          <div className="photopaperplano">
             <img className="plano" src="../static/plano.jpg" />
          </div>
      </div>
      </div>
    </div>
    <style jsx>{`
      .page-content {
        padding: 3em 9em;
      }

      .wrapper {
        max-width: 250em;
        margin-right: auto;
        margin-left: 4em;
      }
      .wrapper1 {
        max-width: 25em;
        margin-right: auto;
        margin-left: 4em;
      }

      .words{
        float: right;
        margin-top: 1.2em;
        margin-right: 2em;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;

      }

      .photo {
        max-width: 25em;
        margin-right: auto;
        margin-left: 4em;
        max-width: 25em;
        border: 3px solid #eaecee;
        background-color: #fff;
        min-height: 2em;
        margin-right: auto;
        margin-left: auto;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      img:hover {
         opacity: 0.7;
      }

      .plano {
        max-width: 70em;
        border: 3px solid #eaecee;
        background-color: #fff;
        min-height: 15em;
        margin-right: auto;
        margin-left: auto;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .photopaperplano {
        width: 60em;
        border: 2px solid #ccc;
        background-color: #D6EAF8;
        padding: 1em 2em;
        min-height: 18em;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .span4 {
        float: right;
        text-align: center;
        margin-top: 7em;
        margin-right: 6em;
        margin-left: 40em;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .photopaper {
        border: 2px solid #ccc;
        background-color: #D6EAF8;
        padding: 1em 2em;
        min-height: 9em;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .space {
        max-width: 25em;
        background-color: #fff;
        min-height: 6em;
        margin-right: auto;
        margin-left: auto;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }


      @media screen and (max-width: ${theme['phone']}) {
        .wrapper {
          max-width: 100%;
        }

    `}</style>
  </div>
)
