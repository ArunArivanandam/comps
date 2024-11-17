import Button from "../components/Button";
import { GoBell } from "react-icons/go";
import { GoAlert } from "react-icons/go";

function ButtonPage() {
  const handleClick = () => {};
  return (
    <div>
      <div>
        <Button primary onClick={handleClick} className="mb-5">
          <GoBell />
          Primary
        </Button>
      </div>
      <div>
        <Button secondary rounded onMouseEnter={handleClick}>
          <GoAlert />
          Secodary
        </Button>
      </div>
      <div>
        <Button success rounded>
          User Registration
        </Button>
      </div>
      <div>
        <Button outline rounded primary>
          Login
        </Button>
      </div>
    </div>
  );
}

export default ButtonPage;
