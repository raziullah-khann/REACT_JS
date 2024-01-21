# Laying the Foundation

# How to set script to start dev server
-> in package.json -> in script ->
"start": "parcel index.html"
"build": "parcel build index.html"

now -> npm start OR npm run start

# But in case of prod use only this command
->npm run build

# This both are return object
->React.createElement('h1', {}, 'This is heading') <=> const head = <h1>This is heading</h1>

# REACT ELEMENT
->React.createElement() => object => after render it becomes Html element in browser

# JSX
->Create element with the help of JSX. = > it is not html, it is html like syntax.
->JSX => React.createElement() => object => HTMLElement(render)

# Component
->Components come in two types, Class components and Function components,

