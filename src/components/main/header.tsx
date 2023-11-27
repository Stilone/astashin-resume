import { LinkIcons } from "./icons/link-icons";
import { TypeAnimation } from 'react-type-animation';
import "./header.scss";
import { typingMock } from "../../../__mock__/mock-icons";

//Thanks for the excellent text display library! Find it here: https://github.com/maxeth/react-type-animation

export const Header = () => {
    return (
    <div className="header">
        <span className="name">Astashin Dmitry</span>
        <TypeAnimation
          sequence={typingMock}
          wrapper="p"
          speed={10}
          className="post"
          repeat={Infinity}
        />
        <LinkIcons />
    </div>
    )
};