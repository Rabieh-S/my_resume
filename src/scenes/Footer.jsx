import SocialMediaIcons from "../components/SocialMediaIcons";

const Footer = () => {
  return (
    <footer className="h-50 bg-electric-blue pt-2 pb-10">
      <div className="w-10/12 mx-auto">
        <SocialMediaIcons />
        <div className="md:flex justify-center md:justify-between text-center ">
          <p className="font-playfair font-semibold text-2xl text-white">
            Rabieh SASSI
          </p>
          <p className="font-playfair text-md text-white">
            ©2023 R.S All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
