import Header from "../components/Header";
import { useEffect } from "react";

const Contact = () => {
  useEffect(() => {
    const titleElement = document.getElementsByTagName("title")[0];
    titleElement.innerHTML = `Contact `;
  }, []);

  return (
    <div className="Contact">
      <Header />
      <h4>Contact</h4>
      <p>Email & iMessage 💌 yyjh222@gmail.com</p>
      <p>
        Github 🔮
        <a href="https://github.com/yzinnie">https://github.com/yzinnie</a>
      </p>
      <p>
        Blog 📝
        <a href="https://jinnie222.tistory.com/">
          https://jinnie222.tistory.com/
        </a>
      </p>
    </div>
  );
};
export default Contact;
