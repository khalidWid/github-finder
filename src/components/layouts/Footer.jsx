import { BiCodeAlt } from "react-icons/bi";
function Footer() {
  const footerYear = new Date().getFullYear();

  return (
    <footer className="footer p-2 bg-gray-700 text-primary-content footer-center">
      <div>
        <BiCodeAlt size={20} />
        <p>Copyright &copy; {footerYear} All rights reserved</p>
        <a
          href="https://github.com/khalidWid"
          className="text-white ml-2 hover:text-sky-400 hover:underline hover:underline-offset-1 font-bold"
        >
          khalid id-ouarab
        </a>
      </div>
    </footer>
  );
}

export default Footer;
