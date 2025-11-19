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
              ? "bg-red-500 hover:bg-red-300"
              : key === "DE"
              ? "bg-orange-500 hover:bg-orange-300"
              : key === "="
              ? "bg-emerald-500 hover:bg-emerald-300 col-span-2"
              : "bg-slate-700 hover:bg-slate-400"
          }
        />
      ))}
    </div>
  );
}

export default Keypad;
