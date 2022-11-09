import React, { PureComponent } from 'react'
import About from './features/frontend/about/About'
import ImageGallary from './features/frontend/image-gallery/ImageGallery'
import './App.css'

const app = () => {
  //const ProtectedRoute = ({ children }) => {
  //  return sessionStorage.getItem('login') == 1 ? (
  //    children
  //  ) : (
  //    <Navigate to="/login" />
  //  )
  //}

  return (
    <>
      {/*<Routes>*/}
      {/*<Route path="/*" element={<BlankLayout />}></Route>*/}
      {/*<Route*/}
      {/*//path="secured/*"*/}
      {/*//element={<ProtectedRoute><FullLayout /></ProtectedRoute>}*/}
      {/*//></Route>*/}
      {/*</Routes>*/}

      {/*<About />*/}
      <ImageGallary />
    </>
  )
}
export default app
