import { useState } from "react";
import ContactList from "./components/ContactList";
import SelectedContact from "./components/SelectedContact";
import "./App.css";

// Create state variable to store ID of selected contact 
// We want two seperate views (list of all contacts, selected contact)
// Be able to toggle between all contacts and selected contact 
// each of these "views"/ components, need access to a single state value 
// need to put this state value in PARENT component and share it via (props)


export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);


    return (
      <>
        {selectedContactId ? (
                              <SelectedContact 
                              selectedContactId={selectedContactId}
                              setselectedContactId={selectedContactId}/>
                             ):(
                              <ContactList setSelectedContactId={setSelectedContactId} />)}
        
      </>
    );
  }
