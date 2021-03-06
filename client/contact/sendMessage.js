import { buttonEl, onClose } from "./elements";

const post = (url = "", data = {}) => {
  // Default options are marked with *
  return fetch(url, {
    method: "POST", // *GET, POST, PUT, DELETE, etc.
    mode: "cors", // no-cors, cors, *same-origin
    cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
    credentials: "same-origin", // include, *same-origin, omit
    headers: {
      "Content-Type": "application/json"
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: "follow", // manual, *follow, error
    referrer: "no-referrer", // no-referrer, *client
    body: JSON.stringify(data) // body data type must match "Content-Type" header
  }).then(response => response.json()); // parses JSON response into native JavaScript objects
};

const sendMessage = message => {
  const button = buttonEl();
  button.disabled = true;
  button.innerHTML = "Sending Message...";
  post("/send-message", { message })
    .then(resp => {
      if (resp.success) {
        alert("Thanks for your message!");
        onClose();
      } else {
        throw new Error("Did not get success response from Node");
      }
    })
    .catch(error => {
      console.error(error);
      alert("Shoot! There was a problem sending the message.");
      buttonEl().disabled = false;
      button.innerHTML = "Send Message";
    });
};

export default sendMessage;
