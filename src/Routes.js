import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ConnectorConsole from "./components/ConnectorConsole";

function Routes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/connector" exact component={ConnectorConsole} />
        {/* <Route path="/page-1" component={Page1}/>
                <Route path="/page-2" component={Page2}/>
                <Route path="/page-3" component={Page3}/>
                <Route component={NotFound}/> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Routes;
