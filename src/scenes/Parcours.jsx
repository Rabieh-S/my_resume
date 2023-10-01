import { motion } from "framer-motion";

const Parcours = () => {
    return (
      <section id="parcours" className="pt-10 pb-24">
        <p className="text-center text-5xl font-playfair font-semibold mb-10">
          ls -l <span className="text-purple-500">RESUME</span>
        </p>
        <img className="mx-auto bg-white" width="50" height="50" src="https://img.icons8.com/ios/50/diploma.png" alt="diploma" />
    
        <div className="flex flex-col md:flex-row md:justify-between md:gap-16 mt-12">
    
          <motion.div
            className="md:w-1/2 text-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-xl">
              Septembre 2023 - Septembre 2026
            </p>
            <small>Campus Epitech | Paris</small>
            <p className="font-playfair font-semibold text-xl mt-4">
              Août 2021 - Juin 2023
            </p>
            <small>Campus 2itech | Paris</small>
            <p className="font-playfair font-semibold text-xl mt-4">
              Septembre 2014 - Juin 2015
            </p>
            <small> Lycée Jean-Macé | Vitry-sur-Seine</small>
          </motion.div>
    
          <div className="border-2 border-green_terminal my-8 md:my-0 md:w-px"></div>
          
          <motion.div
            className="md:w-1/2 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-xl">
              Master Cycle MSc Pro - Cybersécurité
            </p>
            <small>(Titre RNCP niveau 7) Epitech Technology</small>
            <p className="mt-2 font-playfair font-semibold text-xl">
              Bachelor Cycle Développeur Web et Web Mobile
            </p>
            <small>(Titre RNCP niveau 5) 2itechAcademy</small>
            <p className="mt-8 font-playfair font-semibold text-xl">
              Baccalauréat Scientifique
            </p>
          </motion.div>
        </div>
    
        <img className="mx-auto mt-12" width="60" height="60" src="https://img.icons8.com/material-outlined/50/FFFFFF/business.png" alt="business" />
    
        <div className="flex flex-col md:flex-row md:justify-between md:gap-16 mt-12">
    
          <motion.div
            className="md:w-1/2 text-right"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-xl">
              Août 2021 - Juin 2023
            </p>
            <small>La Défense | Nanterre (92)</small>
            <p className="font-playfair font-semibold text-xl mt-4">
              Mission Juin 2023
            </p>
            <small>Le Terra Mundi | Lyon (69)</small>
            <p className="font-playfair font-semibold text-xl mt-4">
              Septembre 2019 - Février 2021
            </p>
            <small>Le Kremlin-Bicêtre (94)</small>
          </motion.div>
    
          <div className="border-2 border-green_terminal my-8 md:my-0 md:w-px"></div>
          
          <motion.div
            className="md:w-1/2 text-left"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <p className="font-playfair font-semibold text-xl">
              Alternant développeur web et web Mobile
            </p>
            <small>M2i Formation</small>
            <p className="font-playfair font-semibold text-xl mt-4">
              Formateur Javascript / jQuery
            </p>
            <small>M2i Formation</small>
            <p className="font-playfair font-semibold text-xl mt-5">
              Employé commercial et d'atelier polyvalent
            </p>
            <small>Auchan OKABÉ</small>
          </motion.div>
        </div>
      </section>
    )
}

export default Parcours;