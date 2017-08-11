import theme from './theme'
import index from './Navbar'

export default (props) => (
  <div>
    <div className="page-content">
      <div className="">
        <index />
        <div>
         <img className="back" src="../static/images/yo.jpg" />
        </div>
      </div>
    </div>
    <style jsx>{`

      .back {
        border: 3px solid #eaecee;
        max-width: 50%;
        background-color: #fff;
        margin-right: -90em;
      }

    `}</style>
  </div>
)
