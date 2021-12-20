import Chart from "./chart/Chart"
import FeaturedInfo from "./featuredInfo/FeaturedInfo"
import "./home.css"
import { userData } from "./chart/dummyData"
import  PieChart from "./piechart/PieChart"

// import WidgetSm from "../../component/widgetSm/WidgetSm"
// import WidgetLg from "../../component/widgetLg/WidgetLg"

export default function Home(){
    return(
        <div className="home">
          <FeaturedInfo/>
          <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
          <div className="piechart">
              <PieChart/>
          </div>
          {/* <div className="homeWidgets">
              <WidgetSm/>
              <WidgetLg/>
          </div> */}
          </div>
    )
}