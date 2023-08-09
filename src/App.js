import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { RevolvingDot } from "react-loader-spinner";
import Main from "pages/Main/Main";
import Login from "pages/Login/Login";
import { Context } from "./index";
import "./App.css";
import "./index.css";

function App() {
  const { auth } = useContext(Context);
  const [user, loading] = useAuthState(auth);
  const shouldRedirect = true;

  if (loading) {
    return (
      <RevolvingDot
        height={100}
        width={100}
        color="#4242ee"
        secondaryColor="#f5f5cd"
        ariaLabel="revolving-dot-loading"
        wrapperStyle={{
          position: "absolute",
          top: "50%",
          left: "50%",
          marginRight: "-50%",
          transform: "translate(-50%, -50%)",
        }}
        visible={true}
      />
    );
  }

  return (
    <div className="App">
      {user ? (
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route
            path="/login"
            element={shouldRedirect && <Navigate replace to="/" />}
          />
        </Routes>
      ) : (
        <Routes>
          <Route
            exact
            path="/"
            element={shouldRedirect && <Navigate replace to="/login" />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      )}
    </div>
  );
}

export default App;
