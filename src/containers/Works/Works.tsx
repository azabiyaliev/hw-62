import { NavLink } from 'react-router-dom';


const Works = () => {
  return (
    <div className="mt-5">
      <NavLink className="btn btn-outline-secondary text-decoration-none mt-5 p-2" to='/CountriesTask'>Работа со странами</NavLink>
      <NavLink className="btn btn-outline-secondary text-decoration-none mt-5 ms-4 p-2" to='/Chat'>Работа с чатом</NavLink>
    </div>
  );
};

export default Works;