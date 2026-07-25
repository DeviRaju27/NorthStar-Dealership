import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} NorthStar Dealership. All rights reserved.</p>
    </footer>
  );
}

export default Footer;