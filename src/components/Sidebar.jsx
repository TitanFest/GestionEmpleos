// src/components/Sidebar.js
import React from 'react';
import '../styles/Sidebar.css';

const Sidebar = () => {
  const handleCategoryClick = (index) => {
    console.log(`Categoría ${index + 1} seleccionada`);
    // Aquí puedes implementar la navegación o cualquier otra funcionalidad
  };

  return (
    <div className="sidebar">
      {[...Array(6)].map((_, i) => (
        <button 
          key={i} 
          className="sidebar-btn" 
          onClick={() => handleCategoryClick(i)} // Manejo de clics
        >
          Categoría {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Sidebar;
