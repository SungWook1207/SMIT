import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import UserList from "./components/UserList";
import axios from "axios";

export default function App() {
    const [users, setUsers] = useState<{ id: number; name: string }[]>([]);
    const [filteredUsers, setFilteredUsers] = useState(users);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const controller = new AbortController();
        async function fetchUsers() {
            try {
                const response = await axios.get("https://jsonplaceholder.typicode.com/users");
                setUsers(response.data);
                setFilteredUsers(response.data);
            } catch (err) {
                setError("데이터를 불러오는데 실패했습니다: ");
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();

        return () => {
            controller.abort(); // 이전 API 요청 취소
        };
    }, []);

    useEffect(() => {
        document.body.style.backgroundColor = darkMode ? "#333" : "#fff";
        document.body.style.color = darkMode ? "#fff" : "#000";
    }, [darkMode]);

    // 검색 기능
    function handleSearch(query: string) {
        const filtered = users.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredUsers(filtered);
    }

    return (
        <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
            <button onClick={() => setDarkMode(!darkMode)}>
                {darkMode ? "라이트 모드" : "다크 모드"}
            </button>
            <h1>사용자 목록</h1>
            <SearchBar onSearch={handleSearch} />
            {isLoading && <p>데이터를 불러오는 중...</p>}
            {error && <p style={{ color: "red" }}>{error}</p>}
            <UserList users={filteredUsers} />
        </div>
    );
}
