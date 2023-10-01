import LineGradient from "../components/LineGradient";
import { useForm } from "react-hook-form";
import { motion } from "framer-motion";

const Contact = () => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e) => {
    console.log("~ e", e);
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contact" className="contact py-48">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: 50 },
          visible: { opacity: 1, x: 0 },
        }}
        className="flex justify-end w-full"
      >
        <div>
          <p className="font-playfair font-semibold text-5xl">
            <span className="text-red">ME CONTACTER</span>
          </p>
          <div className="flex md:justify-end my-5">
            <LineGradient width="w-1/2" />
          </div>
        </div>
      </motion.div>

      <div className="md:flex md:justify-between gap-16 mt-5">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 flex justify-center"
        >
          <img src="../assets/contact.jpg" alt="contact" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
          className="basis-1/2 mt-10 md:mt-0"
        >
          <form
            target="_blank"
            onSubmit={onSubmit}
            action="https://formsubmit.co/rabiehsassi@gmail.com"
            method="POST"
          >
            <input
              className="w-full bg-sky-600 font-semibold placeholder-opaque-black p-3"
              type="text"
              placeholder="NOM"
              {...register("lastname", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.lastname && (
              <p className="text-red mt-1">
                {errors.lastname.type === "required" && "Ce champ est obligatoire."}
                {errors.lastname.type === "maxLength" && "Taille max : 100 caractères."}
              </p>
            )}

            <input
              className="w-full bg-sky-600 font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="PRÉNOM"
              {...register("firstname", {
                required: true,
                maxLength: 100,
              })}
            />
            {errors.firstname && (
              <p className="text-red mt-1">
                {errors.firstname.type === "required" && "Ce champ est obligatoire."}
                {errors.firstname.type === "maxLength" && "Taille max : 100 caractères."}
              </p>
            )}

            <input
              className="w-full bg-sky-600 font-semibold placeholder-opaque-black p-3 mt-5"
              type="text"
              placeholder="EMAIL"
              {...register("email", {
                required: true,
                pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              })}
            />
            {errors.email && (
              <p className="text-red mt-1">
                {errors.email.type === "required" && "Ce champ est obligatoire."}
                {errors.email.type === "pattern" && "Adresse mail invalide."}
              </p>
            )}

            <textarea
              className="w-full bg-sky-600 font-semibold placeholder-opaque-black p-3 mt-5"
              name="message"
              placeholder="MESSAGE"
              rows="4"
              cols="50"
              {...register("message", {
                required: true,
                maxLength: 2000,
              })}
            />
            {errors.message && (
              <p className="text-red mt-1">
                {errors.message.type === "required" &&
                  "Ce champ est obligatoire."}
                {errors.message.type === "maxLength" &&
                  "Taille maximale : 2000 caractères"}
              </p>
            )}

            <button
              className="p-5 bg-red font-semibold text-deep-blue mt-5 hover:bg-green-500 hover:text-white transition duration-500"
              type="submit"
            >
              ENVOYER UN MESSAGE
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
