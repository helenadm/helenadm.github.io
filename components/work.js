import React from 'react'

export default (props) => (
  <article id="work" className="panel secondary">
		<div className="image">
			<img src="static/images/sdesk.jpg" alt="" data-position="center center" />
		</div>
		<div className="content">
			<ul className="actions spinX">
				<li><a href="/" className="button small back">Back</a></li>
			</ul>
			<div className="inner">
				<header>
					<h2>Work</h2>
					<p>Co-founder and COO in Kyso<br />
					Techstars NYC'18</p>
				</header>
				<p>Kyso is One click platform jupyter notebook platform in the cloud. I have an awesome team around me, great enviroment to go and work everyday.</p>
				<p></p>
			</div>
		</div>
    <style jsx>{`
      .image{
       width: 100%;
       height: auto
      }
    `}</style>
	</article>
)
