import { useNavigate } from "react-router-dom"
const First_compo = () => {

  const navigate = useNavigate();
    return (
      <>
            <h1>First_compo</h1>
        <button onClick={() => navigate('order-sum', { replace: true })}>Place Order</button>
        <button onClick={()=>navigate('/products')}>go to products page</button>
            </>
  )
}

export default First_compo