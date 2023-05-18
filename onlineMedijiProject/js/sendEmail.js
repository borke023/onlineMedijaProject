function sendEmail() {
const sendersEmail = document.getElementById("email").value;
const poruka = document.getElementById("Poruka").value;

    Email.send({
      Host : "smtp.elasticemail.com",
      Username : "bulovan.boris@gmail.com",
      Password : "0E46806311C013E69D6876C9958F6F533ED1",
      To : 'bulovan.boris@gmail.com',
      From : sendersEmail,
      Subject : "Novo submitovanje forme",
      Body : poruka
    }).then(
      message => alert(message)
    );
  }