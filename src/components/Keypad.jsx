import Button from "./Button";

function Keypad({ calculate }) {
  const keys = [
    "AC",
    "DE",
    ".",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "+",
    "1",
    "2",
    "3",
    "-",
    "00",
    "0",
    "=",
  ];
  return (
    <div className="grid grid-cols-4 gap-2">
      {keys.map((key) => (
        <Button
          key={key}
          value={key}
          onClick={calculate}
          variant={
            key === "AC"
              ? "bg-red-500 hover:bg-red-300 active:bg-red-400 focus:ring-2 focus:ring-red-300 focus:outline-none transition-all"
              : key === "DE"
              ? "bg-orange-500 hover:bg-orange-300 active:bg-orange-400 focus:ring-2 focus:ring-orange-300 focus:outline-none transition-all"
              : key === "="
              ? "bg-emerald-500 hover:bg-emerald-300 active:bg-emerald-400 col-span-2 focus:ring-2 focus:ring-emerald-300 focus:outline-none transition-all"
              : "bg-slate-700 hover:bg-slate-400 active:bg-slate-500 focus:ring-2 focus:ring-slate-400 focus:outline-none transition-all"
          }
        />
      ))}
    </div>
  );
}

export default Keypad;
