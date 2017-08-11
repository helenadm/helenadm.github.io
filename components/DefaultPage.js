/* global window */
import React from 'react'
import Head from 'next/head'

const DefaultPage = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="/static/css/base.css" rel="stylesheet" />
      <script type="text/javascript" src="https://cdn.plot.ly/plotly-latest.min.js" />
      <link href="/static/css/font-awesome-light.css" rel="stylesheet" />
      <link href="/static/css/font-awesome-brands.css" rel="stylesheet" />
      <link href="/static/css/font-awesome-core.css" rel="stylesheet" />
    </Head>
      <link href="/static/css/github-syntax.css" rel="stylesheet" />
  </div>
)

export default (DefaultPage)
