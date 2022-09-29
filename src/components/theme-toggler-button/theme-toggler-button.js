import React, { useContext } from "react"
import { ThemeContext } from "../contexts/theme-context"
import { Button } from '../button/button'
import themes from '../contexts/default-theme'

export const ThemeTogglerButton = () => {
  const { theme, setTheme } = useContext(ThemeContext)

  return(
    <div>
      <Button onClick={() => setTheme(theme === themes.light ? themes.dark : themes.light)}>mudar tema</Button>
    </div>
  )
}

/*https://www.linkedin.com/in/larissasazevedo/

https://www.linkedin.com/in/anderson-rodrigo-oliveira/ */

