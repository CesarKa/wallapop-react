import { Routes, Route } from "react-router";
import AdvertisementPage from "./pages/advertisements/advertisements-page";
import { LogInPage } from "./pages/auth/login-page";



function App() {
  
  return (
  <Routes>
     <Route path="/logIn" element={<LogInPage/>}/>
     <Route path="/" element={<AdvertisementPage/>}/>
  </Routes>
  
  )
}

export default App;
