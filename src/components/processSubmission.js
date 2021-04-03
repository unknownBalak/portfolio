// import { Email } from `${https://smtpjs.com/v3/smtp.js}`;
function sendData(e) {
  e.preventDefault();
  //   console.log("I have been clicked");
  //   console.log(e.target["name"]);
  //   console.log(e.target["email"]);
  //   console.log(e.target["number"]);
  //   console.log(e.target["textarea"]);
  //  Email.send({
  //      Host:"smtp.mailtrap.io",
  //      Username:"50852c2afc6cbb",
  //      Password: "2c144a16d35c99",
  //      To:"",
  //      From:"",
  //  })
  console.log(e.target);
}
export default sendData;
