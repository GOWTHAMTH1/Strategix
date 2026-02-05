import {createBrowserRouter,createRoutesFromElements,Route,RouterProvider} from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import Home from './pages/Home'
import MetaAds from './pages/MetaAds'
import GoogleAds from './pages/GoogleAds'
import Contact from './pages/Contact'


const App = () => {
  const router=createBrowserRouter( createRoutesFromElements(
    <Route path='/' element={ <MainLayout/> } >
      <Route index element={ <Home/> } />
      <Route path='meta_ads' element={ <MetaAds/> } />
      <Route path='google_ads' element={<GoogleAds/> } />
      <Route path='contact' element={ <Contact/> } />
    </Route>
  ) )
  return (
    <RouterProvider router={router}>

    </RouterProvider>
  )
}

export default App