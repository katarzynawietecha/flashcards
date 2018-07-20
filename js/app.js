const cards = [
  {
    front: "cat",
    back: "kot",
    flipped: false
  },
  {
    front: "snake",
    back: "wąż",
    flipped: false
  },
  {
    front: "ladybird",
    back: "biedronka",
    flipped: false
  },
  {
    front: "rabbit",
    back: "królik",
    flipped: false
  },
  {
    front: "hamster",
    back: "chomik",
    flipped: false
  },
  {
    front: "spider",
    back: "pająk",
    flipped: false
  },
  {
    front: "turtle",
    back: "żółw",
    flipped: false
  }
];

new Vue ({
  el: "#app",
  data: {
    cards: cards,
    newFront: "",
    newBack: "",
    hasError: false
  },
  methods: {
    toggleCard: function(item){
      item.flipped = !item.flipped;
    },
    createCard: function(){
      if (!this.newFront || !this.newBack){
        this.hasError = true;
      } else {
        this.cards.push({
          front: this.newFront,
          back: this.newBack,
          flipped: false
        });
        //clearing input fields
        this.newFront = "";
        this.newBack = "";
        this.hasError= false;
      }
    }
  }
});
