import React from "react";

import { AiFillHome, AiOutlineFlag } from "react-icons/ai";
import { MdLocalFireDepartment, MdLiveTv } from "react-icons/md";
import { CgMusicNote } from "react-icons/cg";
import { FiFilm } from "react-icons/fi";
import { IoGameControllerSharp } from "react-icons/io5";
import { ImNewspaper } from "react-icons/im";
import { GiDiamondTrophy, GiEclipse } from "react-icons/gi";
import { RiLightbulbLine, RiFeedbackLine } from "react-icons/ri";
import { FiSettings, FiHelpCircle } from "react-icons/fi";

export const topics = [
    { name: "New", icon: <AiFillHome />, type: "home" },
    { name: "Trending", icon: <MdLocalFireDepartment />, type: "categories" },
    { name: "Music", icon: <CgMusicNote />, type: "categories" },
    { name: "Films", icon: <FiFilm />, type: "categories" },
    { name: "Live", icon: <MdLiveTv />, type: "categories" },
    { name: "Gaming", icon: <IoGameControllerSharp />, type: "categories" },
    { name: "News", icon: <ImNewspaper />, type: "categories" },
    { name: "Sports", icon: <GiDiamondTrophy />, type: "categories" },
    { name: "Learning", icon: <RiLightbulbLine />, type: "categories" },
    {
        name: "Fashion & beauty",
        icon: <GiEclipse />,
        type: "categories",
        divider: true,
    },
    { name: "Settings", icon: <FiSettings />, type: "menu" },
    { name: "Report History", icon: <AiOutlineFlag />, type: "menu" },
    { name: "Help", icon: <FiHelpCircle />, type: "menu" },
    { name: "Send feedback", icon: <RiFeedbackLine />, type: "menu" },
];
