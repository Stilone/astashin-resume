import { motion } from "framer-motion";
import { icons } from "../../../../__mock__/mock-icons";
import { IconList } from "../../../../__types__/globalTypes";
import "./linkIcons.scss";

export const LinkIcons = () => {
    const handleLinkClick = (link: string) => {
        const confirmResult = window.confirm("Перейти по ссылке?");
        if (confirmResult) {
            window.location.href = link;
        }
    };

    return (
        <div className="linkIcons">
            {icons.map((item: IconList) => (
                <div className="linkIcon" key={item.name}>
                    <motion.div
                        className="icon"
                        whileHover={{ scale: 1.1 }} // Увеличение при наведении
                        whileTap={{ scale: 0.9 }}   // Уменьшение при клике
                        onClick={() => handleLinkClick(item.link)}
                        style={{ "--svg" : `url(${item.svg})` } as React.CSSProperties}
                    />
                </div>
            ))}
        </div>
    );
};