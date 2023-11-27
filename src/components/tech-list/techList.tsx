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
                    <div
                        className="icon"
                        style={{ "--svg" : `url(${item.svg})` } as React.CSSProperties}
                    />
                    <p className="name">{item.name}</p>
                </div>
            ))}
            </Marquee>
        </div>
    )
};