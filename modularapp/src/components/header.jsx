export default function Header() {
    return (
      <header className="w-full bg-purple-500 p-4 flex items-center justify-between">
        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Buscar productos..."
            className="p-2 rounded-md"
          />
          <button className="bg-purple-700 text-white p-2 rounded-md">
            Filtros
          </button>
        </div>
      </header>
    );
  }
  