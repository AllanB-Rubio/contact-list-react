import { useState, useEffect } from "react";

const fetchAPI =
  "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/";

export default function SelectedContact({
  selectedContactId,
  setSelectedContactId,
}) {
  const [contact, setContact] = useState({});

  useEffect(() => {
    async function fetchSingleContact() {
      try {
        const response = await fetch(`${fetchAPI}${selectedContactId}`);
        const result = await response.json();

        setContact(result);
        console.log(contact);
      } catch (error) {
        console.error(error);
      }
    }
    fetchSingleContact();
  }, [selectedContactId]); //By including selectedContactId in the dependency array, it ensures that the effect runs whenever the selectedContactId changes, allowing the component to fetch the correct contact details for the selected contact and update accordingly.

  return (
    <>
      <table>
        <thead>
          <tr>
            <th colSpan="3">Contact Information</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>Name: {contact.name}</td>
            <td> Email: {contact.email}</td>
            <td> Phone: {contact.phone}</td>
          </tr>
        </tbody>
      </table>

      <button onClick={() => setSelectedContactId(null)}>
        Go Back to Contact List
      </button>
    </>
  );
}
