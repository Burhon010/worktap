import { Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import Birja from './pages/Birja'
import CreateOrder from './pages/CreateOrder'
import Home from './pages/Home'
import Konkursy from './pages/Konkursy'

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/birja" element={<Birja />} />
        <Route path="/konkursy" element={<Konkursy />} />
        <Route path="/create-order" element={<CreateOrder />} />
      </Route>
    </Routes>
  )
}

export default App
