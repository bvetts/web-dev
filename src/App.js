
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/bootstrap/fontawesome/css/all.min.css';

import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";

import {BrowserRouter, Route , Routes } from "react-router-dom";
import HomeScreen from "./components/tuiter/home-screen";
import ExploreScreen from "./components/tuiter/explore-screen";
import ProfileScreen from "./components/tuiter/profile-screen";
import EditScreen from "./components/tuiter/edit-screen";
//import NotificationScreen from "./components/tuiter/notification-screen";//in assignment but doesnt exist??

//these are not displaying correctly. why not??
//index method doesnt work??


//<Route path="notifications"
                          //element={<NotificationScreen/>}/>

function App() {
 return (
   <BrowserRouter>
    <div className="container">
      <Routes>
               <Route path="/">
                 <Route index element={<Labs />} />
                 <Route path="labs"
                        element={<Labs/>}/>
                 <Route path="hello"
                        element={<HelloWorld/>}/>
                 <Route path="tuiter"
                        element={<Tuiter/>}>
                   <Route index
                          element={<HomeScreen/>}/>
                   <Route path="home"
                          element={<HomeScreen/>}/>
                   <Route path="explore"
                          element={<ExploreScreen/>}/>
                   <Route path="profile"
                          element={<ProfileScreen/>}/>
                   <Route path="edit"
                          element={<EditScreen/>}/>

                 </Route>
               </Route>
      </Routes>
    </div>
   </BrowserRouter>
 );
}



export default App;
