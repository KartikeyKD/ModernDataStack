import "./App.css";
import Navbar from "./components/elements/Navbar";
import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SideMenu from "./components/elements/SideMenu";
import ConnectorConsole from "./components/centerConsoles/ConnectorConsole";
import FilesConnector from "./components/connectors/FilesConnector";
import LoginPage from "./components/elements/LoginPage";
import ConfigConnectorConsole from "./components/centerConsoles/ConfigConnectorConsole";
import DatabricksConsole from "./components/centerConsoles/DatabricksConsole";
import AccessConsole from "./components/centerConsoles/AccessConsole";
import InfrastructureConsole from "./components/centerConsoles/InfrastructureConsole";
import LoadingBar from "react-top-loading-bar";
import Alert from "./components/elements/Alert";
import DataIngestion from "./components/centerConsoles/DataIngestion";
import NotFound from "./components/NotFound";

function App() {
  const [side, setSide] = useState("block");
  const [color1, setColor1] = useState("");
  const [color2, setColor2] = useState("");
  const [color3, setColor3] = useState("");
  const [color4, setColor4] = useState("");
  const [color5, setColor5] = useState("");
  const [nav, setNav] = useState("block");
  const [key, setKey] = useState();
  const [userName, setUserName] = useState("");
  const [utype, setUType] = useState("");
  const [adminControl, setAdminControl] = useState("");
  let [progress, setProgress] = useState(0);
  const infra = () => {
    setColor1("#12262e");
    setColor2("#12262e");
    setColor3("#12262e");
    setColor4("#12262e");
    setColor5("#23434f");
  };

  return (
    <>
      <Router>
        <Navbar nav={nav} setNav={setNav} userName={userName} />
        <LoadingBar height={4} color="#00AF90" progress={progress} />
        <SideMenu
          color1={color1}
          color2={color2}
          color3={color3}
          color4={color4}
          color5={color5}
          side={side}
          infra={infra}
        />

        <div className="centerconsole">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <LoginPage
                  userName={userName}
                  setProgress={setProgress}
                  key={key}
                  setKey={setKey}
                  setUserName={setUserName}
                  setside={setSide}
                  setNav={setNav}
                  setUType={setUType}
                  type={utype}
                />
              }
            />
            <Route
              exact
              path="/ConfigConnectors"
              element={
                <ConfigConnectorConsole
                  setColor1={setColor1}
                  setColor2={setColor2}
                  setColor3={setColor3}
                  setColor4={setColor4}
                  setColor5={setColor5}
                  setside={setSide}
                  setNav={setNav}
                  setProgress={setProgress}
                />
              }
            />
            <Route
              exact
              path="/connectors"
              element={
                <ConnectorConsole
                  adminControl={adminControl}
                  setside={setSide}
                  setNav={setNav}
                  setColor1={setColor1}
                  setColor2={setColor2}
                  setColor3={setColor3}
                  setColor4={setColor4}
                  setColor5={setColor5}
                />
              }
            />
            <Route
              exact
              path="/DataIngestion"
              element={
                <DataIngestion
                  adminControl={adminControl}
                  setside={setSide}
                  setNav={setNav}
                  setColor1={setColor1}
                  setColor2={setColor2}
                  setColor3={setColor3}
                  setColor4={setColor4}
                  setColor5={setColor5}
                />
              }
            />
            <Route
              exact
              path="/DatabricksConnection"
              element={
                <DatabricksConsole
                  setside={setSide}
                  setNav={setNav}
                  setColor1={setColor1}
                  setColor2={setColor2}
                  setColor3={setColor3}
                  setColor4={setColor4}
                  setColor5={setColor5}
                />
              }
            />
            <Route
              exact
              path="/AccessControl"
              element={
                <AccessConsole
                  setside={setSide}
                  setNav={setNav}
                  setColor1={setColor1}
                  setColor2={setColor2}
                  setColor3={setColor3}
                  setColor4={setColor4}
                  setColor5={setColor5}
                />
              }
            />
            <Route
              exact
              path="/Infrastructure"
              element={
                <InfrastructureConsole
                  setside={setSide}
                  setNav={setNav}
                  setColor1={setColor1}
                  setColor2={setColor2}
                  setColor3={setColor3}
                  setColor4={setColor4}
                  setColor5={setColor5}
                />
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
