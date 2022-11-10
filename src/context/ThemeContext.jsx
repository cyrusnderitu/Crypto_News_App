import React, {createContext} from 'react'

const TheContext = createContext()

function ThemeContext() {
    const display = {
        isLightTheme: true,
        light: {syntax: '', ui: '', bg: {}},
        dark: {syntax: '', ui: '', bg: ''}
    }
  return (
    <div>
      <TheContext.Provider value={display}>
        {this.props.children}
      </TheContext.Provider>
    </div>
  )
}

export default ThemeContext
