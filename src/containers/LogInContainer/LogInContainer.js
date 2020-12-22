import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";
import useAppContext from "../../context/useAppContext";

export default function LogInContainer() {
  const { uiConfig, isSignedIn } = useAppContext();

  if (!isSignedIn) {
    return (
      <div>
        {/* <h1>My App</h1>
        <p>Please sign-in:</p> */}
        <StyledFirebaseAuth
          uiConfig={uiConfig}
          firebaseAuth={firebase.auth()}
        />
      </div>
    );
  }
  return (
    <div>
      <h1>My App</h1>
      <p>Welcome ! You are now signed-in!</p>
      <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
    </div>
  );
}
