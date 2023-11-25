import { icons } from "../../../../__mock__/mock-icons";
import { IconList } from "../../../../__types__/globalTypes";
import "./linkIcons.scss";

export const LinkIcons = () => {
    return (
        <div className="linkIcons">
            {icons.map((item: IconList) => (
                <a href={item.link} key={item.name} className="linkIcon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="37" height="37" viewBox="0 0 37 37" fill="none">
                        <path d={item.img} fill="#E5E5E5"/>
                    </svg>
                </a>
            ))}
        </div>
    )
};
