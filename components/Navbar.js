
export default (props) => (
  <div>
    <header>
      <div className="wrapper">
        <nav>
          <a className="brand" href="./index">
          HELENA DOMO
          </a>
        </nav>
        <div className="navbarL">
        </div>
        <div className="navbarR">
          <a href="../me">
          A little of all
          <i className="fa fa-sign-out" aria-hidden="true" />
          </a>
        </div>
     </div>
    </header>
    <style jsx>{`
      header {
        min-height: 56px;
        margin-top: 15px;
        position: relative;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .wrapper {
        max-width: 980px;
        margin-right: auto;
        margin-left: auto;
      }

      .brand {
        margin-left:1.2em;
        font-size: 26px;
        line-height: 56px;
        letter-spacing: -1px;
        margin-bottom: 0;
        float: left;
        text-decoration: none;
      }

      .navbarR {
        float: right;
        margin-top: 1.2em;
        margin-right: 2em;
        font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
      }

      .navbarL {
        float: left;
        margin-top: 1.2em;
        margin-left: 1.2em;
      }
      a, a:visited {
        color: #424242;
      }

      a:hover {
        font-size: 1.2em;
      }

      i {
        font-size:0.6;
        margin-right: 1em;
      }
    `}</style>
  </div>
)