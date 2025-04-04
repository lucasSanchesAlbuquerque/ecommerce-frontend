import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import ProductDetails from './routes/ClientHome/ProductDetails'
import ClientHome from './routes/ClientHome'
import Catalog from './routes/ClientHome/Catalog'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<ClientHome/>}>
          <Route index element={<Catalog/>}></Route>
          <Route path='catalog' element={<Catalog/>}></Route>
          <Route path='product-details/:producId' element={<ProductDetails/>}></Route>
        </Route>
        <Route path='*' element={<Navigate to="/"/>}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
