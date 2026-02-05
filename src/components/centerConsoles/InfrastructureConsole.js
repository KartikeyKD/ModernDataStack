import React, { useEffect } from "react";

function InfrastructureConsole(props) {
  useEffect(() => {
    props.setside("block");
    props.setNav("block");
    props.setColor1("#12262e");
    props.setColor2("#12262e");
    props.setColor3("#12262e");
    props.setColor4("#12262e");
    props.setColor5("#23434f");
  }, []);

  return (
    <div>
      <h1>Infrastructure Console page</h1>
    </div>
  );
}

export default InfrastructureConsole;
