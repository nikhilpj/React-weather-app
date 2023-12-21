import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import './forecast.css'
const forcast = ({data})=>{
    let time =[]
     time = data.list.slice(0,7).map((item)=>
         item.dt_txt
    )
    console.log(time)
    return (<>
    <label className="daily-forcast"> 3 hr forcast</label>
    <Accordion allowZeroExpanded >
        {data.list.slice(0,7).map((item,index)=>(
            <AccordionItem key={index}>
                <AccordionItemHeading>
                    <AccordionItemButton>
                        <div className="daily-item">
                            <img alt="weather" src={`icons/${item.weather[0].icon}.png`} className="icon-small"/>

                       
                        <label className="time">{time[index]}</label>
                        <label className="description">{item.weather[0].description}</label>
                        <label className="min-max">{Math.round(item.main.temp_min)}°C/{Math.round(item.main.temp_max)}°C</label>
                        </div>
                    </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                    <div className="daily-details-grid">
                        <div className="daily-details-grid-item">
                            <label >pressure</label>
                            <label>{item.main.pressure} hPa</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label >Humidity</label>
                            <label>{item.main.humidity}%</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label >Clouds</label>
                            <label>{item.clouds.all}%</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label >Wind speed</label>
                            <label>{item.wind.speed} m/s</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label >Sea level</label>
                            <label>{item.main.sea_level} m</label>
                        </div>
                        <div className="daily-details-grid-item">
                            <label >Feels like</label>
                            <label>{Math.round(item.main.feels_like)}°C</label>
                        </div>

                    </div>
                </AccordionItemPanel>
            </AccordionItem>
        ))}
    </Accordion>
    </>)
}
export default forcast