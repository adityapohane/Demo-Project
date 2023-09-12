import { useParams } from "react-router-dom";

const DetailUsers = () => {
    const {userId} = useParams();
  return (
    <h1>DetailUsers of { userId}</h1>
  )
}

export default DetailUsers