import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoHeader from "../../public/images/logo-header.png";
import Styles from "./styles.module.scss";
import { FaFacebookSquare, FaTwitter, FaInstagram } from "react-icons/fa";

const links = [
    {
        slug: '/',
        title: 'home',
        active: true,
    },
    {
        slug: '/About Us',
        title: 'About Us'
    },
    {
        slug: '/Blog',
        title: 'Blog'
    },
    {
        slug: '/FAQs',
        title: 'FAQs'
    },
    {
        slug: '/Contact Us',
        title: 'Contact Us'
    }
]

export default function Footer() {
    return (
        <footer className={Styles.footer}>
            <div className={Styles["footer-logo"]}>
                <div className={Styles["footer-logo-image"]}>
                    <Image
                        src={logoHeader}
                        alt="logo-Header-image"
                    />
                </div>
                <div className={Styles["footer-signup"]}>
                    <h5 className={Styles["footer-signup-title"]}>
                        Connect with us.
                    </h5>
                    <p className={Styles["footer-signup-desc"]}>
                        Join +100,000 users that trust us today.
                    </p>
                    <Link href='/sign-in'>
                        <a className={Styles["footer-signup-btn"]} >
                            Create an account
                        </a>
                    </Link>
                </div>
            </div>

            <div className={Styles["footer-links"]}>
                <nav>
                    <ul className={Styles["footer-links-list"]}>
                        {links.map((link) => (
                            <li key={link.title}>
                                <Link href={`${link.slug}`} >
                                    <a className={link.active ? "active" : ''}>{link.title}</a>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <ul className={Styles["footer-links-sociel"]}>
                    <li>
                        <Link href="">
                            <a>
                                <FaFacebookSquare />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>
                                <FaTwitter />
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="">
                            <a>
                                <FaInstagram />
                            </a>
                        </Link>
                    </li>
                </ul>

            </div>

        </footer >
    )
}
