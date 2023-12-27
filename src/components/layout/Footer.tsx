import { format } from "date-fns";

const Footer: React.FC = () => {
  const currentYear = format(new Date(), "yyyy");

  return (
    <footer className="justify-center items-center p-4 bg-black">
      <p className="text-center text-sm text-white md:text-base">
        Copyright &copy; Payee {currentYear}
      </p>
    </footer>
  );
};

export default Footer;
