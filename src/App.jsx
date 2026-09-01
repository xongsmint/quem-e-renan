import { HashRouter, Routes, Route } from "react-router-dom"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<h1>/</h1>} />
      </Routes>
    </HashRouter>
  ) 
}
