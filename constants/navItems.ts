import {
    House,
    User,
    Code2,
    Award,
    FolderGit2,
    Mail,
    Building2,
} from "lucide-react";

import { NavItem } from "@/types";

export const navItems: NavItem[] = [
    {
        key: "home",
        href: "#home",
        icon: House,
    },
    {
        key: "about",
        href: "#about",
        icon: User,
    },
    {
        key: "skills",
        href: "#skills",
        icon: Code2,
    },
    {
        key: "certificate",
        href: "#certificate",
        icon: Award,
    },
    {
        key: "experience",
        href: "#experience",
        icon: Building2,
    },
    {
        key: "projects",
        href: "#projects",
        icon: FolderGit2,
    },
    {
        key: "contact",
        href: "#contact",
        icon: Mail,
    },
];