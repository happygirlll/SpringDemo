import React, { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("http://localhost:8080/api/test") // 백엔드 API 호출
        .then((response) => response.text())
        .then((data) => setMessage(data))
        .catch((error) => console.error("Error:", error));
  }, []);

  return (
      <div>
        <h1>Spring Boot + React 연결</h1>
        <p>백엔드 응답: {message}</p>
      </div>
  );
}

export default App;