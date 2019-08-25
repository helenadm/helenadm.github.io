import React from 'react'

export default (props) => (
    <article id="home" className="panel special">
			<div className="image">
				<img src="static/images/hdm.png" alt="" data-position="top top" />
			</div>
			<div className="content">
				<div className="inner">
					<header>
						<h1>Bienvenidos!</h1>
						<p>Hey, this is Helena Domo,<br />
						learn more about me</p>
					</header>
					<nav id="nav">
						<ul className="actions vertical special spinY">
							<li><a href="/work" className="button">Work</a></li>
							<li><a href="/about" className="button">About</a></li>
              <li><a href="/thoughts" className="button">Thoughts</a></li>
							<li><a href="/contact" className="button">Contact</a></li>
						</ul>
					</nav>
					<ul className="icons">
						<li><a href="#" className="icon fa-twitter"><span className="label">Twitter</span></a></li>
						<li><a href="#" className="icon fa-facebook"><span className="label">Facebook</span></a></li>
						<li><a href="#" className="icon fa-github"><span className="label">GitHub</span></a></li>
						<li><a href="#" className="icon fa-envelope"><span className="label">Email</span></a></li>
					</ul>
				</div>
			</div>
    <style jsx>{`
      .panel img{
        background-position: top !important;
      }
    `}</style>
  </article>
)
