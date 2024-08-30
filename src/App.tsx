import { useEffect } from "react";
import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
  useEffect(() => {
    WebApp.headerColor = "#93F323";
    WebApp.MainButton.show();
    WebApp.MainButton.setParams({
      text_color: "#C3C3",
      text: "Custom text",
      is_active: true,
      is_visible: true,
    });
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
        <button onClick={() => WebApp.showAlert(`Some text`)}>
          Show Alert
        </button>
        <button
          onClick={() => {
            WebApp.BackButton.show();
            WebApp.BackButton.onClick(() => {
              WebApp.BackButton.hide();
              WebApp.headerColor = "#9FF";
            });
          }}
        >
          Show back
        </button>
      </div>
    </>
  );
}

export default App;
