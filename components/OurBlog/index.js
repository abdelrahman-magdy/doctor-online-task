import React from "react";
import Image from "next/image";
import BlogImg from "../../public/images/pharmacist.jpg";
import Styles from "./styles.module.scss";
import OurBlogCard from "../OurBlogCard";
const data = [
  {
    id: 1,
    date: '12 Apr 2021',
    image: BlogImg,
    title: `Exercise Helps Prevent Back Pain`,
    auther: `By Dr . mahmoud etman`,
    desc: "Croup is an inflammation of the larynx, trachea and bronchi. It affects the voice box due to an infection of the vocal cord. In adults this disease is known as laryngitis. It obstructs the breathing which makes this disease…",
  },
  {
    id: 2,
    date: '12 Apr 2021',
    image: BlogImg,
    title: `Is COVID-19 going to end soon?`,
    auther: `By Dr . mahmoud etman`,
    desc: "Because people with high blood pressure do not usually have any symptoms until the disease has reached an advanced stage, high blood pressure is often called the “silent killer.” That is why having…"
  },
  {
    id: 3,
    date: '12 Apr 2021',
    image: BlogImg,
    title: `Natural Treatments For High Blood Pressure`,
    auther: `By Dr . mahmoud etman`,
    desc: "Whether you are on business trip, a romantic holiday, a family trip or simply want to experience outdoor life, aromatherapy essential oils come useful along the way. Take along carrier oils for diluting the essential oils…",
  },
]
export default function OurBlog() {
  return (
    <>
      <section className={Styles["Ourblog"]}>
        <div className={Styles["Ourblog-container"]}>
          <div className={Styles["title_section"]}>
            <h2>Our Blog Updates</h2>
            <p>
              Doctor Online beholds the largest insights of the medical world in the Middle East, delivered from the most experienced doctors worldwide.
            </p>
          </div>
          <div className={Styles["Ourblog__items"]}>
            {data.map(blog => <OurBlogCard key={blog.id} data={blog} />)}
          </div>
        </div>
      </section>
    </>
  );
}
