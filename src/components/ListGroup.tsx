function ListGroup() {
  let items = ["Apple", "Orange", "Banana", "Mango"];

  const expression = items.length === 0 ? <p>No item found</p> : null;

  return (
    <>
      <h1>List</h1>
      {expression}
      <ul className="list-group">
        {items.map((item) => (
          <li
            className="list-group-item"
            key={item}
            onClick={(e) => console.log(e)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
