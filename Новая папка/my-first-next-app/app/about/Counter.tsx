"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>Количество нажатий: {count}</p>

      <button
        className="counter-button"
        onClick={() => setCount((currentCount) => currentCount + 1)}
      >
        Нажми на меня!
      </button>

      <button
        className="counter-button"
        onClick={() => setCount(0)}
        style={{ marginLeft: "10px", background: "#64748b" }}
      >
        Сбросить
      </button>
    </div>
  );
}
