const modalTrigger = document.querySelector("#modal__trigger");

const createModalElement = () => {
  const modalElement = document.createElement("section");
  modalElement.id = "modal__element";
  modalElement.innerHTML = `
    <div id="modal__content">
      <span id="modal__close">❌</span>
      <h2>About a post</h2>
      <p>
        Share posts across multiple social media channels to increase the reach
        of your brand and track how people engage with your content.
      </p>
      <p>
        If you’re a new brand starting out or an existing one looking to improve
        your social media strategy – visual content will help establish your
        online identity.
      </p>
      <button>Create Social Media Content</button>
    </div>
  `;
  modalElement.addEventListener("click", (e) => {
    if (
      e.target === e.currentTarget ||
      e.target === document.querySelector("#modal__close")
    )
      toggleModal();
  });
  document.body.appendChild(modalElement);
};

const toggleModal = () => {
  const openModal = document.querySelector("#modal__element");
  if (openModal) return openModal.remove();

  createModalElement();
};

modalTrigger.addEventListener("click", toggleModal);
