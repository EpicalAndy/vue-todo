import { defineStore } from 'pinia'
import { type Card } from '@/models/card.ts'

export const cardsStore = defineStore('cards', {
  state: () => {
    const cards: Card[] = [];
    let lastCardId = 0;

    return { cards, lastCardId }
  },

  actions: {
    addCard(card: Card) {
      this.lastCardId++;

      card.id = this.lastCardId;

      this.cards.push(card);

      console.log(`cards: ${this.cards}; lastId: ${this.lastCardId}`);
    },
  },
})
