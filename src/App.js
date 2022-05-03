import contacts from "./contacts.json"
import './App.css';
import { useState } from "react";

const arrContacts = contacts.slice(0, 5)

let randomNum = Math.floor(Math.random() * contacts.length) + 4

function App() {

  const [contactsValue, setContactsValue] = useState(arrContacts)

  const addRandomContact = () => {
    const contactsCopy = [...contactsValue]
    contactsCopy.push(contacts[Math.floor(Math.random() * contacts.length) + 4])
    setContactsValue(contactsCopy)
  }

  const sortName = () => {
    const contactsCopy = [...contactsValue]
    contactsCopy.sort((a, b) => a.name.localeCompare(b.name))
    setContactsValue(contactsCopy)
  }
  
  const sortPopularity = () => {
    const contactsCopy = [...contactsValue]
    contactsCopy.sort((a, b) => b.popularity - a.popularity)
    setContactsValue(contactsCopy)
  }

  const removeContact = contactID => {
    const newContacts = contactsValue.filter(elm => elm.id != contactID)              
    setContactsValue(newContacts)
  }
  

  return (
    <div className="App">

      <h2>IRONCONTACTS</h2>

      <button onClick={addRandomContact}>Añadir contacto random</button>

      <button onClick={sortName}>Ordenar por nombre</button>

      <button onClick={sortPopularity}>Ordenar por popularidad</button>


      <table>
        <tbody>

          <tr>
            <th>Picture</th>
            <th>Name</th>
            <th>Popularity</th>
            <th>Won Oscar</th>
            <th>Won Emmy</th>

          </tr>
          {
            contactsValue.map((elm) => {

              return (<tr key={elm.id}>
                <td> <img className="imgurl" src={elm.pictureUrl}></img></td>
                <td>{elm.name}</td>
                <td>{elm.popularity}</td>
                <td> {elm.wonOscar ? "🏆" : ""}</td>
                <td> {elm.wonEmmy ? "🏆" : ""}</td>
                <td><button onClick={() => removeContact(elm.id)}>Eliminar contacto </button></td>
              </tr>)
            })
          }


        </tbody>
      </table>

    </div>
  );
}

export default App;
