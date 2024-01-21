# Prcel
-Dev Build
- local Server
- HMR (Hot module reload)
- Catching Fat build
- Image Optmization
- Minification.
- Bundling
- Compress
- Code Splitting
- Support Older Browser
- Error Hanling
- Diagnostic
- Tree Shaking -> Remove unused code
-- Https

# We use parcel for bundling
--install parcel -> npm i -D parcel
--install react -> npm i react
--install react-dom -> npm i react-dom

# How to run parcel in browser. How to start server
-> npx parcel index.html

# How to create prod build?
->in package.json remove "main":"app.js"
->npx parcel build index.html

# lets make our app compairitable for the older version of browser.
->In package.json add 
"browserslist": [
    "last 2 Chrome version",
    "last 2 Firefox version"
]
