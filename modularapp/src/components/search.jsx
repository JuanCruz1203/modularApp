export default function SearchBar() {
    return (
      <div className="flex mb-6">
        <input
          type="text"
          placeholder="Buscar productos..."
          className="flex-1 p-2 rounded-l border border-purple-400"
        />
        <button className="bg-purple-500 p-2 text-white rounded-r hover:bg-purple-600">
          🔍
        </button>
        <button className="bg-purple-700 text-white p-2 rounded-md w-14">
            Filtros
          </button>
      </div>
    );
  }
  