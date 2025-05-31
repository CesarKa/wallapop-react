import { Routes, Route } from "react-router";
import AdvertisementPage from "./pages/advertisements/advertisements-page";
import { LogInPage } from "./pages/auth/login-page";
import { NewAdvertPage } from "./pages/advertisements/new-advert-page";



function App() {
  
  return (
  <Routes>
     <Route path="/logIn" element={<LogInPage/>}/>
     <Route path="/" element={<AdvertisementPage/>}/>
      <Route path="/new-advert-page" element={<NewAdvertPage/>}/>
  </Routes>
  
  )
}

export default App;
