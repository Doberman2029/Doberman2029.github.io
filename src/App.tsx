import { useEffect } from "react";
import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
  useEffect(() => {
    WebApp.MainButton.setParams({
      text_color: "#C3C3",
      text: "Custom text",
      is_active: true,
      is_visible: true,
    });
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
