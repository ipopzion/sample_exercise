import { useState } from "react";
import { SidePanel, ExploreButton } from "./components";
import styles from "./App.style";

const App = () => {
  const [panelOpen, setPanelOpen] = useState(false);
  const toggleOpen = () => {
    setPanelOpen(!panelOpen);
  };

  return (
    <div style={styles.body}>
      <div style={styles.container}>
        <ExploreButton handleClick={toggleOpen} />
        <SidePanel panelOpen={panelOpen} toggleOpen={toggleOpen} />
      </div>
    </div>
  );
};

export default App;
