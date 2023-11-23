import Image from "next/image";
import styles from "./Blog.module.css";
import { Select } from "antd";
import { ShareAltOutlined, HeartOutlined } from "@ant-design/icons";
import icon from "../../../assets/msg.png";
import share from "../../../assets/share.png";
import heart from "../../../assets/heart.png";
import useTranslation from "next-translate/useTranslation";

import frame from "../../../assets/blog-frame.svg";
import profile from "../../../assets/blogProfileImg.png";

const Blog = () => {
  const { t } = useTranslation("blog");
  return (
    <>
      <div className={styles.blog}>
        <div className={styles.profileHolder}>
          <div className={styles.userProfile}>
            <Image src={profile} alt="profile" />
            <div>
              <h3>Wade Warren</h3>
              <span>colleagues</span>
            </div>
          </div>
          <Select
            defaultValue="15 mins"
            options={[
              { value: "15 mins", label: "15 mins" },
              { value: "30 mins", label: "30 mins" },
              { value: "60 mins", label: "60 mins" },
            ]}
          />
        </div>
        <Image src={frame} alt="frame" className={styles.frame} />
        <div className={styles.comment}>
          <div className={styles.commentsSection}>
            <div>
              <Image src={heart} alt="like" />
              <span>Like</span>
            </div>
            <div>
              <Image src={icon} alt="comment" />
              <span>{t("comment")}</span>
            </div>
          </div>
          <div className={styles.shareSection}>
            <Image src={share} alt="share" />
            <span>99 {t("share")}</span>
          </div>
        </div>
        <p className={styles.caption}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum
          mollitia rerum esse maxime error totam similique, ex repudiandae
          corporis minima laudantium reprehenderit tenetur quidem velit
          repellendus illum quia voluptas cum aliquid dolores adipisci. Omnis
          nam, voluptatem id nemo laboriosam necessitatibus voluptates
          recusandae quae mollitia molestiae asperiores non, nihil veniam!
        </p>
        <div className={styles.userComments}>
          <Image src={profile} alt="profile" className={styles.userImg} />
          <div>
            <h3>Paul Molive</h3>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
            <div className={styles.share}>
              <div className={styles.blogBtns}>
                <Image src={heart} alt="like" />
                <span>Like</span>
              </div>
              <div className={styles.blogBtns}>
                <Image src={heart} alt="reply" />
                <span>{t("reply")}</span>
              </div>
              <span>{t("translate")}</span>
              <p>5 min</p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.blog}>
        <div className={styles.profileHolder}>
          <div className={styles.userProfile}>
            <Image src={profile} alt="profile" />
            <div>
              <h3>Wade Warren</h3>
              <span>colleages</span>
            </div>
          </div>
          <Select
            defaultValue="15 mins"
            options={[
              { value: "15 mins", label: "15 mins" },
              { value: "30 mins", label: "30 mins" },
              { value: "60 mins", label: "60 mins" },
            ]}
          />
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi laborum
          mollitia rerum esse maxime error totam similique, ex repudiandae
          corporis minima laudantium reprehenderit tenetur quidem velit
          repellendus illum quia voluptas cum aliquid dolores adipisci. Omnis
          nam, voluptatem id nemo laboriosam necessitatibus voluptates
          recusandae quae mollitia molestiae asperiores non, nihil veniam!
        </p>
        <div className={styles.comment}>
          <div className={styles.commentsSection}>
            <div>
              <Image src={heart} alt="like" />
              <span>Like</span>
            </div>
            <div>
              <Image src={icon} alt="comment" />
              <span>{t("comment")}</span>
            </div>
          </div>
          <div className={styles.shareSection}>
            <Image src={share} alt="share" />
            <span>99 {t("share")}</span>
          </div>
        </div>
        <input type="text" placeholder="Lovely!" />
      </div>
    </>
  );
};

export default Blog;
