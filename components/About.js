import React from 'react'

export default (props) => (
  <article id="about" className="panel secondary">
		<div className="image">
			<img src="static/images/ny.jpg" alt="" data-position="center center" />
		</div>
		<div className="content">
			<ul className="actions spinX">
				<li><a href="/" className="button small back">Back</a></li>
			</ul>
			<div className="inner">
				<header>
					<h2>About</h2>
					<p>Ronda. Granada. Firenze. Cork. Cambridge and New York City.<br />
          </p>
				</header>
				<p>Favorite books.
          <li>Tuareg</li>
          <li>Everybody Lies</li>
          <li>Sapiens: A Brief History of Humankind</li>
        </p>
        <p>Free time
          <li>Trekking and running </li>
          <li>Museums, local markets and cofee shops</li>
          <li>Salsa dance </li>
        </p>
			</div>
		</div>
	</article>
)
