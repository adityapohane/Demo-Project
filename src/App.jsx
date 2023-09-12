import { Routes , Route } from "react-router-dom"
import First_compo from "./components/First_compo"
import Second_compo from "./components/Second_compo"
import Third_compo from "./components/Third_compo"
import NavBar from "./components/NavBar"
import OrderSummary from "./components/OrderSummary"
import NoMatchCompo from "./components/NoMatchCompo"
import Products from "./components/Products"
import FeaturedProduct from "./components/FeaturedProduct"
import NewProduct from "./components/NewProduct"
import Users from "./components/Users"
import DetailUsers from "./components/DetailUsers"
import AdminPage from "./components/AdminPage"
const App = () => {
  return (
    <>
      <NavBar />
    <Routes>
      <Route path="/" element={<First_compo />}></Route>
      <Route path="/sec" element={<Second_compo />}></Route>
      <Route path="/th" element={<Third_compo />}></Route>
        <Route path="/order-sum" element={<OrderSummary />}></Route>
        <Route path="/products" element={<Products />}>
           <Route index element={<FeaturedProduct />}></Route>
          <Route path="featured" element={<FeaturedProduct />}></Route>
          <Route path="new" element={<NewProduct />}></Route>
        </Route>
        <Route path="/users" element={<Users />}>
        <Route path=":userId" element={<DetailUsers />}></Route>
          <Route path="admin" element={<AdminPage />}></Route>
          </Route>

        <Route path="*" element={<NoMatchCompo />}></Route>
    </Routes>
      </>
  )
}

export default App