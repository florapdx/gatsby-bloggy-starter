import ReactDOM from 'react-dom/server'
import React from 'react'
import Typography from 'typography'
import { GoogleFont } from 'react-typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  googleFonts: [
    {
      name: 'Open Sans',
      styles: [
        '300',
        '300i',
        '400',
        '400i',
        '600',
        '600i',
        '700',
        '700i'
      ],
    },
    {
      name: 'Taviraj',
      styles: [
        '300',
        '300i',
        '600',
        '600i'
      ],
    },
  ],
  headerFontFamily: ['Open Sans', 'sans-serif'],//['Merriweather', 'sans-serif'],
  bodyFontFamily: ['Taviraj', 'serif'],
  baseFontSize: '20px',
  baseLineHeight: 1.65,
  scale: 2.25,
  plugins: [
    new CodePlugin(),
  ],
}

const typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
  if (typeof document !== 'undefined') {
    const googleFonts = ReactDOM.renderToStaticMarkup(
      React.createFactory(GoogleFont)({ typography })
    )
    const head = document.getElementsByTagName('head')[0]
    head.insertAdjacentHTML('beforeend', googleFonts)
  }
}

export default typography
