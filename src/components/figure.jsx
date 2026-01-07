import { useState } from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'

export default function Figure({ src, caption }) {
  const [isOpen, setIsOpen] = useState(false)
  const imageSrc = useBaseUrl(src)

  return (
    <>
      <figure style={{ padding: 0 }}>
        <img
          src={imageSrc}
          alt={caption}
          style={{
            cursor: 'zoom-in',
            background: '#f5f5f5',
            borderRadius: '4px',
            padding: '8px',
          }}
          onClick={() => setIsOpen(true)}
        />
        <figcaption>{`Figure: ${caption}`}</figcaption>
      </figure>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 1000,
            background: 'rgba(0, 0, 0, 0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'zoom-out',
          }}
        >
          <img
            src={imageSrc}
            alt={caption}
            style={{
              maxWidth: '90vw',
              maxHeight: '90vh',
              background: '#f5f5f5',
              borderRadius: '4px',
              padding: '8px',
            }}
          />
        </div>
      )}
    </>
  )
}
