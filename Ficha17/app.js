new Vue({
    el: "#app",
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
        },

        calculateDamage: function(min, max) {
            var result = Math.max(Math.floor(Math.random() * max) + 1, min);
            return result;
        },

        calculateHealth: function (min, max) {
            var result = Math.max(Math.floor(Math.random() * max) + 1, min);
            return result;
        },

        attack: function() {
            if (this.gameIsRunning == true) {
                // Player
                var damageMonster = this.calculateDamage(3, 10);
                this.monsterHealth -= damageMonster;
                this.turns.unshift( {
                    isPlayer: true,
                    text: "Player hits Monster for " + damageMonster + " damage"
                });

                if (this.monsterHealth <= 0) {
                    alert("Player won !");
                    this.startGame();
                    return;
                }

                // Monster
                var damagePlayer = this.calculateDamage(2, 10);
                this.playerHealth -= damagePlayer;
                this.turns.unshift({
                    isMonster: true,
                    text: "Monster hits player for " + damagePlayer + " damage"
                });

                if (this.playerHealth <= 0) {
                    alert("Monster won !");
                    this.startGame();
                    return;
                }
            } else {
                alert("You have to click start new game in order to use your abilities.");
            }
        },

        specialAttack: function() {
            if (this.gameIsRunning == true) {
                // Player
                var damageMonster = this.calculateDamage(5, 20);
                this.monsterHealth -= damageMonster;
                this.turns.unshift( {
                    isPlayer: true,
                    text: "Player hits Monster for " + damageMonster + " damage"
                });
    
                if (this.monsterHealth <= 0) {
                    alert("Player won !");
                    this.gameIsRunning = false;
                    this.turns = [];
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    return;
                }
    
                // Monster
                var damagePlayer = this.calculateDamage(5, 20);
                this.playerHealth -= damagePlayer;
                this.turns.unshift( {
                    isMonster: true,
                    text: "Player hits Monster for " + damagePlayer + " damage"
                });
    
                if (this.playerHealth <= 0) {
                    alert("Monster won !");
                    this.gameIsRunning = false;
                    this.turns = [];
                    this.playerHealth = 100;
                    this.monsterHealth = 100;
                    return;
                }
            } else {
                alert("You have to click start new game in order to use your abilities.");
            }
        },

        heal: function() {
            if (this.gameIsRunning == true) {
                var health = this.calculateHealth(5, 20);
                // Player
                if ((this.playerHealth + health) > 100) {
                    this.playerHealth = 100;
                } else {
                    this.playerHealth += health;
                }
    
                // Monster
                if ((this.monsterHealth + health > 100)) {
                    this.monsterHealth = 100;
                } else {
                    this.monsterHealth += health;
                }
            } else {
                alert("You have to click start a new game in order to use your abilities.");
            }
        },
        
        giveUp: function() {
            if (this.gameIsRunning == true) {
                alert("Monster won !");
                this.gameIsRunning = false;
                this.turns = [];
                this.playerHealth = 100;
                this.monsterHealth = 100;
            } else {
                alert("You have to click start new game in order to use your abilities.");
            }
        }
    }
});