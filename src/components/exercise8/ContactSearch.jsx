import { useState } from "react";

function ContactSearch({ contacts }) {
  const [query, setQuery] = useState("");

  const highlight = (name) => {
    const lowerName = name.toLowerCase();
    const lowerQuery = query.toLowerCase();

    const startIndex = lowerName.indexOf(lowerQuery);
    if (startIndex === -1 || !query) {
      return <span style={{ color: "white" }}>{name}</span>;
    }

    const endIndex = startIndex + query.length;

    return (
      <>
        <span style={{ color: "white" }}>{name.slice(0, startIndex)}</span>
        <span style={{ backgroundColor: "yellow", color: "black" }}>
          {name.slice(startIndex, endIndex)}
        </span>
        <span style={{ color: "white" }}>{name.slice(endIndex)}</span>
      </>
    );
  };

  return (
    <div className="container w-25">
      <input
        type="text"
        className="form-control"
        placeholder="Name to search"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {contacts.map((c) => (
        <div key={c.id} className="card my-2 py-3 px-2 bg-dark">
          {highlight(c.name)}
        </div>
      ))}
    </div>
  );
}

export default ContactSearch;
