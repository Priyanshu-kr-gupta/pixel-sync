import Block from "./Block";
import "../Css/Statistics.css"
function Statistics() {
  
  return (
    <div className="Stts">
      <h1>Statistics </h1>
        
          <div className='stats'>      
          <Block text="Revenue" width="280px" amount="25,00,000"  percent="+70%" color="#1b9c8"></Block>
          <Block text="Visits" width="230px" amount="2,359" symbol="" percent="-16%" color="#ff0060"></Block>
        <Block text="Results" width="230px" amount="6,789" symbol="" percent="+21%" color="#195bce"></Block>
        </div>
    </div>
  );
}

export default Statistics;