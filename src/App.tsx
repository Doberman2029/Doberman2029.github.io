import { useEffect } from "react";
import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
  useEffect(() => {
    WebApp.headerColor = "#933323";
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
        <button
          onClick={() =>
            WebApp.showPopup({ title: `Some title text`, message: "test" })
          }
        >
          Show Popup
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
