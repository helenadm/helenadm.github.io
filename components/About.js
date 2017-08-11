import theme from './theme'
import index from './NavbarAbout'
import DefaultPage from './DefaultPage'

export default (props) => (
  <div className="page-content">
    <DefaultPage />
    <div className="wrapper">
      <index />
      <div className="mainbox">
        <div className="text-block">
          <div className="package">
            <a><i className="fal fa-paper-plane fa-3x" aria-hidden="true" /></a>
            <p/>
            <div className="name">I</div>
            <hr />
            <ul>
              <li>
                <img className="imgpackage" src="../static/images/cayon.jpg" />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-block">
          <div className="package">
            <a><i className="fal fa-map-signs fa-3x" aria-hidden="true" /></a>
            <p/>
            <div className="name">Love</div>
            <hr />
            <ul>
              <li>
                <img className="imgpackage" src="../static/images/hermano.jpg" />
              </li>
            </ul>
          </div>
        </div>
        <div className="text-block">
          <div className="package">
            <a><i className="fal fa-neuter fa-3x" aria-hidden="true" /></a>
            <p/>
            <div className="name">Trips</div>
            <hr />
            <ul>
              <li>
                <img className="imgpackage" src="../static/images/totem.jpg" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <style jsx>{`

    .mainbox {
      margin-top: 100px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: 1040px;
    }

    .package {
      font-size: 14px;
      box-sizing: border-box;
      width: 250px;
      height: 320px;
      border-radius: 3px;
      float: left;
      padding: 24px;
      text-align: center;
      margin-right: 20px;
      margin-bottom: 100px;
      border: 2px solid #eaecee;
      background-color: #fff;
    }

    .package:hover{
      color:#ccc
    }

    .imgpackage{
      width: 100%;
      height: auto;
    }

    .name {
      color: #565656;
      font-size: 1.5rem;
      margin-top: -5px;
      height: 50px;
    }

    ul {
      list-style: none;
      padding: 0;
      text-align: left;
    }

    li.black{
      color:#565656
    }

    li::before {
      content: "\f00c";
      font-size: 1.3rem;
      margin-right: 3px;
    }

    @media screen and (max-width: ${theme.phone}) {

    .pricing-wrapper {
      margin-top: 20px;
      display: block;
      margin-left: auto;
      margin-right: auto;
      width: auto;
      height: auto;
    }

    .package{
      float: none;
      margin: 0;
      margin-bottom: 20px;
      width: 95%;
      margin-left: auto;
      margin-right: auto;
    }
    
    p {
      font-size: 1.9em;
      line-height: 3em;
      letter-spacing: -0.07em;
      margin-bottom: 0;
      float: left;
      text-decoration: none;
    }
  }
      `}</style>
  </div>
)
