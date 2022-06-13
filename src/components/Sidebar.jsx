import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar} >
      <img 
        className={styles.cover}
        src="https://images.unsplash.com/photo-1608245449230-4ac19066d2d0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=50"
      />

      <div className={styles.profile}>
        <strong>Lebronzito James</strong>
        <span>Basketball player</span>
      </div>

      <footer>
        <a href="#">
          Editar seu perfil
        </a>
      </footer>
    </aside>
  )
} 