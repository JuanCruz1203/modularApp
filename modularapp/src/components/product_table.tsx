import React from 'react';
import StockButton from "./button_stock";
import '../pages/home.css'

export default function ProductTable() {
  return (
    <table className="w-full bg-white rounded shadow">
      <thead className="bg-purple-300">
        <tr>
          <th className="p-2--p">ID</th>
          <th className="p-2--p">Nombre</th>
          <th className="p-2--p">Proveedor</th>
          <th className="p-2--p">Stock</th>
          <th className="p-2--p">Acciones</th>
        </tr>
      </thead>
      <tbody>
      <tr className="text-center border-t">
          <td className="p-2--p">1</td>
          <td className="p-2--p">Laptop HP</td>
          <td className="p-2--p">HP Inc.</td>
          <td className="p-2--p">15</td>
          <td className="p-2--p flex justify-center gap-6">
            <StockButton type="increase" />
            <StockButton type="decrease" />
          </td>
        </tr>
        <tr className="text-center border-t">
          <td className="p-2--p">2</td>
          <td className="p-2--p">Monitor Dell</td>
          <td className="p-2--p">Dell</td>
          <td className="p-2--p">8</td>
          <td className="p-2--p flex justify-center gap-6">
            <StockButton type="increase" />
            <StockButton type="decrease" />
          </td>
        </tr>
        <tr className="text-center border-t">
          <td className="p-2--p">3</td>
          <td className="p-2--p">Teclado Logitech</td>
          <td className="p-2--p">Logitech</td>
          <td className="p-2--p">25</td>
          <td className="p-2--p flex justify-center gap-6">
            <StockButton type="increase" />
            <StockButton type="decrease" />
          </td>
        </tr>
        <tr className="text-center border-t">
          <td className="p-2--p">4</td>
          <td className="p-2--p">Teclado</td>
          <td className="p-2--p">Genius</td>
          <td className="p-2--p">25</td>
          <td className="p-2--p flex justify-center gap-6">
            <StockButton type="increase" />
            <StockButton type="decrease" />
          </td>
        </tr>
        <tr className="text-center border-t">
          <td className="p-2--p">5</td>
          <td className="p-2--p">cable usb</td>
          <td className="p-2--p">Noga</td>
          <td className="p-2--p">15</td>
          <td className="p-2--p flex justify-center gap-6">
            <StockButton type="increase" />
            <StockButton type="decrease" />
          </td>
        </tr>
        <tr className="text-center border-t">
          <td className="p-2--p">6</td>
          <td className="p-2--p">Monitor Philipps</td>
          <td className="p-2--p">Noga</td>
          <td className="p-2--p">7</td>
          <td className="p-2--p flex justify-center gap-6">
            <StockButton type="increase" />
            <StockButton type="decrease" />
          </td>
        </tr>

      </tbody>
    </table>
  );
} 

