import { Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Layout from "./components/Layout"
import Admin from "./components/Admin"

function App() {

  return (
    <Routes>

      <Route path="/" element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="admin" element={<Admin />} />

      </Route>

    </Routes>
  )
}

export default App
