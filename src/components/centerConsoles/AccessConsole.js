import React, { useEffect } from "react";

function AccessConsole(props) {
  useEffect(() => {
    props.setside("block");
    props.setNav("block");
    props.setColor1("#12262e");
    props.setColor2("#12262e");
    props.setColor3("#12262e");
    props.setColor4("#23434f");
    props.setColor5("#12262e");
  }, [props]);
  return (
    <div>
      <h1>Access Control Console</h1>
    </div>
  );
}

export default AccessConsole;
