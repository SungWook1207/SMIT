import { useState } from 'react'
import './App.css'

function TextDisplay() {
  const [inputText, setInputText] = useState("");
  const [textList, setTextList] = useState<string[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // onClick시에는 필요 없음
    if (inputText.trim() === "") return; // 빈 값 방지
    setTextList([...textList, inputText]); // 기존 배열에 새로운 텍스트 추가
    setInputText(""); // 입력창 초기화
  };

  return (
    <div className="container">
      <h2>Display Text</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button type="submit">Add Text</button>
        {/* form 대신에 onClick만 사용 가능 */}
        {/* <button onClick={handleSubmit}>Add Text</button> */}

      </form>

      <div className="display-box">
        {textList.length === 0 ? (
          <p>No text added yet.</p>
        ) : (
          <ul>
            {textList.map((text, index) => (
              <li key={index}>{text}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  ); 
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>My First React App</h1>
      <h3>count is {count}</h3>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Increment
        </button>
        {/* Deduction 버튼도 만들어보기 */}
        <button onClick={() => setCount(count - 1)}>Decrement</button>
      </div>
      <TextDisplay />
    </>
  )
}

export default App
