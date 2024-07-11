# STEPS

## Install React with Typescript

### Template Code
npx create-react-app <project-name> --template typescript

### Code
npx create-react-app departments --template typescript

### Installation (Few Minutes)
Installing react, react-dom, and react-scripts with cra-template-typescript...

## Install Vite
### Code 
npm install --save-dev vite

## Install MUI
### Code
npm install @mui/material @emotion/react @emotion/styled @mui/x-data-grid  @mui/icons-material @types/node
### Installation (Few Seconds)

## Install react-router-dom
### Code
npm install react-router-dom
### Installation (Few Seconds)


--------------------------------------------------------------------------

# STEPS

## Open terminal
Create a new folder
Move to new project directory
Right Mouse Button: Open Context menu 
Left Mouse Button: Open in terminal

## Ready Made Template
git clone https://github.com/Hamid6426/react-tsx-vite-template

## Move files

Move all the files from the folder to react-tsx-vite-template folder

## Install Dependencies

npm install

## Run vite

npm run dev

## Start in vscode

code .

-------------------------------------------

# Cleaning

## Delete vite.svg
Delete vite.svg in ./public

## Delete react.svg
Delete react.svg in ./assets

## App.tsx
Just these

import './App.css' // If there are styles

function App() {

  return (
    <>
      <div>
        <p>Hello Vite</p>
      </div>
    </>
  )
}

export default App

## index.css and App.css

Only these global settings
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: Roboto;
}

---------------------------------------