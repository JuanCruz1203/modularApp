export default function StockButton({ type }) {
    return (
      <button
        className={`p-2--p-1 rounded ${
          type === "increase" ? "bg-green-400 hover:bg-green-500" : "bg-red-400 hover:bg-red-500"
        }`}
      >
        {type === "increase" ? "+" : "-"}
      </button>
    );
  }
  