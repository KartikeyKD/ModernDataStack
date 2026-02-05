import React, { useState } from 'react'
import FullLoad from "../advanceControls/FullLoad";
import IncrementalLoad from "../advanceControls/IncrementalLoad";
import ChunckLoad from "../advanceControls/ChunckLoad";
import Button from 'react-bootstrap/Button';
import Toast from 'react-bootstrap/Toast';
const AdvanceContainer = () => {
    const [showA, setShowA] = useState(false);
  const [showB, setShowB] = useState(false);
  const [showC, setShowC] = useState(false);

  const toggleShowA = () => {
    setShowB(false)
    setShowA(true)
    setShowC(false)
  };
  const toggleShowB = () => {
    setShowB(true)
    setShowA(false)
    setShowC(false)
};
  const toggleShowC = () => {
    setShowB(false)
    setShowA(false)
    setShowC(true)
  };
  return (
    <>
     <div className="container d-flex mt-2 my-3">
      <Button onClick={toggleShowA} className="mx-1 tabbuttons">
          <strong>Full Load</strong> 
        </Button>
      <Button onClick={toggleShowB} className="mx-1 tabbuttons">
          <strong>Incremental Load</strong> 
        </Button>
      <Button onClick={toggleShowC} className="mx-1 tabbuttons">
          <strong>Chunck Load</strong> 
        </Button>
        </div>
      <div className="container">
      <Toast onClose={toggleShowA} show={showA} animation={true} className="toastbody">
          <Toast.Header>
            
            <strong className="me-auto">Full Load</strong>
          </Toast.Header>
          <Toast.Body ><FullLoad/></Toast.Body>
        </Toast>
      <Toast onClose={toggleShowB} show={showB} animation={true} className="toastbody">
          <Toast.Header>
            
            <strong className="me-auto">Incremental Load</strong>
          </Toast.Header>
          <Toast.Body ><IncrementalLoad/></Toast.Body>
        </Toast>
      <Toast onClose={toggleShowC} show={showC} animation={true} className="toastbody">
          <Toast.Header>
            
            <strong className="me-auto">Chunk Load</strong>
          </Toast.Header>
          <Toast.Body ><ChunckLoad/></Toast.Body>
        </Toast>
             </div> 
    </>
  )
}

export default AdvanceContainer
