import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";


export const SidebarData = [
  {
    title: "Menú principal",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Ajustes",
    path: "/ajustes",
    icon: <FaIcons.FaCog />,
    cName: "nav-text",
  },
  {
    title: "Personas",
    path: "/personas",
    icon: <FaIcons.FaUserPlus />,
    cName: "nav-text",
  },
  {
    title: "Perfiles",
    path: "/perfiles",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "Sucursales",
    path: "/sucursales",
    icon: <FaIcons.FaWarehouse/>,
    cName: "nav-text",
  },
  {
    title: "Usuarios",
    path: "/usuarios",
    icon: <FaIcons.FaUserCircle/>,
    cName: "nav-text",
  },
  {
    title: "Cerrar Sesión",
    path: "/cerrar",
    icon: <FaIcons.FaDoorOpen />,
    cName: "nav-text",
  },
  
];
