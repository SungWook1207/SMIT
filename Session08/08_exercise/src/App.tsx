import {useEffect, useState} from 'react'
import './App.css'
import SearchBar from "./components/SearchBar.tsx";
import BreedList from "./components/BreedList.tsx";
import axios from "axios";

function App() {
    const [breeds, setBreeds] = useState<{ id: string; name: string; description: string }[]>([]);
    const [filteredBreeds, setFilteredBreeds] = useState(breeds);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchUsers() {
            try {
                const firstResponse = await axios.get("https://dogapi.dog/api/v2/breeds?page[number]=1&page[size]=10");
                const totalPages = firstResponse.data.meta.pagination.last;
                const firstPageData = firstResponse.data.data.map((item: any) => ({
                    id: item.id,
                    name: item.attributes.name,
                    description: item.attributes.description,
                }));

                const requests = [];
                for (let i = 2; i <= totalPages; i++) {
                    requests.push(axios.get(`https://dogapi.dog/api/v2/breeds?page[number]=${i}&page[size]=10`));
                }

                const responses = await Promise.all(requests);
                const allDogs = responses.flatMap(response =>
                    response.data.data.map((item: any) => ({
                        id: item.id,
                        name: item.attributes.name,
                        description: item.attributes.description,
                    }))
                );

                setBreeds([...firstPageData, ...allDogs]);
                setFilteredBreeds([...firstPageData, ...allDogs]);
            } catch (err) {
                setError(err instanceof Error ? err.message : "알 수 없는 오류 발생");
            } finally {
                setIsLoading(false);
            }
        }

        fetchUsers();
    }, []);

    function handleSearch(query: string) {
        const filtered = breeds.filter((user) =>
            user.name.toLowerCase().includes(query.toLowerCase())
        );
        setFilteredBreeds(filtered);
    }

  return (
      <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
          <h1>견종 목록</h1>
          <SearchBar onSearch={handleSearch} />
          {isLoading && <p>데이터를 불러오는 중...</p>}
          {error && <p style={{ color: "red" }}>{error}</p>}
          <BreedList dogs={filteredBreeds} />
      </div>
  )
}

export default App
