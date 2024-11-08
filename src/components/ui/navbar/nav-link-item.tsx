import  Link  from "next/link";
import { LucideIcon } from "lucide-react";

type NavLinkItemProps = { title: string; icon: LucideIcon; redirect: string };

const NavLinkItem = ({ title, icon, redirect }: NavLinkItemProps) => {
  const Icon = icon;

  return (
    <Link href={redirect} className="flex items-center justify-center gap-2">
      <Icon size={20} />
      <span>{title}</span>
    </Link>
  );
};

export default NavLinkItem;
