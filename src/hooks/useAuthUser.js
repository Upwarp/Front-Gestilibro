/**
 * useAuthUser – lee el usuario autenticado de localStorage.
 * Retorna:
 *   authUser : { nombreCompleto, rol, foto, id, nombre, apellido }
 *   rawUser  : objeto crudo guardado en localStorage
 *   rol      : string normalizado en minúsculas
 *   canManage: boolean (administrador o bibliotecario)
 */
export function useAuthUser() {
  let rawUser = null;

  try {
    const stored = localStorage.getItem("user");
    rawUser = stored ? JSON.parse(stored) : null;
  } catch {
    rawUser = null;
  }

  const authUser = {
    nombreCompleto: rawUser
      ? `${rawUser.nombre ?? ""} ${rawUser.apellido ?? ""}`.trim()
      : "Usuario",
    rol: rawUser?.rol || "Sin rol",
    foto: "/images/usuario.jpg",
    id: rawUser?.id_usuario ?? rawUser?.id ?? null,
    nombre: rawUser?.nombre ?? "",
    apellido: rawUser?.apellido ?? "",
  };

  const rol = String(authUser.rol || "").trim().toLowerCase();

  const canManage = ["administrador", "bibliotecario"].includes(rol);

  return { authUser, rawUser, rol, canManage };
}
