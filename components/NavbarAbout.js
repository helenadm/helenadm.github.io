
export default (props) => (
  <div>
    <header>
      <div className="wrapper">
        <nav>
          <a className="brand" href="./index">
          HELENA DOMO
          </a>
        </nav>
        <div className="navbarR">
          <div className="underline">
            <a className="ccc" href="../about">
             About
            </a>
          </div>
          <div className="line">
            <a href="../contact">
            Contact
            </a>
          </div>
          <div>
            <a href="../figure">
            Figure out
            </a>
          </div>
        </div>
     </div>
    </header>
    <style jsx>{`

    header {
       min-height: 3.3em;
       margin-top: 1em;
       position: relative;
       font-family: "Lucida Sans Typewriter","Lucida Console",Monaco,"Bitstream Vera Sans Mono",monospace;
     }

     .wrapper {
       max-width: 60em;
       margin-right: auto;
       margin-left: auto;
     }

     .brand {
       margin-left:1.2em;
       font-size: 1.9em;
       line-height: 3em;
       letter-spacing: -0.07em;
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

     a, a:visited {
       color: #424242;
       text-decoration: none;
     }

     a:hover {
       color: #ccc;
     }

     a.ccc{
       color: #ccc;
     }

     .underline{
       color: #ccc;
       border-bottom: 1px solid currentColor;
       height: 25px;
       width: 3em;
       margin-bottom: 10px;
     }
     .line{
        margin-bottom: 10px;
     }
    `}</style>
  </div>
)
