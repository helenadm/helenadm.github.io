import theme from './theme'
import index from './Navbar'

export default (props) => (
  <div>
    <div className="page-content">
      <div>
        <index />
        <div>
         <img className="back" src="../static/images/yo.jpg" />
        </div>
      </div>
    </div>
    <style jsx>{`
      .back {
        border: 3px solid #eaecee;
        max-width: 30%;
        background-color: #fff;
        margin-left: 10rem
      }

    `}</style>
  </div>
)
