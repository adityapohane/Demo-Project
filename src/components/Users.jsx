import {  Outlet, useNavigate,useSearchParams} from "react-router-dom"

const Users = () => {
    const [searchParams, setSearchParams] = useSearchParams();
    const showActiveUsers = searchParams.get('filter') === 'Active';    
    const navigate = useNavigate();

  return (
      <div> 
          <button onClick={()=>navigate('/users/1')}>User 1</button >
          <button onClick={()=>navigate('/users/2')}>User 2</button >
          <button onClick={()=>navigate('/users/3')}>User 3</button >
          <Outlet />

          <div>
              <button onClick={() => setSearchParams({ filter: "Active" })}>Active-Users</button>
              <button onClick={() => setSearchParams({})}>All Users-Users</button>
              {
                  showActiveUsers ? <h2>Showing Active Uses</h2>:<h2>Showing All users</h2>
              }
          </div>
    </div>
  )
}

export default Users