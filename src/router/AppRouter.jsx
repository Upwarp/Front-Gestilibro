import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import PrivateRoute from "./PrivateRoute";
import RoleRoute from "./RoleRoute";
import RoleHome from "./RoleHome";

import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";

import CategoriesList from "../pages/categories/CategoriesList";
import CategoryCreate from "../pages/categories/CategoryCreate";
import CategoryEdit from "../pages/categories/CategoryEdit";

import BooksList from "../pages/books/BooksList";
import BookCreate from "../pages/books/BookCreate";
import BookEdit from "../pages/books/BookEdit";

import UsersList from "../pages/users/UsersList";
import UserCreate from "../pages/users/UserCreate";
import UserEdit from "../pages/users/UserEdit";

import LoansList from "../pages/loans/LoansList";
import LoanCreate from "../pages/loans/LoanCreate";
import LoanEdit from "../pages/loans/LoanEdit";

const ADMIN = ["administrador"];
const STAFF = ["administrador", "bibliotecario"];
const ALL_AUTH = ["administrador", "bibliotecario", "estudiante"];

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<RoleHome />} />

          <Route
            path="/dashboard"
            element={
              <RoleRoute allowedRoles={STAFF}>
                <Dashboard />
              </RoleRoute>
            }
          />

          <Route
            path="/usuarios"
            element={
              <RoleRoute allowedRoles={ADMIN}>
                <UsersList />
              </RoleRoute>
            }
          />

          <Route
            path="/usuarios/nuevo"
            element={
              <RoleRoute allowedRoles={ADMIN}>
                <UserCreate />
              </RoleRoute>
            }
          />

          <Route
            path="/usuarios/editar/:id"
            element={
              <RoleRoute allowedRoles={ADMIN}>
                <UserEdit />
              </RoleRoute>
            }
          />

          <Route
            path="/categorias"
            element={
              <RoleRoute allowedRoles={ADMIN}>
                <CategoriesList />
              </RoleRoute>
            }
          />

          <Route
            path="/categorias/nueva"
            element={
              <RoleRoute allowedRoles={ADMIN}>
                <CategoryCreate />
              </RoleRoute>
            }
          />

          <Route
            path="/categorias/editar/:id"
            element={
              <RoleRoute allowedRoles={ADMIN}>
                <CategoryEdit />
              </RoleRoute>
            }
          />

          <Route
            path="/libros"
            element={
              <RoleRoute allowedRoles={ALL_AUTH}>
                <BooksList />
              </RoleRoute>
            }
          />

          <Route
            path="/libros/nuevo"
            element={
              <RoleRoute allowedRoles={STAFF}>
                <BookCreate />
              </RoleRoute>
            }
          />

          <Route
            path="/libros/editar/:id"
            element={
              <RoleRoute allowedRoles={STAFF}>
                <BookEdit />
              </RoleRoute>
            }
          />

          <Route
            path="/prestamos"
            element={
              <RoleRoute allowedRoles={ALL_AUTH}>
                <LoansList />
              </RoleRoute>
            }
          />

          <Route
            path="/prestamos/nuevo"
            element={
              <RoleRoute allowedRoles={ALL_AUTH}>
                <LoanCreate />
              </RoleRoute>
            }
          />

          <Route
            path="/prestamos/editar/:id"
            element={
              <RoleRoute allowedRoles={STAFF}>
                <LoanEdit />
              </RoleRoute>
            }
          />

          <Route path="*" element={<RoleHome />} />
        </Route>

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </BrowserRouter>
  );
}
