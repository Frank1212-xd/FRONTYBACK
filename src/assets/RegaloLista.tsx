import React, { useState } from 'react';
import './RegaloLista.css';

export type Gift = {
  id: string;
  nombre: string;
  costoMonedas: number;
  puntos: number;
  imagen?: string;
};

type Props = {
  gifts?: Gift[]; 
  saldoMonedas?: number; 
  onSend?: (gift: Gift) => Promise<void> | void; 
};

const ejemploGifts: Gift[] = [
  { id: 'g1', nombre: 'Tiki tikis', costoMonedas: 1, puntos: 30,imagen: 'https://c0.klipartz.com/pngpicture/166/191/gratis-png-corazon-amor-corazon-computadora-iconos-simbolo-emoticon-fondo-de-amor-thumbnail.png'  },
  { id: 'g2', nombre: 'Rositas', costoMonedas: 1000, puntos: 30, imagen: 'https://www.acheterlikeetfollow.fr/wp-content/uploads/2023/07/prix-rose-tiktok.png' },
  { id: 'g3', nombre: 'Galaxias', costoMonedas: 999999999, puntos: 30, imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh5YznOlmSmL-jhWgLiPp3YDFBjxdjT7JWPA&s' },
];

const RegaloLista: React.FC<Props> = ({ gifts = ejemploGifts }) => {
  const [] = useState<string | null>(null);
  const [] = useState<string | null>(null);
  return (
    <section className="d-flex flex-column align-items-center position-relative pt-5 gap-2" aria-label="Lista de regalos">
      <h3  className="position-absolute top-0 start-50 translate-middle-x mt-3">Regalos</h3>

      <ul className="giftlist-grid mt-4">
        {gifts.map(gift => (
        <li key={gift.id} className="list-unstyled d-flex align-items-center gap-3 p-2 rounded border">
  <div className="giftcard-media overflow-hidden rounded" style={{ width: 64, height: 48 }}>
    <img
      src={gift.imagen || '/placeholder.png'}
      alt={gift.nombre}
      className="img-fluid w-100 h-100"
    />
  </div>

  <div className="flex-grow-1">
    <div className="fw-semibold">{gift.nombre}</div>
    <div className="text-muted small">{gift.costoMonedas} monedas · {gift.puntos} pts</div>
  </div>

  <div className="d-flex flex-column align-items-end">
    <button className="btn btn-outline-primary btn-sm mb-2">Seleccionar</button>
    <button className="btn btn-primary btn-sm">Enviar</button>
  </div>
</li>
        ))
        }
      </ul>
      <div className="giftlist-foot">
      </div>
    </section>
  );
};

export default RegaloLista;
