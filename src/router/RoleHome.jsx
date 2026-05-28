import { Navigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";

export default function RoleHome() {
  const { rol } = useAuthUser();

  if (rol === "estudiante") {
    return <Navigate to="/libros" replace />;
  }

  return <Navigate to="/dashboard" replace />;
}
