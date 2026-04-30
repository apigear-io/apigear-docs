import { useEffect, useState } from 'react'
import useBaseUrl from '@docusaurus/useBaseUrl'
import styles from './figure.module.css'

export default function Figure({ src, caption, children }) {
  const [isOpen, setIsOpen] = useState(false)
  const imageSrc = useBaseUrl(src)

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e) => { if (e.key === 'Escape') setIsOpen(false) }
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKey)
    }
  }, [isOpen])

  const renderedChildren = children ?? <img src={imageSrc} alt={caption} />

  return (
    <figure
      className={`${styles.figure} ${isOpen ? styles.lifted : ''}`}
      onClick={() => setIsOpen(!isOpen)}
      role={isOpen ? 'dialog' : undefined}
      aria-modal={isOpen ? 'true' : undefined}
      aria-label={isOpen ? caption : undefined}
    >
      <div className={styles.content}>{renderedChildren}</div>
      <figcaption className={styles.caption}>{`Figure: ${caption}`}</figcaption>
    </figure>
  )
}
