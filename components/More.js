import theme from './theme'
import index from './Navbar'

export default (props) => (
  <div>
    <div className="page-content">
      <div className="wrapper">
        <index />
        <div className="wrapper1">
          <div className="paper">
             <img className="paper1" src="../static/playa.jpg" />
          </div>
          <div className="words">
            
          </div>
        </div>
        <div className="space" />
        <div className="wrapper">
          <div className="paper">
             <img className="paper1" src="../static/cayon.jpg" />
          </div>
        </div>
          <div className="space" />
        <div className="wrapper">
          <div className="paper">
             <img className="paper1" src="../static/LA.jpg" />
          </div>
        </div>
        <div className="wrapper">
          <div className="space" />
          <div className="paperplano">
             <img className="plano" src="../static/plano.jpg" />
          </div>
      </div>
      </div>
    </div>
    <style jsx>{`
      .page-content {
        padding: 30px 0;
      }

      .wrapper {
        max-width: 400px;
        margin-right: auto;
        margin-left: 4em;
      }

      .wrapper1 {
        max-width: 400px;
        margin-right: auto;
        margin-left: 4em;
      }

      .words{
        float: right;
        margin-top: 1.2em;
        margin-right: 2em;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;

      }

      .paper1 {
        max-width: 400px;
        margin-right: auto;
        margin-left: 4em;
        max-width: 400px;
        border: 3px solid #eaecee;
        background-color: #fff;
        min-height: 100px;
        margin-right: auto;
        margin-left: auto;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .plano {
        max-width: 1100px;
        border: 3px solid #eaecee;
        background-color: #fff;
        min-height: 200px;
        margin-right: auto;
        margin-left: auto;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .paperplano {
        width: 900px;
        border: 2px solid #ccc;
        background-color: #D6EAF8;
        padding: 10px 20px;
        min-height: 200px;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .paper {
        border: 2px solid #ccc;
        background-color: #D6EAF8;
        padding: 10px 20px;
        min-height: 100px;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .space {
        max-width: 400px;
        background-color: #fff;
        min-height: 100px;
        margin-right: auto;
        margin-left: auto;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
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
