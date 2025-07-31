import logo from "./Luma_Home.png";
import "./App.css";

function App() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        backgroundColor: "grey",
      }}
    >
      <img
        src={logo}
        alt="LumaHome Logo"
        style={{ height: "150px", width: "150px", marginTop: "20px" }}
      />
      <p>Sitemiz Yapım Aşamasındadır...</p>

      <footer style={{ color: "grey" }}>2025 © Tüm hakları saklıdır </footer>
    </div>
  );
}

export default App;
