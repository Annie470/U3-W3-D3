import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import MainSearch from './components/MainSearch'
import CompanySearchResults from './components/CompanySearchResults'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navb from './components/Nav'
import Favourite from './components/Favourite'
import Foot from './components/Foot'
import { Container } from 'react-bootstrap'


function App() {
  return (
    <BrowserRouter>
    <Container fluid className="d-flex flex-column min-vh-100 p-0">
    <Navb/>
    <div className="flex-fill"> 
      <Routes>
        <Route path="/" element={<MainSearch />} />
        <Route path="/:company" element={<CompanySearchResults />} />
        <Route path="/favourites" element={<Favourite/>}/>
      </Routes>
      </div>
      <Foot/></Container>
    </BrowserRouter>
  )
}

export default App
