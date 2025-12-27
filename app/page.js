async function fetchUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
}

async function HomePage() {
  
  const users = await fetchUsers();

  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>
          <div>
              <h5>
                {user.id} {user.name}
              </h5>
              <p>email: {user.email}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}

export default HomePage;