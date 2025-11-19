import { useState } from "react";
import Keypad from "./components/Keypad";

function App() {
  const [expression, setExpression] = useState("");

  function calculate(key) {
    if (key === "AC") return setExpression("");
    if (key === "DE") return setExpression((prev) => prev.slice(0, -1));

    if (key === "=") {
      try {
        // bisa pakai eval
        //eval(expression)
        const result = Function(`'use strict'; return(${expression})`)();
        setExpression(String(result));
      } catch (error) {
        console.error(error);
        setExpression("");
      }
      return;
    }

    setExpression((prev) => prev + key);
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-900">
      <div className="bg-slate-800 text-white w-full max-w-xs rounded-2xl shadow-xl p-4 space-y-4">
        <h1 className="text-lg font-semibold text-center">
          My React Calculator🧮
        </h1>

        <input
          type="text"
          value={expression}
          readOnly
          className="w-full bg-slate-900 rounded-lg p-3 text-right text-2xl outline-none"
        />
        <Keypad calculate={calculate} />
      </div>
    </div>
  );
}

export default App;

// "use strict" adalah mode ketat di JavaScript.
// Mode ini membuat JavaScript lebih aman dan lebih disiplin.
// Apa saja dampaknya?
// 1. Melarang penggunaan variabel tanpa deklarasi (mencegah bug).
// 2. Mencegah override properti bawaan yang tidak boleh diubah.
// 3. Membuat fungsi yang dibuat dengan Function() berjalan dalam lingkungan yang lebih aman.
//
// Mode strict sangat cocok ketika menjalankan ekspresi matematika
// supaya segala kesalahan langsung terdeteksi.
