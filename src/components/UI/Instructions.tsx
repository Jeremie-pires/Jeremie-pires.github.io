import React from 'react';

const Instructions: React.FC = () => {
  return (
    <div style={{
      position: 'fixed',
      top: '20px',
      left: '20px',
      color: 'white',
      background: 'rgba(0, 0, 0, 0.8)',
      padding: '20px',
      borderRadius: '12px',
      fontFamily: 'system-ui, -apple-system, sans-serif',
      fontSize: '14px',
      maxWidth: '280px',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.4)',
      backdropFilter: 'blur(10px)',
      border: '1px solid rgba(255, 255, 255, 0.1)',
      zIndex: 100
    }}>
      <h3 style={{ 
        margin: '0 0 15px 0',
        fontSize: '18px',
        fontWeight: 'bold',
        color: '#3498db'
      }}>
        🎮 Navigation
      </h3>
      
      <div style={{ lineHeight: '1.8' }}>
        <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>🖱️</span>
          <span><strong>Clic gauche + glisser</strong> : Rotation</span>
        </p>
        <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>🖱️</span>
          <span><strong>Clic droit + glisser</strong> : Déplacement</span>
        </p>
        <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>🔄</span>
          <span><strong>Molette</strong> : Zoom</span>
        </p>
        <p style={{ margin: '8px 0', display: 'flex', alignItems: 'center' }}>
          <span style={{ marginRight: '8px' }}>👆</span>
          <span><strong>Clic sur objets</strong> : Voir détails</span>
        </p>
      </div>
    </div>
  );
};

export default Instructions;