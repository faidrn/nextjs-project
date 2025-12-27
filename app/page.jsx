import Users from "@/components/Users";

async function fetchUsers() {
  // const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const res = await fetch('https://fake-json-api.mock.beeceptor.com/users');
  const data = await res.json();
  return data;
}

async function HomePage() {
  
  const users = await fetchUsers();

  return (
    <Users users={users} />
  );
}

export default HomePage;