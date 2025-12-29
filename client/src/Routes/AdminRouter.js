import { Navigate, Outlet } from 'react-router-dom';
import { useSelector } from 'react-redux';

const AdminRoute = () => {
  const user = useSelector((state) => state.user.user);

  if (!user ) return <Navigate to="/login" />;
  if (user.role !== "admin") return <Navigate to="/" />;

  return <Outlet />;
};
export default AdminRoute;