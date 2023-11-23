import Logo from "./Logo";
import { Spacer, Icon } from "actify";
import { Minimize, Maximize, Quit } from "./../wailsjs/go/main/App";

const Header = () => {
  const minimize = async () => {
    await Minimize();
  };
  const maximize = async () => {
    await Maximize();
  };
  const close = async () => {
    await Quit();
  };

  return (
    <header
      onDoubleClick={maximize}
      style={{ "--wails-draggable": "drag" }}
      className="bg-surface h-10 shadow px-2 flex items-center justify-between"
    >
      <Logo />
      <Spacer />
      <div className="flex gap-2">
        <div className="group h-10 w-10 cursor-pointer hover:bg-secondary grid place-content-center">
          <Icon
            name="minus"
            onClick={minimize}
            className="group-hover:text-white"
          />
        </div>
        <div className="group h-10 w-10 cursor-pointer hover:bg-secondary grid place-content-center">
          <Icon
            name="maximize"
            onClick={maximize}
            className="group-hover:text-white"
          />
        </div>
        <div className="group h-10 w-10 cursor-pointer hover:bg-error grid place-content-center">
          <Icon
            name="x"
            onClick={close}
            className="group-hover:text-white"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;
