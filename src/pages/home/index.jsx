import Premium from "../../components/premium/Premium";
import Cards from "./Cards";
import cardData from '../../assets/data/cardData'
import Graph from "./Graph";
import InstalledApps from "./InstalledApps";

const Home = () => {
  return ( <>
    <div className="p-[32px] bg-gray-100 min-h-svh" >
        <div className="w-full">
            <Premium/>
        </div>
        <div className="flex flex-wrap justify-between gap-2 py-[32px]">
           {cardData.map((element)=>{
            return(
              <div key={element.title}>
                <Cards bg={element.bg} title={element.title} from={element.from} number={element.number} percent={element.percent}/>
              </div>
            )
           }
           )}
        </div>
        <div>
          <Graph/>
        </div>
        <div>
          <InstalledApps/>
        </div>
    </div>
  </>);
};
export default Home;
