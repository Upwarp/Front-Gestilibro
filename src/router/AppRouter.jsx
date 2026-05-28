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

export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Navigate to="/dashboard" replace />} />

          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/categorias" element={<CategoriesList />} />
          <Route path="/categorias/nueva" element={<CategoryCreate />} />
          <Route path="/categorias/editar/:id" element={<CategoryEdit />} />

          <Route path="/libros" element={<BooksList />} />
          <Route path="/libros/nuevo" element={<BookCreate />} />
          <Route path="/libros/editar/:id" element={<BookEdit />} />

          <Route path="/usuarios" element={<UsersList />} />
          <Route path="/usuarios/nuevo" element={<UserCreate />} />
          <Route path="/usuarios/editar/:id" element={<UserEdit />} />

          <Route path="/prestamos" element={<LoansList />} />
          <Route path="/prestamos/nuevo" element={<LoanCreate />} />
          <Route path="/prestamos/editar/:id" element={<LoanEdit />} />
        </Route>

        <Route
          path="*"
          element={
            localStorage.getItem("token")
              ? <Navigate to="/dashboard" replace />
              : <Navigate to="/login" replace />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
