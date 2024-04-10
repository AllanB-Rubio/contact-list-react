import { useState, useEffect } from "react"

const fetchAPI = "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/"

export default function SelectedContact({selectedContactId, setselectedContactId}){

    const [contact, setContact] = useState({});

    useEffect(() => {
        async function fetchSingleContact() {
          try {
            const response = await fetch(`${fetchAPI}${selectedContactId}`);
            const result = await response.json();
    
            setContact(result);

          } catch (error) {
            console.error(error);
          }
        }
        fetchSingleContact();
      }, []);

      return (
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{contact.name}</td>
              <td>{contact.email}</td>
              <td>{contact.phone}</td>
            </tr>

          </tbody>
        </table>
      );

}

/*
{
  "id": 1,
  "name": "Mrs. Jerald Schulist",
  "username": "Antwan",
  "email": "Coby_Zieme@libby.tv",
  "address": {
    "street": "Morissette Heights",
    "suite": "Apt. 633",
    "city": "Port Liashire",
    "zipcode": "04270",
    "geo": {
      "lat": "27.7501",
      "lng": "-83.1776"
    }
  },
  "phone": "(663)839-3814 x845",
  "website": "arvel.io",
  "company": {
    "name": "D'Amore-Krajcik",
    "catchPhrase": "Down-sized empowering Graphic Interface",
    "bs": "extend cross-media relationships"
  }
}
*/