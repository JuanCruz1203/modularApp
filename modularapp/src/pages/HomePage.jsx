import React from "react";
import Sidebar from "../components/sidebar";
import Header from "../components/header";
import ProductTable from "../components/product_table";
import "./home.css"; // 👈 Importamos el estilo

export default function Home() {
  return (
    <div className="home-container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <main className="products-section">
          <div className="products-header">
          </div>
          <ProductTable />
        </main>
      </div>
    </div>
  );
}