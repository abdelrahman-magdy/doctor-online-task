import Link from 'next/link'
import Image from 'next/image'
import Styles from "./styles.module.scss";


export default function Specialities({ data }) {
    const { link, image, title, desc } = data;
    return (
        <Link href={link}>
            <div className={Styles["specialities-card"]}>
                <div className={Styles["specialities-card-image"]}>
                    <Image
                        src={image}
                        alt="language"
                    />
                </div>
                <h4 className={Styles["specialities-card-title"]}>
                    {title}
                </h4>
                <h4 className={Styles["specialities-card-descraption"]}>
                    {desc}
                </h4>
            </div>
        </Link>
    )
}
