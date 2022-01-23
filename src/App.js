import './App.css';
import { useSelector, useDispatch} from 'react-redux';
// import { increment, decrement } from './actions/counter';
import { getUsers, login } from "./actions/userAction";
import { useEffect } from "react";
import UserList from './components/userList';
import Login from './components/login'

function App() {
   const statee = useSelector(state => state.adminLogin)
   const content = useSelector(state => state);
   const dispatch = useDispatch();
   useEffect(() => {  dispatch(getUsers());  }, []); 
   let comp;
   if (statee === '') {
       comp = <Login/>
      } else {
    if(statee.response.accessToken){
       comp = <div><h3>List of all users</h3><p>
          {content.userList.users.users.map((item, i) => (
              <UserList todo={item.name} key={i} />
          ))}  
    
        </p></div>
    }else{
       comp = <div><p style={{color: "red"}}>{statee.response.message}</p><Login/></div>

    }
  }
  return (
    <div className="App">
        {comp}
    </div>
  );
}
export default App;

