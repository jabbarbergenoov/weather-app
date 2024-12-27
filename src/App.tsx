import { useState } from 'react'

import './App.css'
import SearchSection from './search/search'
import NavigatorSection from './navigator/navigator'

function App() {
  const [search, setSearch] = useState<string>('')

  return (
    <>
       <NavigatorSection />
    </>
  )
}

export default App
