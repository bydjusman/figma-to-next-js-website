import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="text-center pb-10 mt-20 bg-red-100 ">
      <div>
        <ul className="flex justify-center space-x-6">
          <li>
            <a
              href="https://www.facebook.com/profile.php?id=100010830999227"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-facebook"
                style={{ color: "#21243d", fontSize: "30px" }}
              ></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/prince_aly74"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-instagram"
                style={{ color: "#21243d", fontSize: "30px" }}
              ></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-twitter"
                style={{ color: "#21243d", fontSize: "30px" }}
              ></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/ᑌs๓ᴀñ̰-khokhar-bb02a2290"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i
                className="fab fa-linkedin"
                style={{ color: "#21243d", fontSize: "30px" }}
              ></i>
            </a>
          </li>
        </ul>
      </div>
      <h5 className="text-black text-[20px] mt-4 font-bold">
        Copyright ©2020 All rights reserved
      </h5>
    </footer>
  );
}
