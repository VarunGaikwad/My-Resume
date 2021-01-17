import Header from "../Header/Header";
import "./Welcome.css";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
const Welcome = () => {
  return (
    <div className="Welcome">
      <Header />
      <div className="Welcome__Title">
        My Name is Varun Gaikwad <br /> I'm a SAP UI5 / Fiori Developer
      </div>
      <div className="Welcome__Footer">
        <ExpandMoreIcon />
      </div>
    </div>
  );
};

export default Welcome;
