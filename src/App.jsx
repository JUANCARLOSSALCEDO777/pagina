import "./App.css";
import Header from "./components/Header/Header.jsx";
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {

  const { unityProvider } = useUnityContext({
    loaderUrl : "build/build.loader.js",
    dataUrl : "build/build.data",
    frameworkUrl : "build/build.framework.js",
    codeUrl : "build/build.wasm",
  });

  return (
    <div className="App">
      <Header />
      <Unity unityProvider={unityProvider} style={ { width : 800 , height: 600, border : "3px solid white" } } />
    </div>
  );
}

export default App;
