import UserCard from "@/components/UserCard";
import { BASE_URL } from "@/utils/constant";

export async function fetchUsers() {
	const resp = await fetch(`${BASE_URL}/users?limit=8`, {
		cache: "no-store",
	});
	return resp.json();
}

export default async function Users() {
	const users = await fetchUsers();
	return (
		<main>
			<div className="text-center font-bold text-5xl p-10 ">
				<h1>Users</h1>
			</div>
			<div className="flex min-h-screen flex-wrap items-center justify-between p-10">
				{users.map((user) => (
					<UserCard key={user.id} user={user} />
				))}
			</div>
		</main>
	);
}
