import React from 'react';
import type { ModalContent } from '../../types/content.types';

interface ModalProps {
  content: ModalContent | null;
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ content, onClose }) => {
  if (!content) return null;

  return (
    <>
      {/* Overlay */}
      <div
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'rgba(0, 0, 0, 0.7)',
          zIndex: 999,
          backdropFilter: 'blur(5px)'
        }}
      />

      {/* Modal */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        background: 'white',
        padding: '40px',
        borderRadius: '20px',
        boxShadow: '0 20px 60px rgba(0, 0, 0, 0.4)',
        maxWidth: '600px',
        width: '90%',
        maxHeight: '80vh',
        overflow: 'auto',
        zIndex: 1000,
        fontFamily: 'system-ui, -apple-system, sans-serif'
      }}>
        <h2 style={{ 
          marginTop: 0, 
          color: '#2C3E50',
          fontSize: '28px',
          marginBottom: '15px'
        }}>
          {content.title}
        </h2>
        
        <p style={{ 
          color: '#555', 
          lineHeight: '1.8',
          fontSize: '16px',
          marginBottom: '20px'
        }}>
          {content.description}
        </p>
        
        {content.items && content.items.length > 0 && (
          <ul style={{ 
            color: '#555', 
            lineHeight: '1.8',
            paddingLeft: '20px',
            marginBottom: '20px',
            listStyle: 'none'
          }}>
            {content.items.map((item, index) => (
              <li 
                key={index} 
                style={{ 
                  marginBottom: '10px',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px'
                }}
              >
                {item.icon && (
                  <img 
                    src={item.icon} 
                    alt=""
                    style={{ 
                      width: '20px', 
                      height: '20px',
                      objectFit: 'contain',
                      flexShrink: 0
                    }} 
                  />
                )}
                <span style={{ whiteSpace: 'pre-line' }}>{item.text}</span>
              </li>
            ))}
          </ul>
        )}

        {content.links && content.links.length > 0 && (
          <div style={{ marginTop: '25px' }}>
            {content.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                download={link.download}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  marginRight: '15px',
                  marginBottom: '10px',
                  padding: '10px 20px',
                  background: '#3498db',
                  color: 'white',
                  textDecoration: 'none',
                  borderRadius: '8px',
                  fontSize: '14px',
                  fontWeight: '500',
                  transition: 'background 0.3s'
                }}
                onMouseOver={(e) => e.currentTarget.style.background = '#2980b9'}
                onMouseOut={(e) => e.currentTarget.style.background = '#3498db'}
              >
                {link.icon && (
                  <img 
                    src={link.icon} 
                    alt={link.label}
                    style={{ 
                      width: '20px', 
                      height: '20px',
                      objectFit: 'contain'
                    }} 
                  />
                )}
                {link.label}
              </a>
            ))}
          </div>
        )}

        <button
          onClick={onClose}
          style={{
            marginTop: '30px',
            padding: '12px 30px',
            background: '#e74c3c',
            color: 'white',
            border: 'none',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '16px',
            fontWeight: 'bold',
            transition: 'background 0.3s'
          }}
          onMouseOver={(e) => e.currentTarget.style.background = '#c0392b'}
          onMouseOut={(e) => e.currentTarget.style.background = '#e74c3c'}
        >
          Fermer
        </button>
      </div>
    </>
  );
};

export default Modal;