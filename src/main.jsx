
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Productprovider from './Context/Productprovider.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react'

createRoot(document.getElementById('root')).render(

  <Auth0Provider domain="dev-xl6pio7otcaz75y6.us.auth0.com" clientId="XKMFsx3GXvbQrr3oP04ndSCflANIEaLT" authorizationParams={{
      redirect_uri: window.location.origin }}>
    <BrowserRouter>
      <Productprovider>
        <App />
      </Productprovider>
    </BrowserRouter>
  </Auth0Provider>,
)
