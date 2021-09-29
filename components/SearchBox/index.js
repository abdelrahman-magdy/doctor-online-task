import Link from 'next/link'
import Image from 'next/image'
import Styles from "./styles.module.scss";
import searchIcon from "../../public/images/search-icon.png";

export default function SearchBox() {
    return (
        <div className={Styles["search"]}>
            <h3 className={Styles["search-header"]}>
                Book an Appointment
            </h3>
            <form action="">
                <div className={Styles["search-group"]}>
                    <div className={Styles["search-group-wrapper"]}>
                        <select name="" id="">
                            <option value="" disabled selected>Book by Speciality</option>
                            <option value="">1</option>
                            <option value="">2</option>
                        </select>
                    </div>
                    <div className={Styles["search-group-or"]}>
                        or
                    </div>
                    <div className={Styles["search-group-wrapper"]}>
                        <input type="text" placeholder="Search by Doctor’s name" />
                        <div className={Styles["search-group-icon"]}>
                            <Image
                                src={searchIcon}
                                alt="search Icon"
                                width={20}
                                height={20}
                            />
                        </div>
                    </div>
                </div>
                <button type="submit" className={Styles["search-btn"]}>
                    search
                </button>
            </form>
        </div>
    )
}
