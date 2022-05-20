import { Link } from "react-router-dom";
function Footer() {
  return (
    <footer className="footer-center">
      <h3>
        Fits<strong>U</strong> Quiz
      </h3>
      <ul className="right-menu">
        <li>
          <a href="https://github.com/ragini07" target="_blank">
            <i className="fa fa-github fa-2x"></i>
          </a>
        </li>
        <li>
          <a href="https://twitter.com/Ragini94008326" target="_blank">
            <i className="fa fa-twitter fa-2x"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/ragini-singh-a67358179/"
            target="_blank"
          >
            <i className="fa fa-linkedin fa-2x"></i>
          </a>
        </li>
      </ul>
      <p className="copyright">© 2021 CopyRight|Version 1.0</p>
    </footer>
  );
}

export { Footer };
