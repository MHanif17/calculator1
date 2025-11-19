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
              ? "bg-red-500 hover:bg-red-300 active:bg-red-400 transition-colors"
              : key === "DE"
              ? "bg-orange-500 hover:bg-orange-300 active:bg-orange-400 transition-colors"
              : key === "="
              ? "bg-emerald-500 hover:bg-emerald-300 active:bg-emerald-400 col-span-2 transition-colors"
              : "bg-slate-700 hover:bg-slate-400 active:bg-slate-500 transition-colors"
          }
        />
      ))}
    </div>
  );
}

export default Keypad;
