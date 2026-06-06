import "./index.css";
import HomePage from "./components/HomePage/HomePage";
import { Box } from "@mui/material";

function App() {
  return (
    <>
      <div className="App">
        {/* Navigation */}
        <nav style={{ padding: "1rem", display: "flex", justifyContent: "center", gap: "20px" }}>
          <a href="#" className="nav-link">
            Home
          </a>
          <a href="#" className="nav-link">
            Meet the Cats
          </a>
          <a href="#" className="nav-link">
            Menu
          </a>
        </nav>
        <section>
          <Box sx={{ px: { xs: "4rem", sm: "4rem", md: "3rem", lg: "6rem", xl: "12rem" } }}>
            <HomePage />
          </Box>
        </section>
      </div>
    </>
  );
}

export default App;
