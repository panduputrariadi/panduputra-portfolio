import { NAV_LINKS, SOCIAL_LINKS } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const SideBarMenu = () => {
  return (
    <div>
        {NAV_LINKS.map((link, index) => (
              <div key={index}>
                <Link color="foreground" href={link.href}>
                  {link.label}
                </Link>
              </div>
            ))}
            <div className="flex justify-start items-center gap-4">
              {SOCIAL_LINKS.map((link, index) => (
                <div key={index}>
                  <Link
                    className="w-full lg:justify-start"
                    href={link.href}
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
                      <FaGithub
                        className="w-6 h-6"
                        style={{ color: "#4078c0" }}
                      />
                    )}
                  </Link>
                </div>
              ))}
            </div>
    </div>
  )
}

export default SideBarMenu