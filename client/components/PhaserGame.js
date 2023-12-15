// // src/components/PhaserGame.js

// import React, { Component } from "react";
// import Phaser from "phaser";

// class PhaserGame extends Component {
//   componentDidMount() {
//     // Configuration for your Phaser game
//     const config = {
//       type: Phaser.AUTO,
//       width: 800,
//       height: 600,
//       parent: "phaser-game", // This should match the id of the div in the render method
//       scene: {
//         preload: this.preload,
//         create: this.create,
//         update: this.update,
//       },
//     };

//     // Create the game instance
//     this.game = new Phaser.Game(config);
//   }

// //   // Phaser game lifecycle methods
// //   preload() {
// //     // Load assets
// //     this.load.image("logo", "assets/logo.png");
// //   }

// //   create() {
// //     // Create game entities
// //     this.add.image(400, 300, "logo");
// //   }

// //   update() {
// //     // Update logic
// //     this.logo.angle += 1;
// //   }

// //   render() {
// //     return <div id="phaser-game" />;
// //   }
// // }

// export default PhaserGame;
