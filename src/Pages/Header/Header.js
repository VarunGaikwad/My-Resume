import './Header.css';
import MenuIcon from '@material-ui/icons/Menu';
const Header = () => {
  return (
    <div className="Header">
      <div className="Header__First">
        <p>VARUN</p>
      </div>
      <div className="Header__Middle">
        <ul><a href="/#">HOME</a></ul>
        <ul><a href="/#">RESUME</a></ul>
        <ul><a href="/#">EXPERIENCE</a></ul>
      </div>
      <div className="Header__Last">
        <MenuIcon />
      </div>
    </div>
  );
}

export default Header;
