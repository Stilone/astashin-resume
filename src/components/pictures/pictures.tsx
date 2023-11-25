import "./pictures.scss";
import Tilt from 'react-parallax-tilt';

//Appreciate the awesome tilt library! Check it out here: https://www.npmjs.com/package/react-parallax-tilt

export const Pictures = () => {
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
          <img src={`../../../img/${item}.jpg`} alt={`picture-${index}`} />
          </Tilt>
        
        
      ))}
    </div>
  );
};