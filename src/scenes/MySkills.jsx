import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-5xl mb-5">
          cd <span className="text-green_terminal">MY SKILLS/</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7">
            Les compétences que je possède et qui pourront apporter plus de valeur auprès de votre business !
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="../assets/skills-image.jpg"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="../assets/skills-image.jpg" />
          )}
        </div>
      </div>

      <div className="md:flex md:justify-between mt-16 gap-32">
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Expérience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]">
              <img className="mx-auto stack-img" src="../assets/experience.png" alt="icone experience" />
            </div>
          </div>
          <p className="mt-5">
            Ayant travaillé avec la M2i Formation, je connais le travail en équipe, les problèmes liées à la refactorisation d'application et répondre aux besoins des clients.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Mindset
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]">
              <img width="100" height="100" className="stack-img mx-auto" src="../assets/growth-mindset.png" alt="growth-mindset from Parzival' 1997"/>
            </div>
          </div>
          <p className="mt-5">
            Toujours appliqué, je veux constamment m'améliorer sur mes hard-skills et être un élément moteur au sein d'une équipe, tout comme être capable d'être autonome et de gérer un projet du début à la fin.
          </p>
        </motion.div>

        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Soft-Skills
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 absolute right-0 top-0 z-[-1]">
              <img className="mx-auto" src="../assets/competences.png" alt="icone compétence" />
            </div>
          </div>
          <p className="mt-5">
            En plus de l'informatique de manière générale, je suis passionné par le sport, notamment les arts martiaux mais aussi les sports de combats.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
