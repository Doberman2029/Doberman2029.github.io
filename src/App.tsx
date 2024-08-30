import { useEffect } from "react";
import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
  useEffect(() => {
    WebApp.headerColor = "#FF3232";
  });

  return (
    <>
      <div>
        <button onClick={() => WebApp.showAlert(`Some text`)}>
          Show Alert
        </button>
        <button
          onClick={() =>
            WebApp.openTelegramLink(
              "https://t.me/TestAqwelkjbresATgAppBot/TestTgAppShortNameAqwelkjbres",
            )
          }
        >
          test open
        </button>
      </div>
    </>
  );
}

export default App;
