import userImage from "../assets/usuario.png";

export default function Sidebar() {
    return (
      <div className="w-64 bg-purple-700 text-white p-6 flex flex-col">
        <div className="mb-10">
          <div className="w-16 h-16 bg-white rounded-full mx-auto mb-4" />
        <img className="text-center text-lg font-bold" src={userImage} alt="" srcset="" />
        <p className="font-bold">usuario</p>
        </div>
        <nav className="nav_bar">
          
            <li className="mb-4">
              <a href="#" className=" hover:bg-purple-600 p-2 rounded">
                Inicio
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className=" hover:bg-purple-600 p-2 rounded">
                Productos
              </a>
            </li>
            <li className="mb-4">
              <a href="#" className=" hover:bg-purple-600 p-2 rounded">
                Categorias
              </a>
            </li>
          
        </nav>
      </div>
    );
  }
  