import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Birja from './pages/Birja'
import Home from './pages/Home'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/birja" element={<Birja />} />
      </Route>
    </Routes>
  )
}

export default App
