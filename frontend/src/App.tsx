import { Outlet } from "react-router-dom";
import styles from "./App.module.css";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <Sidebar />
      </div>
      <div className={styles.children}>
        <Outlet />
      </div>
    </div>
  );
}

export default App;
