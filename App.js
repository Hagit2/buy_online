import logo from './logo.svg';
import './App.css';
import Shop from './components/lesson4/Shop'
import SingleVec from './components/lesson4/SingleVeg';
import Gym from './components/lesson5/Gym'
import Home from './components/lesson6/Home'
import CourseLists from './components/lesson6/CoursLists';
import DetailsCourse from './components/lesson6/DetailsCourse';
import Text from './components/lesson7/Text'
import TimerWrapper from './components/lesson7/TimerWrapper'
import TimerWrapperFun from './components/lesson7/TimerWrapper'
import Gallery from './components/lesson8/Galeery'
import ListSong from './components/lesson9/ListSong';
import SelectSong from './components/lesson9/Selectsong';
import Users from './components/project/Users';
import ListToDo from './components/project/ListToDo';
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import NavBar from './components/project/NavBar'
import Form from './components/lesson10/Form'
import StodentList from './components/lesson11/StudentList'
import Quotes from './components/lesson12/features/quotes/Quotes'
import AddProduct from './components/buy-online/features/addProduct/AddProduct'
import Order from './components/buy-online/features/order/Order';
import Cart from './components/buy-online/features/cart/Cart';
import * as React from 'react';
import Login from './components/buy-online/features/login/Login'
import SignUp from './components/buy-online/features/signUp/SignUp'
import Manager from './components/buy-online/features/navbar/manager'
import AllProducts from './components/buy-online/features/allProducts/AllProduct';
import User from './components/buy-online/features/navbar/user';
import AddOrder from './components/buy-online/features/addOrder/AddOrder'

function App() {
  // let name="cat"
  return (
    <div className="App">
      {/* <BrowserRouter> */}
      {/*<ListClass></ListClass>*/}
      {/*<ListFunc></ListFunc>*/}
      {/* <Shop></Shop> */}
      {/* <SingleVec></SingleVec> */}
      {/* <Gym></Gym> */}
      {/* <BrowserRouter>
    <NavBar></NavBar>
    <Routes>
      <Route path="home" element={<Home></Home>}></Route>
      <Route path="login" element={<Login></Login>}></Route>
      <Route path="courslists/:name" element={<CourseLists></CourseLists>}>
        <Route path="detailsCourse/:id" element={<DetailsCourse></DetailsCourse>}></Route>
      </Route>
    </Routes>
    </BrowserRouter> */}
      {/* <TimerWrapperFun></TimerWrapperFun> */}
      {/* <Gallery></Gallery> */}
      {/* <ListSong></ListSong>
    <SelectSong></SelectSong> */}
      {/* <Users></Users> */}
      {/* <ListToDo></ListToDo> */}
      {/* <Login></Login>
      <Routes>
        <Route path="listToDo" element={<ListToDo></ListToDo>}></Route>
      </Routes>
      </BrowserRouter> */}
      {/* <Form></Form> */}
      {/* <BrowserRouter>
     
      <Login></Login>
      </BrowserRouter> */}
      {/* <StodentList></StodentList> */}
      {/* <Quotes></Quotes> */}
      {/* <AllProducts></AllProducts> */}
      <BrowserRouter>
        <Routes>
          <Route >
            <Route path="" element={<Login />} />
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/manager" element={<Manager />} />
            <Route path="/user" element={<User />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/add-order" element={<AddOrder />} />
          </Route>
        </Routes>
      </BrowserRouter>
      {/* <Order></Order> */}
    </div>
  );
}

export default App;
