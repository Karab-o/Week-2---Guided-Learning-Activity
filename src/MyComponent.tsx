import React from 'react'
import './MyComponent.css'

const MyComponent: React.FC = () => {
  return (
    <div className="my-component">
      <h1 className="my-component__heading">Welcome to My First React App</h1>
      <p className="my-component__text">
        This component was built with React, TypeScript and Vite. It lives in its
        own file, is imported into App.tsx, and is styled entirely from a
        separate CSS file using className.
      </p>
    </div>
  )
}

export default MyComponent
