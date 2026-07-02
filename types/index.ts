import { LucideIcon } from "lucide-react";

export type Language = "ID" | "EN";

export interface NavItem {
    key: string;
    href: string;
    icon: LucideIcon;
}