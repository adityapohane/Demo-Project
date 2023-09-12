import { Link , Outlet,useNavigate} from "react-router-dom"
const Products = () => {
  const navigate = useNavigate();
  return (
      <>
          <div>
              <h1>This is Product Page</h1>
        <input type="search" placeholder="search products" />
        <button onClick={()=>navigate(-1)}>back to recent</button>
          </div>
          <nav >
            <Link to='featured' style={{padding:"20px"}}>Featured Products</Link>
            <Link to='new' style={{padding:"20px"}}>New Products</Link>
          </nav>
          <Outlet />
      </>
  )
}

export default Products