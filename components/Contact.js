import React from 'react'

export default (props) => (
  <article id="contact" className="panel secondary">
    <div className="image">
      <img src="static/images/contact.jpg" alt="" data-position="bottom center" />
    </div>
    <div className="content">
      <ul className="actions spinX">
        <li><a href="/" className="button small back">Back</a></li>
      </ul>
      <div className="inner">
        <header>
          <h2>Contact</h2>
        </header>
        <form method="post" action="#">
          <div className="field half first">
            <label for="name">Name</label>
            <input type="text" name="name" id="name" />
          </div>
          <div className="field half">
            <label for="email">Email</label>
            <input type="text" name="email" id="email" />
          </div>
          <div className="field">
            <label for="message">Message</label>
            <textarea name="message" id="message" rows="5"></textarea>
          </div>
          <ul className="actions">
            <li><a href="" className="button submit">Send Message</a></li>
          </ul>
        </form>
      </div>
    </div>
  </article>
)
