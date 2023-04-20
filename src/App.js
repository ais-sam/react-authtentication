
import { Routes, Route } from "react-router-dom"
import './App.css';
import Register from "./pages/Register"
import Login from "./pages/Login"
import Dashboard from "./pages/Dashboard"
import Client from "./pages/Client"
import Admin from "./pages/Admin"
import TermsAndConditions from "./pages/TermsAndConditions";
import Home from "./pages/Home";
import RequireAuth from "./components/RequireAuth";
import NotFound from "./pages/NotFound";
import UnAuthorized from "./pages/UnAuthorized";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/register" element={ <Register/> } />
        <Route path="/login" element={<Login/> } />
        <Route path="/unauthorized" element={<UnAuthorized/> } />
        
        <Route path="/client" >
          <Route index element={<RequireAuth role='client'><Dashboard/></RequireAuth>}/>
          <Route path="profile" element={<RequireAuth role="client"><Client/></RequireAuth>}/>
        </Route>

        <Route path="/admin"  >
          <Route index element={<RequireAuth role="admin"><Dashboard/></RequireAuth>}/>
          <Route path="list" element={<RequireAuth role="admin"><Admin/></RequireAuth>}/>
        </Route>

        <Route path="/terms-and-conditions" element={ <TermsAndConditions/> } />
        <Route path="/*" element={ <NotFound/> } />
      </Routes>
    </div>
  );
}

export default App;
