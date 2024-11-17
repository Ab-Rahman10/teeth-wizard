import Logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div>
      <footer className="footer bg-teal-900 text-white p-10 mt-10">
        <aside className="flex items-center gap-4">
          <div className="w-12">
            <img src={Logo} />
          </div>
          <p>
            Teeth Wizard Dentistry
            <br />
            Your trusted partner for a brighter smile since 1995
          </p>
        </aside>
        <nav>
          <h6 className="footer-title text-xl">Our Services</h6>
          <a className="link link-hover">Teeth Cleaning</a>
          <a className="link link-hover">Braces & Aligners</a>
          <a className="link link-hover">Whitening</a>
          <a className="link link-hover">Root Canal</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Company Info</h6>
          <a className="link link-hover">About Us</a>
          <a className="link link-hover">Careers</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Our Blog</a>
        </nav>
        <nav>
          <h6 className="footer-title text-xl">Legal</h6>
          <a className="link link-hover">Terms of Service</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Cookie Policy</a>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
