import { Navigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";

export default function RoleRoute({
  allowedRoles,
  children,
  redirectTo = "/libros",
}) {
  const { rol } = useAuthUser();

  if (!allowedRoles.includes(rol)) {
    return <Navigate to={redirectTo} replace />;
  }

  return children;
}
