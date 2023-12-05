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
        href={"https://www.linkedin.com/in/aqib-akram-12862122b/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiDribbbleLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiBehanceLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiPinterestLine />
      </Link>
    </div>
  );
};

const SocialsContainer = () => {
  return (
    <div className="-py-3">
      {/* You can adjust the padding value (-py-3) as needed */}
      <Socials />
    </div>
  );
};

export default SocialsContainer;
