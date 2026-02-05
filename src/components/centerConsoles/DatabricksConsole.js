import React, { useEffect } from "react";

function DatabricksConsole(props) {
  useEffect(() => {
    props.setside("block");
    props.setNav("block");
    props.setColor1("#12262e");
    props.setColor2("#12262e");
    props.setColor3("#23434f");
    props.setColor4("#12262e");
    props.setColor5("#12262e");
  }, [props]);

  return (
    <div>
      <h1>DataBricks Connection page</h1>
    </div>
  );
}

export default DatabricksConsole;
