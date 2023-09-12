import { useNavigate } from "react-router-dom"
const OrderSummary = () => {
    const navigate = useNavigate()

    return (
        <>
                <button onClick={()=>navigate(-1)}>Back</button>
    <h1>OrderSummary</h1>
        </>


  )
}

export default OrderSummary