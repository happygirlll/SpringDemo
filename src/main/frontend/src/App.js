import React, { useState } from "react";
import axios from "axios";

function App() {
    const [productName, setProductName] = useState("");
    const [quantity, setQuantity] = useState(1);

    const createOrder = () => {
        axios.post("http://localhost:8080/api/orders", { productName, quantity })
            .then(response => {
                alert("주문 완료: " + response.data.id);
            })
            .catch(error => {
                console.error("주문 실패", error);
            });
    };

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            <h1>🛒 간단한 쇼핑몰</h1>
            <input
                type="text"
                placeholder="상품명"
                value={productName}
                onChange={(e) => setProductName(e.target.value)}
            />
            <input
                type="number"
                value={quantity}
                onChange={(e) => setQuantity(Number(e.target.value))}
            />
            <button onClick={createOrder}>주문하기</button>
        </div>
    );
}

export default App;
