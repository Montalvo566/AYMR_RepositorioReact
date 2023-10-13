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
    path: "/ajsutes",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "Personas",
    path: "/personas",
    icon: <FaIcons.FaCartPlus />,
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
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "Usuarios",
    path: "/usuarios",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
  {
    title: "Cerrar Sesión",
    path: "/cerrar",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },

  
];
