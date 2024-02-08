import SocialMediaIcons from "../components/SocialMediaIcons";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";
import AnchorLink from "react-anchor-link-smooth-scroll";
import Typewriter from "../components/Typewriter";
import CV from "../assets/CV Rabieh SASSI.pdf";

const Landing = ({ setSelectedPage }) => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
      {/* IMAGE SECTION */}
      <div className="basis-3/5 z-10 mt-16 md:mt-32 flex justify-center md:order-2">
        {isAboveLarge ? (
          <div
            className="relative z-0 ml-20 before:absolute before:-top-20 before:-left-20 before:rounded-t-[400px]
            before:w-full before:max-w-[300px] md:before:max-w-[450px] before:h-full before:border-2 before:border-blue before:z-[-1]"
          >
            <img
              alt="profile"
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[300px] md:max-w-[450px] rounded-t-[400px]"
              src="/assets/photo-profil.jpg"
            />
          </div>
        ) : (
          <img
            alt="profile"
            className="z-10 w-full max-w-[400px] md:max-w-[600px]"
            src="/assets/photo-profil.jpg"
          />
        )}
      </div>

      {/* MAIN TEXT */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        {/* HEADINGS */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-6xl font-playfair z-10 text-center md:text-start">
            Rabieh Sassi
          </p>

          <p className="font-playfair mt-10 mb-7 text-sm text-center md:text-start">
            <Typewriter text="Développeur web Nest.JS, React | En recherche d'une alternance pour Janvier 2024" delay={30}/>
            <p className="font-playfair mt-10 mb-7 text-sm text-center md:text-start">Rythme : <Typewriter text="3 jours entreprise (mercredi - vendredi) | 2 jours formation (lundi - mardi)" delay={30} /></p>
          </p>
        </motion.div>

        {/* CALL TO ACTIONS */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contactez-moi
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#projects"
          >
            <div className="bg-deep-blue hover:text-blue transition duration-500 w-full h-full flex items-center justify-center px-10 font-playfair">
              Projets
            </div>
          </AnchorLink>
          <div
            className="bg-gradient-reverseblue text-deep-blue rounded-sm py-3 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
              // à modifier pour mettre le CV
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <a href={CV} target="_blank">Téléchargez mon CV</a>
          </div>
        </motion.div>

        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
        <div className="flex mt-5 justify-center md:justify-start">
          <p className="text-5xl mb-5 font-playfair z-10 text-center md:text-start">Stack Environment</p>
        </div>
        <div className="flex justify-center md:justify-start mt-3 gap-4">
          <img className="stack-img" alt="react" src="../assets/react.png" />
          <img className="stack-img" alt="nodejs" src="../assets/node-js-icon.png" />
          <img className="stack-img" alt="nest" src="../assets/nest.svg" />
          <img className="stack-img" alt="typescript" src="../assets/typescript.png" />
          <img className="stack-img" alt="tailwind" src="../assets/tailwind.png" />
          <img className="stack-img" alt="express" src="../assets/express.png" />
          <img className="stack-img" alt="python" src="../assets/python.png" />
          <img className="stack-img" alt="php" src="../assets/php.png" />
        </div>
        <div className="flex justify-center md:justify-start mt-3 gap-4">
          <img className="stack-img" alt="visual-studio-code" src="../assets/vscode.png" />
          <img className="stack-img" alt="git" src="../assets/git-icon.png" />
          <img className="stack-img" alt="kali-linux" src="../assets/kali-linux.png" />
        </div>
      </div>
    </section>
  );
};

export default Landing;
