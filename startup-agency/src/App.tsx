import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import DesignAgency from "./pages/DesignAgency"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DesignAgency />} />
      </Routes>
    </Router>
  )
}

export default App
