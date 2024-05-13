import { SOCIAL_LINKS } from '@/constant/constant'
import Link from 'next/link'
import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa'

const EndMenuNavbar = () => {
  return (
    <section className="flex items-center gap-4">
          <div className="flex items-center gap-4">
            {SOCIAL_LINKS.map((link, index) => (
              <div key={index} className="hidden lg:flex">
                <Link
                  className="flex w-full justify-center lg:justify-start"
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
        </section>
  )
}

export default EndMenuNavbar