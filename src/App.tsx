import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
    <h1>test</h1>
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/about" element={<h1>About</h1>} />
    </Routes>
  </>)
}

export default App