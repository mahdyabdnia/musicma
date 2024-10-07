import React from 'react'
import { BrowserRouter  ,Routes,Route,Navigate} from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import First from './Components/First/First'
import SingPage from './Components/SingPage/SingPage'
import Artist from './Components/Artist/Artist'
import withLoader from './Components/WithLoaders'
import SearchPage from './Components/SearchPage/SearchPage'
import Archive from './Components/Archive/Archive'

 

import './index.css'
import Sing from './Components/Sing/Sing'
import ScrollToTop from './Scroll'
const firstWithLoader=withLoader(First)

const singWithLoader=withLoader(SingPage)

const artisttWithLoader=withLoader(Artist)

 
 export default function App() {
 
  return (
       
   <BrowserRouter>
   <ScrollToTop/>
     <Routes>
        <Route element={<Layout/>} path='/'>
        <Route index element={<First/>}/>
        <Route path='/sing/:name/:singname' element={<Sing />}/>
        <Route path='/artist/:name' element={<Artist/>}/>
        <Route path='/search/:text' element={<SearchPage/>}/>
        <Route path='/archive/:name' element={<Archive/>}/>

        
        
        
        
        </Route>
   

     </Routes>
   
   
   </BrowserRouter>
  )
}

 
 
