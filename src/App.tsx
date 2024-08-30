import "./App.css";

import WebApp from "@twa-dev/sdk";

function App() {
  return (
    <>
      <div>
        <button onClick={() => WebApp.showAlert(`Some text`)}>
          Show Alert
        </button>
      </div>
    </>
  );
}

export default App;
