import aurelia from "../../assets/aurelia.svg";
import angular from "../../assets/angular.svg";
import ember from "../../assets/ember.svg";
import vue from "../../assets/vue.svg";
import backbone from "../..//assets/backbone.svg";
import react from "../../assets/react.svg";

const cards = [
  { id: 1, name: "aurelia", image: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg' },
  { id: 2, name: "aurelia", image: 'https://www.patterns.dev/img/reactjs/react-logo@3x.svg' },
  { id: 3, name: "angular", image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png?20160527092314' },
  { id: 4, name: "angular", image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/768px-Angular_full_color_logo.svg.png?20160527092314' },
  { id: 5, name: "ember", image: 'https://i.pinimg.com/236x/34/50/56/34505647336d727283800809442fb975.jpg' },
  { id: 6, name: "ember", image: 'https://i.pinimg.com/236x/34/50/56/34505647336d727283800809442fb975.jpg' },
  { id: 7, name: "vue", image: 'https://www.pinterest.com/pin/914862417553559/' },
  { id: 8, name: "vue", image: 'https://www.pinterest.com/pin/914862417553559/' },
  { id: 9, name: "backbone", image: 'https://i.pinimg.com/236x/aa/98/e0/aa98e01560c3c24192d5ffbd12db186c.jpg' },
  { id: 10, name: "backbone", image: 'https://i.pinimg.com/236x/aa/98/e0/aa98e01560c3c24192d5ffbd12db186c.jpg' },
  { id: 11, name: "react", image: 'https://i.pinimg.com/236x/2f/32/3b/2f323b390a535d5d7a5c6b2503355a48.jpg' },
  { id: 12, name: "react", image: 'https://i.pinimg.com/236x/2f/32/3b/2f323b390a535d5d7a5c6b2503355a48.jpg' },
];

export const cardsData = cards.map((card) => ({
  ...card,
  order: Math.floor(Math.random() * 12),
  isFlipped: false,
}));
