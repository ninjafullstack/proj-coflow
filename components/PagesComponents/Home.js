"use client";
import { CardGroup } from "@/components/Global/CardGroup";
import {DonateBlock} from '@/components/Global/DonateBlock'
import YotubePlayer from "../Widgets/YotubePlayer";
import Image from "next/image";
import ProgressBar from '@/components/Global/ProgressBar'
import paliers from "../../public/paliers.png";
import tree from "../../public/tree.png";

const Home = () => {
  const items = [
    "Location de costumes qui plongeront nos acteurs et figurantsdans l'époque des cowboys et des hors-la-loi.",
    "Engager des figurants spécialisés dans les cascades et les armes de cinéma, pour rendre chaque scène encore plus spectaculaire.",
    "Couvrir les frais de transport de toute l'équipe, assurant ainsi que chacun puisse participer à cette aventure unique.",
    "Rémunérer les riders talentueux qui participeront au tournage, leur donnant l'opportunité de briller et de repousser les limites du BMX.",
    "Location de matériel photo et vidéo de haute qualité, pour capturer chaque instant avec une précision exceptionnelle.",
    "Création de modules en bois sur mesure, permettant aux riders de réaliser des trikcs et d'élever le niveau des performances.",
    "Faire appel à un shaper professionnel pour concevoir des modules en terre uniques, ajoutant une touche de créativité à nos décors.",
  ];

  const mockDatDonat = [
    {
      id: 1,
      imageSrc: "img1",
      title: "Tee shirt!",
      price: "40 €",
      contributions: "6 contributions",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", // Описание из первого элемента массива items
    },
    {
      id: 2,
      imageSrc: "img2",
      title: "Another Tee shirt!",
      price: "35 €",
      contributions: "8 contributions",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ];

  return (
    <div className="px-5 md:max-xl:px-4">
      <div className="mx-auto mt-10  max-w-[1266px] justify-between lg:flex">
        <div className="p-4 lg:w-1/2 lg:flex-shrink-0">
          <YotubePlayer />
        </div>

        <div className="flex flex-col justify-between p-4 lg:w-1/2 ">
        
          <div className="mb-2 text-[26px] font-bold leading-[130%] md:text-3xl">
            Ceci est un titre
          </div>

          <div className="mb-2 flex gap-4">
            <div className="flex-1 rounded-lg bg-white p-3 shadow-md md:p-4">
              <h4 className="opacity: 0.78 text-greyhead mb-2 text-[11.3px] font-medium md:text-base">
                Total Likes{" "}
              </h4>
              <div className="mb-2 text-3xl font-extrabold">25.6K </div>
              <h4 className="text-greyhead mb-1 hidden text-xs font-normal md:block">
                21% more than last month
              </h4>
            </div>

            <div className="flex-1 rounded-lg bg-white p-3 shadow-md md:p-4">
              <h4 className="opacity: 0.78 text-greyhead mb-2 text-[11.3px] font-medium md:text-base">
                Page Views
              </h4>
              <div className="mb-2 text-3xl font-extrabold">2.6M</div>
              <h4 className="text-greyhead mb-1 hidden text-xs font-normal md:block">
                36% more than last month
              </h4>
            </div>

            <div className="flex-1 rounded-lg bg-white p-3 shadow-md md:p-4">
              <h4 className="opacity: 0.78 text-greyhead mb-2 text-[11.3px] font-medium md:text-base">
                Tasks done
              </h4>
              <div className="mb-2 text-3xl font-extrabold">86%</div>
              <h4 className="text-greyhead mb-1 hidden text-xs font-normal md:block">
                31 tasks remaining
              </h4>
            </div>
          </div>

          <div className="mb-2 mt-6 flex items-center justify-between lg:mt-0">
            <div className="mt-4 w-full">
              <ProgressBar value={47} width={"100%"} height={8} color={"#D64758"} tip={true} />
            </div>
            <h4 className="ml-8 whitespace-nowrap text-base font-normal md:text-xl md:font-semibold">
              Niveau 0
            </h4>
          </div>

          <button className="btn h-16 w-full bg-primary hover:bg-primary-focus text-base font-semibold text-white mt-[31px] md:mt-0">
            Participer
          </button>
        </div>
      </div>

      <div className="mx-auto h-0.5 max-w-[1234px] bg-lightgray"></div>

      <div className="mx-auto mt-[38px] flex max-w-[1266px] flex-col gap-10 lg:flex-row-reverse">
        <div>
          <h3 className="mb-[30px] text-center lg:text-left">Contreparties</h3>
          <div>
            <CardGroup data={mockDatDonat} />
          </div>
        </div>

        <div className="p-8 md:p-0">
          <h3 className="mb-6 mb-2">Description du projet</h3>
          <p className="mb-8 text-lg font-normal opacity-90">
            Préparez-vous à être transportés dans un monde où le BMX rencontre l'époque sauvage des
            westerns. La marque Unicorn est fière de présenter son tout dernier projet vidéo qui
            repousse les limites de l'imagination : "BMX: Western Escape". L'histoire est aussi
            simple qu'épique : un bandit de renom, chevauchant son BMX, se trouve traqué à travers
            tout le pays. Il fait une halte dans un bar au cœur d'une ville western. Mais la
            tranquillité ne dure pas longtemps. Repéré dès son arrivée, notre héros enchaîne des
            tricks pour échapper à ses poursuivants et tenter de s'en sortir indemne. Pour ceux qui
            ont suivi les changement chez Unicorn, ce projet ambitieux est bien plus qu'un simple
            court métrage. Il s'agit d'une opportunité unique de financer notre prochaine aventure
            vidéo avant même le début du tournage. En contribuant à notre campagne de crowdfunding,
            vous soutenez l'innovation artistique et l'audace de la marque Unicorn, tout en
            participant à la réalisation d'un projet qui repousse les frontières du possible.
          </p>
          <h3 className="mb-6">A quoi va servir le financement ?</h3>
          <p className="mb-4 text-lg font-normal opacity-90">
            En atteignant notre premier objectif de 7 000 euros pour ce projet, nous serons en
            mesure de concrétiser une expérience cinématographique immersive. Voici ce que nous
            pourrons accomplir grâce à votre soutien :
          </p>
          <p className="mb-4 text-lg font-normal opacity-90">
            Location de costumes qui plongeront nos acteurs et figurantsdans l'époque des cowboys et
            des hors-la-loi.
          </p>

          <ul className="ml-5 list-inside list-none text-black opacity-90">
            {items.map((item, index) => (
              <li key={index} className="relative mb-4">
                <span className="bullet" />
                {item}
              </li>
            ))}
            <style jsx>{`
              .bullet::before {
                content: "•";
                color: #e53e3e;
                position: absolute;
                left: -1.25em;
                bottom: -8px;
                transform: translateY(-50%);
              }
            `}</style>
          </ul>

          <Image className="mb-4 " src={paliers} alt="banner" height={98} layout="responsive" />

          <p className="mb-8 text-lg font-normal">
            Si notre objectif initial de 10 000 euros est dépassé, les fonds supplémentaires seront
            utilisés pour soutenir la production de notre boîte de production, Unicorn. Cela nous
            permettra de développer de nouveaux projets vidéo audacieux, repoussant les frontières
            de l'innovation artistique et de l'expression créative. Chaque euro compte et contribue
            à la réalisation de ce projet exceptionnel. Rejoignez-nous dans cette aventure et
            ensemble, créons une expérience inoubliable qui marquera les esprits et inspirera les
            passionnés de BMX du monde entier.
          </p>

          <h3 className="mb-4 text-3xl font-bold">Les contreparties du projet</h3>

          <Image src={tree} alt="banner" className="mb-4" />

          <h4 className="mb-1 text-base font-normal opacity-50">
            Attention ! Les logos ne seront peut être pas identiques à 100% ! On travaille encore
            dessus !
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Home;
