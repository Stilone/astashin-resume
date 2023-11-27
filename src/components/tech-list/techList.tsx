import Marquee from "react-fast-marquee";
import { tech } from "../../../__mock__/mock-icons";
import { techList } from "../../../__types__/globalTypes";
import "./techList.scss"
import { useEffect, useState } from "react";

//Thanks for the fantastic text marquee library! Find it here: https://www.react-fast-marquee.com/documentation/#gradient
type Gradient = true | false;

export const TechList = () => {
    const [gradient, setGradient] = useState<Gradient>(true);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth < 450) {
            setGradient(false);
          } else {
            setGradient(true);
          }
        };
    
        // Вызываем функцию при загрузке и изменении размера окна
        handleResize();
    
        window.addEventListener("resize", handleResize);
    
        // Удаляем обработчик события при размонтировании компонента
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);
    
    return (
        <div className="techIcons">
            <Marquee gradient={gradient} gradientColor={"#161616"} >
            {tech.map((item: techList) => (
                <div className="techIcon" key={item.name}>
                    <svg xmlns="http://www.w3.org/2000/svg"
                        width={item.name === "Framer Motion"? "25": "45"}
                        height="40" 
                        viewBox={item.name === "Framer Motion"? "0 0 25 40": "0 0 45 40"}
                        fill="none">
                        <path d={item.img}
                        fill="#E5E5E5"/>
                    </svg>
                    <p className="techName">{item.name}</p>
                </div>
            ))}
            </Marquee>
        </div>
    )
};