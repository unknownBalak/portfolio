import emailjs from "emailjs-com";

function sendData(e) {
  e.preventDefault();

  emailjs.sendForm("gmail", "template_xsthfwk", e.target, "user_V14SNDxAWG2HTEgqQ0q50").then(
    (result) => {
      alert("Message sent successfullly!!");
    },
    (error) => {
      alert(error.text);
    }
  );

  e.target.reset();
}
export default sendData;
