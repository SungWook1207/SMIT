interface UserListProps {
    users: { id: number; name: string }[];
}

export default function UserList({ users }: UserListProps) {
    return (
        <ul style={{ listStyle: "none", padding: 0 }}>
            {users.length > 0 ? (
                users.map((user) => <li key={user.id}>{user.name}</li>)
            ) : (
                <p>사용자를 찾을 수 없습니다.</p>
            )}
        </ul>
    );
}
