import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  NextUIProvider,
} from "@nextui-org/react";
import { NAV_LINKS, SOCIAL_LINKS } from "@/constant/constant";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <p className="font-bold text-inherit text-2xl">
            Pandu<span className="text-blue-600">Putra</span>
          </p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-10" justify="center">
        {NAV_LINKS.map((link, index) => (
          <NavbarItem key={index}>
            <Link color="foreground" href={link.href}>
              {link.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarContent justify="end">
        {SOCIAL_LINKS.map((link, index) => (
          <NavbarItem key={index} className="hidden lg:flex">
            <Link
              className="flex w-full justify-center lg:justify-start"
              href={link.href}
              size="lg"
              style={{ color: "black" }}
            >
              {link.label === "LinkedIn" && (
                <FaLinkedin className="w-6 h-6" style={{ color: "#0077B5" }} />
              )}
              {link.label === "Instagram" && (
                <FaInstagram className="w-6 h-6" style={{ color: "#E4405F" }} />
              )}
              {link.label === "Github" && (
                <FaGithub className="w-6 h-6" style={{ color: "#4078c0" }} />
              )}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>
      <NavbarMenu>
        {NAV_LINKS.map((link, index) => (
          <NavbarMenuItem key={index}>
            <Link
              className="w-full"
              href={link.href}
              size="lg"
              style={{ color: "black" }}
            >
              {link.label}
            </Link>
          </NavbarMenuItem>
        ))}
        <div className="flex gap-3">
          {SOCIAL_LINKS.map((link, index) => (
            <NavbarMenuItem key={index}>
              <Link
                className="flex w-full justify-center lg:justify-start"
                href={link.href}
                size="lg"
                style={{ color: "black" }}
              >
                {link.label === "LinkedIn" && (
                  <FaLinkedin
                    className="w-6 h-6"
                    style={{ color: "#0077B5" }}
                  />
                )}
                {link.label === "Instagram" && (
                  <FaInstagram
                    className="w-6 h-6"
                    style={{ color: "#E4405F" }}
                  />
                )}
                {link.label === "Github" && (
                  <FaGithub className="w-6 h-6" style={{ color: "#4078c0" }} />
                )}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </Navbar>
  );
}
