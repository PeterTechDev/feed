import { Header } from './components/Header';
import { Post } from './Post';
import { Sidebar } from './components/Sidebar';

import './global.css'

import styles from './App.module.css';

function App() {
  return (
    <>
      <Header />

      <div className={styles.wrapper}>
      <Sidebar />

        <main>
          <h1>Aqui quem fala é a main</h1>
        </main>

        <Post />
      </div>
    </>
  )
}

export default App
