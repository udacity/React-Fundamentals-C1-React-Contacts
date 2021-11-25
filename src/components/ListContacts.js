const ListContacts = ({ contacts }) => {
  return (
    <ol className="contact-list">
      {contacts.map((contact) => (
        <li key={contact.id}>{contact.name}</li>
      ))}
    </ol>
  );
};

export default ListContacts;
