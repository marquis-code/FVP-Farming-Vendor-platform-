import 'tailwindcss/tailwind.css'
import "../styles/globals.css"
// import { ContextProvider } from "../ontext/helpers";
import StoreContextProvider from "../context/StoreContext"
import AuthenticationContext from "../context/Auth-context"


function App({ Component, pageProps }) {
  return (
    <StoreContextProvider>
    <AuthenticationContext>
      <Component {...pageProps} />
    </AuthenticationContext>
    </StoreContextProvider>
  )
}

export default App
