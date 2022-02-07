import react,{useState, useEffect} from 'react';
import './App.css';
import User from './User';
import firebaseDB from './firebase'

function App() {
  const [ user, setUser] = useState({})
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState("")

  useEffect( () => {
    firebaseDB.child('usuarios').on('value' , snapshot =>{
      if (snapshot.val() != null){
        setUser({
          ...snapshot.val()
        })
      }
    })
  }, [])

  useEffect( () => {
    setFilter(
      Object.values(user).filter((name) => 
        name.nome.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, user])
  console.log(search)

  return (
    <div className="App">
      <div className='container__bg'>
        <a target='_blank' href='https://www.youtube.com/channel/UCU2FA7I_Y9IeC6GJT6oavMg'>BLANK</a>
        <div className='container__search'>
          <input type='search' placeholder='Pesquisar' onChange={(e) => setSearch(e.target.value)}/>
        </div>
        {
          Object.values(user).length > 0 ?(
            filter.length <= 0 ?(
              <span>usuario nao encontrado</span>
            ):(
              filter.map((users) => {
                return(
                  <User
                    id_user = {users.id_user}
                    nome = {users.nome}
                  />
                )
              })
            )
          ):(
            null
          )
        }
        
      </div>
    </div>
  );
}

export default App;
