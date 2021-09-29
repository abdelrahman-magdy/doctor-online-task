import Styles from "./styles.module.scss";
import SpecialitiesCard from '../SpecialitiesCard';
import heart from "../../public/images/specialities/heart.png";
import andrology from "../../public/images/specialities/andrology.png";
import ear_nose from "../../public/images/specialities/ear-nose-and-throat.png";
import gastroenterology from "../../public/images/specialities/gastroenterology.png";
import internal_medicine from "../../public/images/specialities/internal-medicine.png";
import nutrition from "../../public/images/specialities/nutrition.png";
import plumonology from "../../public/images/specialities/plumonology.png";
import surgery from "../../public/images/specialities/surgery.png";

const data = [
    {
        link: '/',
        image: heart,
        title: 'Cardiology',
        desc: ''
    },
    {
        link: '/',
        image: andrology,
        title: 'andrology',
        desc: ''
    },
    {
        link: '/',
        image: nutrition,
        title: 'nutrition',
        desc: ''
    },
    {
        link: '/',
        image: plumonology,
        title: 'plumonology',
        desc: 'Chest medicine'
    },
    {
        link: '/',
        image: gastroenterology,
        title: 'Gastro-enterology',
        desc: ''
    },
    {
        link: '/',
        image: ear_nose,
        title: 'Ear, Nose & Throat',
        desc: ''
    },
    {
        link: '/',
        image: internal_medicine,
        title: 'internal medicine',
        desc: ''
    },
    {
        link: '/',
        image: surgery,
        title: 'surgery',
        desc: ''
    },
]

export default function Specialities() {
    return (
        <section className={Styles["specialities"]}>
            <h3 className={Styles["specialities-header"]}>
                Featured Specialities
            </h3>
            <div className={Styles["specialities-cards"]}>
                {
                    data.map(item => <SpecialitiesCard key={item.title} data={item} />)
                }
            </div>
            <button type="submit" className={Styles["specialities-btn"]}>
                view all
            </button>
        </section>
    )
}
