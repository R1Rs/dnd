import Task from "./Task";

export default function addCard() {
  const addCard = document.querySelectorAll(".container__card__add");
  addCard.forEach((card) => {
    card.addEventListener("click", (elem) => {
        let container = elem.target;
        new Task(container).addCard();
    });
  });
}
