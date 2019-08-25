import React from 'react'

export default (props) => (
  <article id="about" className="panel secondary">
		<div className="image">
			<img src="static/images/cayon.jpg" alt="" data-position="center center" />
		</div>
		<div className="content">
			<ul className="actions spinX">
				<li><a href="/" className="button small back">Back</a></li>
			</ul>
			<div className="inner">
				<header>
					<h2>Thoughts</h2>
          <br />
          <br />
					{/* <p>Magna feugiat lorem ipsum dolor<br />
					veroeros sed adipiscing</p> */}
				</header>
				<p>"Life as if you were to die tomorrow.Learn as if you were to live  forever".</p>
        <p>Mahatma Gandhi .</p>
        <br />
        <br />
        <br />
			</div>
		</div>
	</article>
)
