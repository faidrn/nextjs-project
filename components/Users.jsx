import Link from "next/link";


const Users = ({ users }) => {
    return (
        <ul
            className="mt-120"
        >
            {users.map(user => (
                <Link
                    href={`/users/${user.id}`}
                    key={user.id}
                >
                    <li 
                        key={user.id}
                        className="bg-slate-400 mb-2 p-4 rounded-md text-black flex justify-between"
                    >
                    <div>
                        <h5
                            className="font-bold"
                        >
                            {user.id} {user.name}
                        </h5>
                        <p
                            className="text-slate-100"
                        >
                            email: {user.email}
                        </p>
                    </div>
                        <img 
                            src={user.photo}
                            alt={user.name}
                            className="rounded-full w-20"
                        />
                    </li>
                </Link>
            ))}
            </ul>
    );
};

export default Users;