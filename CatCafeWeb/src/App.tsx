import "./index.css";

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

        <main>
          {/* Section 1: Odd (White to Cream) */}
          <section>
            <div className="container">
              <h1>Welcome to Capurrchino</h1>
              <p>A cozy place for coffee and cats. (16px base text)</p>
            </div>
          </section>

          {/* Section 2: Even (Cream to White) */}
          <section>
            <div className="container">
              <h2>Meet our furry friends</h2>
              <p className="cat-description">Mittens is very friendly and loves lattes. (12px text)</p>
            </div>
          </section>

          {/* Section 3: Odd (White to Cream) */}
          <section>
            <div className="container">
              <h3>Cat of the week</h3>
              <p>Our featured friend is Luna!</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
}

export default App;
