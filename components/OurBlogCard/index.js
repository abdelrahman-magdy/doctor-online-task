import React from "react";
import Link from "next/link";
import Image from "next/image";
import Styles from "./styles.module.scss";

export default function OurBlog({ data }) {
  const { id, date, image, title, auther, desc } = data;
  return (
    <div className={Styles["Ourblog__item"]}>
      <div className={Styles["Ourblog__item__img"]}>
        <div className={Styles["Ourblog__item_date"]}>
          {date}
        </div>
        <div className={Styles["Ourblog__item_image"]}>
          <Image src={image} alt="" />
        </div>
      </div>
      <div className={Styles["OurBlog__details"]}>
        <div className={Styles["Ourblog__item__title"]}>
          <h2>
            {title}
          </h2>
          <a href="#" className={Styles["Ourblog__item__title_name"]}>
            {auther}
          </a>
        </div>
        <div className={Styles["Ourblog__item__dis"]}>
          <p>
            {desc}
          </p>
        </div>
        <div className={Styles["Ourblog__item__more"]}>
          <a href={`/blog/${id}`}>
            <span className={Styles["word"]}>read more</span>
            <span className={Styles["icon"]}> </span>
          </a>
        </div>
      </div>
    </div>

  );
}
