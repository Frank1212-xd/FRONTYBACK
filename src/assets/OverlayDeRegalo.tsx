import React, { useEffect, useState } from 'react';
import './OverlayDeRegalo.css';

export type OverlayGift = {
  id: string;
  nombre: string;
  imagen?: string;
  puntos?: number;
  monedas?: number;
  espectador?: { id: string; nombre: string; avatar?: string };
};

type Props = {
  gift: OverlayGift | null;
  duration?: number;
  onClose?: () => void;
  persist?: boolean;
};

const OverlayDeReg: React.FC<Props> = ({ gift, duration = 4500, onClose, persist = false }) => {
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {
    if (gift) {
      setVisible(true);
      if (!persist) {
        const t = setTimeout(() => setVisible(false), duration);
        return () => clearTimeout(t);
      }
    } else {
      setVisible(false);
    }
  }, [gift, duration, persist]);

  useEffect(() => {
    if (!visible && onClose) onClose();
  }, [visible, onClose]);

  if (!gift && !visible) return null;

  return (
    <div
      className={`overlay-regalo-bootstrap position-fixed top-0 end-0 p-3 ${visible ? 'show' : 'hide'}`}
      style={{ zIndex: 2000, pointerEvents: 'none' }}
      aria-live="polite"
    >
      <div
        className="card shadow-lg border-0 d-flex flex-row align-items-center p-2 overlay-card"
        style={{ minWidth: 260, pointerEvents: 'auto', background: 'rgba(0,0,0,0.75)', color: '#fff' }}
      >
        <div
          className="me-2 overflow-hidden rounded overlay-media"
          style={{ width: 64, height: 64, flexShrink: 0, background: '#111' }}
        >
          <img
            src={gift?.imagen || '/placeholder.png'}
            alt={gift?.nombre || 'Regalo'}
            className="img-fluid w-100 h-100"
            style={{ objectFit: 'cover', display: 'block' }}
          />
        </div>

        <div className="flex-grow-1">
          <small className="text-uppercase" style={{ opacity: 0.85, letterSpacing: '0.06em' }}>
            Nuevo regalo
          </small>
          <div className="fw-bold">{gift?.espectador ? gift.espectador.nombre : 'Espectador'} envió</div>
          <div className="fw-semibold">{gift?.nombre}</div>
          <div className="text-muted" style={{ opacity: 0.9, fontSize: '.85rem' }}>
            {gift?.puntos ? `${gift.puntos} pts` : ''}{gift?.puntos && gift?.monedas ? ' · ' : ''}{gift?.monedas ? `${gift.monedas} 🪙` : ''}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OverlayDeReg;
