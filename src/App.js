import CardList from './components/card_list.component/card_list';
import Header from './components/header.component/header';
import OptionsList from './components/options_list.component/options_list';
import {useState,useEffect} from 'react';
import './App.css';


function App() {

  const [users,setUsers] = useState({});


  useEffect(()=>{
    fetch('http://localhost:3001/users')
    .then(res=>res.json())
    .then(data=>{
    setUsers(data)
    })
    .catch(err=>console.log(err))


  },[])

// add a new user

   const addNewUser=(name)=>{

    console.log(name,"name is")
    fetch('http://localhost:3001/users/adduser',{
      method:'POST',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        name
      })
    })
    .then(res=>res.json())
    .then(data=>{

    fetch('http://localhost:3001/users')
    .then(res=>res.json())
    .then(data=>{
    setUsers(data)
    })
    .catch(err=>console.log(err))


    })
    .catch(err=>console.log(err))
     console.log("I AM POST")
   }




// update  a new user

   const updateExistingUser=(name,id)=>{
    fetch(`http://localhost:3001/user/${id}`,{
      method:'PUT',
      headers:{
        'Content-Type': 'application/json',
      },
      body:JSON.stringify({
        name
      })
    })
    .then(res=>res.json())
    .then(data=>{

    fetch('http://localhost:3001/users')
    .then(res=>res.json())
    .then(data=>{
    setUsers(data)
    })
    .catch(err=>console.log(err))


    })
    .catch(err=>console.log(err))

    console.log('I am PUT')








    
  }

//delete a user

  const  deleteExistingUser=(id)=>{
   
    fetch(`http://localhost:3001/user/${id}`,{
      method:'DELETE'
    })
    .then(res=>res.json())
    .then(data=>{

    fetch('http://localhost:3001/users')
    .then(res=>res.json())
    .then(data=>{
    setUsers(data)
    })
    .catch(err=>console.log(err))
    })
    .catch(err=>console.log(err))
  }



  return (
    <div className="App">
      <Header/>
       <OptionsList addNewUser={addNewUser} updateExistingUser={updateExistingUser} deleteExistingUser={deleteExistingUser}/>
      <CardList  data={Object.keys(users).length?users:[]}/>
      </div>
  );
}

export default App;
