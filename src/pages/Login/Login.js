import { useContext } from "react";
import { Button } from "components/Button/Button";
import { ReactComponent as Google } from "images/icons/Google.svg";
import { FaGithub } from "react-icons/fa";
import "firebase/compat/auth";
import firebase from "firebase/compat/app";
import { Context } from "../../index";
import s from "./Login.module.scss";

const Login = (params) => {
  const { auth } = useContext(Context);

  const login = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  const loginWithGit = async () => {
    const provider = new firebase.auth.GithubAuthProvider();
    const { user } = await auth.signInWithPopup(provider);
  };

  return (
    <div className={s.container}>
      <Button onClick={login} style={{ marginBottom: "20px" }}>
        <Google className={s.icon} />
        Continue with Google
      </Button>

      <Button onClick={loginWithGit}>
        <FaGithub className={s.icon} />
        Continue with GitHub
      </Button>
    </div>
  );
};

export default Login;
