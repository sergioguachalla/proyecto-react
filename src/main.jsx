import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App'
import './main.css'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Page404 from './components/404'
import Cuadricula from './components/Cuadricula'

ReactDOM.createRoot(document.getElementById('root')).render(
   <>
   
   <BrowserRouter>
      <Routes>
         <Route path="/" element={<App/>}>
            <Route index element={<Cuadricula/>}/>
         </Route>
         <Route path="*" element={<Page404/>}></Route>
      </Routes>
   </BrowserRouter>
   </>
   
)
