import RecipesComponent from 'views/components/basic/recipes'
import './Home.scss'
import { memo } from 'react'

function Home() {
  return (
    <div className='web-home'>
      <h1>Recetas MSR</h1>
      <RecipesComponent />
    </div>
  )
}

export default memo(Home)