import pressButtonCard from "./PressButtonCard";
export default class Task {
  constructor(container) {
    this.container = container;
    this.card = null;
    this.value = null;
  }

  addCard() {
    const cardTask = document.createElement("div");
    cardTask.classList.add("container__task");
    cardTask.innerHTML = `<textarea class="container__task__textarea" placeholder="Enter a title for this card..."></textarea>
                        <div class="container__card__footer">
                            <button class="container__card__button">Add Card</button>
                            <div class="cross">&times;</div>
                        </div>`;
    this.container.insertAdjacentElement("beforeBegin", cardTask);
    this.card = cardTask;
    this.card.querySelector(".container__task__textarea").focus();
    this.container.classList.add("hide");
    this.listener();
  }

  listener() {
    let button = this.card.querySelector(".container__card__button");
    button.addEventListener("click", () => {
      this.container.classList.remove("hide");
      this.value = this.card.querySelector(".container__task__textarea").value;
      if (this.value == "") {
        this.card.remove();
      } else {
      this.card.querySelector(".container__card__footer").remove();
      this.saveCard();
      }
    })

    let cross = document.querySelector(".cross");
    cross.addEventListener("click", () => {
      this.card.remove();
      this.container.classList.remove("hide");
    })

    this.dnd();
  }

  saveCard() {
    this.card.innerHTML= `<input class="container__task__input" name="task__value" value="${this.value}">
                          <div class="task__cross">&times;</div>`;
    this.card.querySelector(".container__task__input").addEventListener("click", () => {
      this.card.innerHTML = `<textarea class="container__task__textarea">${this.value}</textarea>
      <div class="container__card__footer">
          <button class="container__card__button">Add Card</button>
          <div class="cross">&times;</div>
      </div>`;
      this.listener();
    })

    this.card.querySelector(".task__cross").addEventListener("click", () => {
      this.card.remove();
    })
  }

  dnd() {
    this.card.addEventListener("mousedown", (elem) => {
      elem.preventDefault();
      let cardClone = this.card.cloneNode(true);
      this.card.classList.add("drive")
      console.log(cardClone);

    })
  }

  deleteCard(card) {
    card.remove();
  }
}
