import React,{useRef} from 'react';
import {render} from "react-dom";
import { useReactToPrint } from 'react-to-print';



class ComponentToPrint extends React.Component {
    render() {
      return (
   <div>
     <div>
       
     </div>

   </div>     
        );
    }
}

const Example = () => {
    const componentRef = useRef();
    const handlePrint = useReactToPrint({
      content: () => componentRef.current,
    });
  
    return (
      <div>
        <ComponentToPrint ref={componentRef} />
        <button onClick={handlePrint}>Download File</button>
      </div>
    );
  };

  render(<Example/>,document.querySelector("#root"));
  
   export default  ComponentToPrint