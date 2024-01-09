import React, { useState } from "react";
import styles from "./index.module.css";
import Wrapper from "../../components/UI/wrapper";
import Movies from "../../assets/images/movies.png";
import Khuran from "../../assets/images/khuran.png";
import TicTac from "../../assets/images/tictac.png";
import RSP from "../../assets/images/rsp.png";
import Sakarya from "../../assets/images/sakarya.png";
import CarsBaku from "../../assets/images/carsbaku.png";
import ChinaGames from "../../assets/images/chinagames.png";
import NewsTR from "../../assets/images/newstr.png";
import Maglos from "../../assets/images/maglos.png";
import Payments from '../../assets/images/payment2.png'
import { LiveIcon } from "../../icons";
import { Link } from "react-router-dom";
const ViewProjects = () => {
  const [data, setData] = useState([
    {
      photo: `${Movies}`,
      skills: "HTML SCSS REACTJS REST API`s Router`s",
      name: "Movies-baku",
      overview:
        "A subscription-based online platform with a wide array of movies and TV series.",
      link: "https://movies-baku.vercel.app/",
    },
    {
      photo: `${Khuran}`,
      skills: "HTML SCSS REACTJS REST API`s Router`s",
      name: "Khuran App",
      overview:
        "Provides information about the Quranic text, translations, interpretations (Tafsirs), and audio recitation.",
      link: "https://khuran.vercel.app/",
    },
    {
      photo: `${TicTac}`,
      skills: "HTML SCSS JavaScript REACTJS",
      name: "TicTacToe",
      link: "https://tictakgame.vercel.app",
      overview:
        "Tic-tac-toe is a classic game played on a 3x3 grid. Two players take turns marking an empty cell with their..",
    },
    {
      photo: `${Payments}`,
      skills: "HTML SCSS JavaScript REACTJS TAILWIND CSS",
      name: "Payment Method Mobile App",
      link: "https://mypaymentmethod.vercel.app/",
      overview:
        "A payment method is a way or mechanism used to transfer money or value from one party to another in exchange..",
    },
    {
      photo: `${RSP}`,
      skills: "HTML SCSS JavaScript REACTJS",
      name: "Rock Scissors Paper",
      link: "https://rockpaperscissorsgames.vercel.app/",
      overview:
        "Rock-paper-scissors is a simple hand game usually played between two people, where each player simultaneously..",
    },
    {
      photo: `${Sakarya}`,
      skills: "HTML SCSS JavaScript REACTJS Responsive",
      name: "Sakarya Evde Sağlık Hizmeti",
      link: "https://sakaryaevdesaglik.vercel.app/",
      overview:
        "When people get sick in the city of Sakarya, they receive all kinds of treatment and care at home.",
    },

    {
      photo: `${ChinaGames}`,
      skills: "HTML SCSS JavaScript Responsive",
      name: "China Games",
      link: "https://chinagames.vercel.app/",
      overview:
        "JavaScript games have gained immense popularity due to the language's versatility and its ability to inter..",
    },
    {
      photo: `${NewsTR}`,
      skills: "HTML SCSS JavaScript ReactJS API`s",
      name: "NewsTR",
      link: "https://news-tr.vercel.app/",
      overview:
        "News information serves as a cornerstone of informed societies, providing citizens with the information necessary..",
    },
    {
      photo: `${Maglos}`,
      skills: "HTML SCSS JavaScript ReactJS API`s",
      name: "Maglos Finance",
      link: "https://maglos.vercel.app/",
      overview:
        "Finance is a broad term encompassing the management of money and assets. It involves activities related to investing..",
    },
  ]);
  return (
    <div className={styles.background}>
      <Wrapper>
        <div className={styles.control}>
          <div className={styles.texts}>
            <p>/</p>
            <h2>projects</h2>
          </div>
          <div className={styles.allmyprojects}>
            <p>List of my projects:</p>
          </div>
          <div className={styles.maps}>
            {data?.map((item) => (
              <div className={styles.border}>
                <div className={styles.images}>
                  <img className={styles.img} src={item.photo} alt="" />
                  <hr />
                </div>
                <div className={styles.skills}>
                  <h2>{item.skills}</h2>
                </div>
                <div className={styles.hr}>
                  <hr />
                </div>
                <div>
                  <div className={styles.projectname}>
                    <h2>{item.name}</h2>
                  </div>
                  <div className={styles.projectoverview}>
                    <p>{item.overview}</p>
                  </div>
                </div>
                <div className={styles.live}>
                  <Link target="_blank" to={item.link}>
                    Live <LiveIcon />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default ViewProjects;
