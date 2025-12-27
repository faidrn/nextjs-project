async function getUser(id) {
    const res = await fetch(`https://fake-json-api.mock.beeceptor.com/users/${id}`);
    const data = await res.json();
    return data;
}

export default async function UserPage({ params }) {
    const { id } = await params;
    const user = await getUser(id);

    return (
        <div
            className="bg-slate-400 p-10 rounded-md"
        >
            <img 
                src={user.photo} 
                alt={user.name} 
                className="m-auto my-4"
            />
            <h3
                className="font-bold text-2xl mb-2"
            >
                {user.id} {user.name}
            </h3>
            <p>
                email: {user.email}
            </p>
        </div>
    );
};