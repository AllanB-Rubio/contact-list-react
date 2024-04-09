import "./App.css";
import ContactList from "./components/ContactList";
import { useState } from "react";


// fetch api
const API =
  "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/todos/users";


export default function App() {

  return (
    <>
      <ContactList />
    </>
  );
}
