/**
 * Singleton pattern
 *
 * Scenario: You're building a web-based game where you need to manage a global game state,
 * such as player stats or settings, that should be accessible from any part of the game.
 *
 * Pattern explanation : The singleton pattern ensures that class has only one instance and provides
 * a global point of access to it. This is useful for managing game states or resources like audio managers.
 *
 */

class GameManager {
  constructor() {
    if (GameManager.instance) {
      return GameManager.instance;
    }

    this.score = 0;
    GameManager.instance = this;
  }

  getScore() {
    return this.score;
  }
  increaseScore(score = 10) {
    this.score += score;
  }
  decreaseScore(score = 10) {
    this.score -= score;
  }
}

const gameManager = new GameManager();
gameManager.increaseScore(77);
gameManager.decreaseScore(88);

console.log("Score is", gameManager.getScore());
