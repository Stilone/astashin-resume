import { motion } from "framer-motion";
import "./pictures.scss";
import Tilt from 'react-parallax-tilt';

//Appreciate the awesome tilt library! Check it out here: https://www.npmjs.com/package/react-parallax-tilt

export const Pictures = () => {
  const upVariants = {
    initial: { y: -100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: 100, opacity: 0 },
  };

  const downVariants = {
    initial: { y: 100, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    exit: { y: -100, opacity: 0 },
  };

  return (
    <div className="pictures-container">
      {["first", "second", "third"].map((item, index) => (
          <Tilt
            key={item}
            className={`pictures ${item}-image`}
            tiltReverse={true}
            glareEnable={true}
            glareMaxOpacity={0.5}
            glareColor="#161616"
            glarePosition="all"
          >
            <motion.img
              initial="initial"
              animate="animate"
              exit="exit"
              variants={index === 0 || index === 2? upVariants: downVariants}
              transition={{ duration: 0.6, ease: "easeInOut" }} 
              src={`https://sun9-18.userapi.com/impg/qVS4ju0eBW8-uvOeVJtLDWkfJ6PrhC3p83vC6g/_n4Qn5od4Dc.jpg?size=905x905&quality=95&sign=9ba09037e7e32a0188e669b95d3a538a&type=album`} alt={`picture-${index}`} />
          </Tilt>
        
        
      ))}
    </div>
  );
};