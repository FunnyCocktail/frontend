import { LinkButton } from "@/components/common/buttons";
import Image from "next/image";
import styles from "./page.module.scss";
import mint from '@/assets/images/mint.png'
import shaker from '@/assets/images/shaker.png'

export default function Home() {
  return (
    <main className={`${styles.place} container`}>
      <div className={`${styles.place__inner}`}>
        <div className={`${styles.place__inner_left}`}>
          <h1 
          className={`${styles.place__title}`}
          style={{fontSize: '90px'}}>Funny Cocktail</h1>
          <p className={`${styles.place__sub_title}`}>Твори, веселись, делись! <br /> Лучший ресурс для создания коктейлей.</p>
          <LinkButton link="#what" placeholder="Что это такое?"/>
          <img src="https://www.dropbox.com/scl/fi/pv0vkb4zpjxwt9itljj8v/b82f9d8e-bc14-4fc6-93f2-1ee0c3df6d51-c3a85687-0081-4121-adef-ed852e1cbe81.jpg" alt="Название изображения"/>
        </div>
        <div className={`${styles.place__inner_right}`}>
          <Image style={{position: 'absolute', zIndex: 1}} className={`${styles.place__inner_right_img}`} alt="mint" src={mint} width={515} height={380}/>
          <Image style={{position: 'absolute', zIndex: 2, marginLeft: '140px'}} className={`${styles.place__inner_right_img}`} alt="shaker" src={shaker}/>
        </div>
      </div>
    </main>
  );
}
