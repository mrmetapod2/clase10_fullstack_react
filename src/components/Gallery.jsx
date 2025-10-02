import React, { useState } from 'react';
import './ComponentesHook.css'; // reutiliza tu archivo CSS

// Datos iniciales (puedes moverlos a un archivo separado si querés)
const initialImagenes = [
  {
    id: 1,
    url: 'https://placehold.co/300/FF6B6B/FFFFFF?text=Monta%C3%B1as',
    titulo: 'Paisaje Montañoso',
    likes: 15,
    liked: false
  },
  {
    id: 2,
    url: 'https://placehold.co/300/FF6B6B/FFFFFF?text=Playa%20Atardecer',
    titulo: 'Playa al Atardecer',
    likes: 8,
    liked: false
  },
  {
    id: 3,
    url: 'https://placehold.co/300/FF6B6B/FFFFFF?text=Ciudad%20Nocturna',
    titulo: 'Ciudad Nocturna',
    likes: 22,
    liked: false
  },
  {
    id: 4, 
    url: 'https://placehold.co/300/FF6B6B/FFFFFF?text=Lago%20Tranquilo',
    titulo: 'Lago Tranquilo (duplicado id)',
    likes: 3,
    liked: false
  }
];

export function Gallery() {
  const [imagenes, setImagenes] = useState(initialImagenes);

  // estadisticas derivadas
  const totalLikes = imagenes.reduce((acc, img) => acc + img.likes, 0);
  const likedCount = imagenes.filter(img => img.liked).length;

  // condicion para mostrar sección "Imagenes Populares" (>10 likes)
  const hasPopular = imagenes.some(img => img.likes > 10);

  const toggleLike = (index) => {
    // use index en vez de id porque puede haber ids duplicados
    setImagenes(prev =>
      prev.map((img, idx) => {
        if (idx !== index) return img;
        const nowLiked = !img.liked;
        // actualizamos likes según el toggle
        const newLikes = nowLiked ? img.likes + 1 : Math.max(0, img.likes - 1);
        return { ...img, liked: nowLiked, likes: newLikes };
      })
    );
  };

  // helper para badge (usa ternarios anidados)
  const badgeFor = (likes) =>
    likes >= 20 ? '🔥 Popular' : (likes >= 10 ? '⭐ Destacada' : 'Nueva');

  return (
    <section className="gallery" aria-label="Galería de imágenes interactiva">
      <h2>Galería de Imágenes</h2>

      <div className="stats" style={{ marginBottom: 12 }}>
        <strong>Likes totales:</strong> {totalLikes} —{' '}
        <strong>Imágenes que te gustan:</strong> {likedCount}
      </div>

      {/* Seccion de destacados — se muestra solo si hay imágenes con >10 likes */}
      {hasPopular && (
        <section className="popular-section" style={{ marginBottom: 14 }}>
          <h3>Imágenes Populares</h3>
          <div className="popular-list" style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
            {imagenes
              .map((img, idx) => ({ img, idx }))
              .filter(({ img }) => img.likes > 10)
              .map(({ img, idx }) => (
                <article key={`popular-${img.id}-${idx}`} className="image-card">
                  <img src={img.url} alt={img.titulo} style={{ width: 150, height: 100, objectFit: 'cover', borderRadius: 6 }} />
                  <div style={{ fontSize: 12 }}>{img.titulo}</div>
                  <div className="badge">{badgeFor(img.likes)}</div>
                </article>
              ))}
          </div>
        </section>
      )}

      {/* Galeria completa */}
      <div className="images-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 14 }}>
        {imagenes.map((img, idx) => (
          // Key compuesta: id + índice (cumple requisito "keys únicas compuestas para elementos duplicados")
          <article className="image-card" key={`${img.id}-${idx}`}>
            <img src={img.url} alt={img.titulo} style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6 }} />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 8 }}>
              <div>
                <div style={{ fontWeight: 600 }}>{img.titulo}</div>
                <div style={{ fontSize: 13, color: '#666' }}>{img.likes} likes</div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 6 }}>
                {/* Operador ternario para icono like */}
                <button
                  aria-pressed={img.liked}
                  onClick={() => toggleLike(idx)}
                  className="like-btn"
                  title={img.liked ? 'Unlike' : 'Like'}
                >
                  {img.liked ? '❤' : '🤍'}
                </button>

                {/* Badge dinamico */}
                <span className="badge">{badgeFor(img.likes)}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
