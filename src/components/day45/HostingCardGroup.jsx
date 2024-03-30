import React from "react";
import HostingCard from "./HostingCard";
import CartSvg from "../../asset/images/cart.svg";
import HardDriveSvg from "../../asset/images/hard-drive.svg";
import ServerSvg from "../../asset/images/server.svg";
import MouseSvg from "../../asset/images/mouse.svg";
import ScriptSvg from "../../asset/images/rss.svg";
import DomainSvg from "../../asset/images/window.svg";

const HostingCardGroup = () => {
  const facts = [
    {
      id: 1,
      icon: CartSvg,
      title: "E-commerce Features",
      description:
        "Support for online transactions, shopping carts, and secure payment gateways if you plan to run an online store.",
    },
    {
      id: 2,
      icon: HardDriveSvg,
      title: "Disk Space",
      description:
        "The amount of storage space provided for your website files, emails, databases, etc.",
    },
    {
      id: 3,
      icon: ServerSvg,
      title: "Server Location",
      description:
        "The physical location of the server hosting your website, which can affect page load times and SEO.",
    },
    {
      id: 4,
      icon: MouseSvg,
      title: "One-Click Installers",
      description:
        "Tools like Softaculous or Fantastico that simplify the installation of popular web applications like WordPress, Joomla, or Drupal.",
    },
    {
      id: 5,
      icon: ScriptSvg,
      title: "Script Support",
      description:
        "Support for programming languages and scripts such as PHP, Python, Perl and Ruby on Rails.",
    },
    {
      id: 6,
      icon: DomainSvg,
      title: "Domain Hosting",
      description:
        "The ability to host one or more domain names on the same hosting account.",
    },
  ];
  return (
    <div className="px-32 grid grid-cols-3 gap-y-8">
      {facts.map(({ id, icon, title, description }) => (
        <HostingCard
          key={id}
          icon={icon}
          title={title}
          description={description}
        />
      ))}
    </div>
  );
};

export default HostingCardGroup;
