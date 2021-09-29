import Link from 'next/link'
import Image from 'next/image'
import Styles from "./styles.module.scss";
import flag from "../../public/images/egypt-flag.png";
import logoHeader from "../../public/images/logo-header.png";
import mobile from "../../public/images/mobile.png";
import SearchBox from '../SearchBox';

const links = [
    {
        slug: '/',
        title: 'home',
        active: true,
    },
    {
        slug: '/specialities',
        title: 'specialities'
    },
    {
        slug: '/centres',
        title: 'centres'
    },
    {
        slug: '/about',
        title: 'about'
    },
    {
        slug: '/blog',
        title: 'blog'
    }
]

export default function Header() {
    return (
        <div className={Styles["header-top-body"]}>

            <header className={Styles.header}>
                <ul className={Styles["header__top"]}>
                    <li className={Styles["header__top--list"]}>
                        <a href="">
                            FAQs
                        </a>
                    </li>
                    <li className={Styles["header__top--list"]}>
                        <a href="">
                            contact us
                        </a>
                    </li>
                    <li className={Styles["header__top--list"]}>
                        <a href="">
                            عربي
                        </a>
                        <Image
                            src={flag}
                            alt="language"
                            width={24}
                            height={24}
                        />
                    </li>
                </ul>

                <div className={Styles["header__middle"]}>

                    <div className={Styles["header__middle-logo"]}>
                        <Image
                            src={logoHeader}
                            alt="logo-Header-image"
                        />
                    </div>
                    <nav>
                        <ul className={Styles["header__middle-list"]}>
                            {links.map((link) => (
                                <li key={link.title}>
                                    <Link href={`${link.slug}`}>
                                        <a className={link.active ? "active" : ''}>{link.title}</a>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <div className={Styles["header__middle-btn"]}>
                        <Link className="tt" href='sign-in'>
                            <a>
                                sign in
                            </a>
                        </Link>
                        <Link className="tt" href='sign-in'>
                            <a>
                                get app
                            </a>
                        </Link>
                    </div>
                </div>

            </header>
            <div className={Styles["header-body"]}>
                <div className={Styles["header-body-container"]}>
                    <div className={Styles["header-body-left"]}>
                        <h1>
                            A True <br />Virtual Clinic
                        </h1>
                        <p>
                            Get the diagnosis you need with years of <br /> excellence in the medical field.
                        </p>
                        <SearchBox />
                    </div>
                    <div className={Styles["header-body-right"]}>
                        <Image
                            src={mobile}
                            alt="language"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
