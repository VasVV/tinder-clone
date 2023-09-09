import "./Header.css";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const Header = () => {
  return (
    <table className='sticky-thc'>
      <thead>
        <tr>
          <th>
            <Link to='/profile'>
              <Button variant='outlined'>My Profile</Button>
            </Link>
          </th>
          <th>
            <Link to='/'>
              <Button variant='outlined' color='error'>
                Sign Out
              </Button>
            </Link>
          </th>
        </tr>
      </thead>
    </table>
  );
};

export default Header;
