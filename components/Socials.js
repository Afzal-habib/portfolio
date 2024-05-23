import Link from "next/link";
import {
  RiLinkedinLine,
  RiInstagramLine,
  RiFacebookLine,
  RiDribbbleFill,
  RiPinterestLine,
  RiDribbbleLine,
  RiBehanceLine,
} from "react-icons/ri";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-lg">
      <Link
        href={"https://www.linkedin.com/in/afzal-habib-5298a0272/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiLinkedinLine />
      </Link>
      <Link
        href={"https://www.facebook.com/profile.php?id=100076130156361"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link
        href={"https://www.instagram.com/afzalhabib786/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link
        href={"https://dribbble.com/Afzalhabib786"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>

      <Link
        href={"https://www.behance.net/afzalhabib"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>

      <Link
        href={"https://www.pinterest.com/afzalhaabib786/"}
        target="_blank"
        className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

const SocialsContainer = () => {
  return (
    <div className="-py-4">
      {/* You can adjust the padding value (-py-3) as needed */}
      <Socials />
    </div>
  );
};

export default SocialsContainer;
