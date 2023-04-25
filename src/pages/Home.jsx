import React from "react";

export default function Home() {
  return (
    <div className="max-w-6xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold text-gray-900 text-center mb-6">
        Bolivian Cacho Game
      </h1>
      <p className="text-gray-600 text-center mb-6">
        A React project for playing the Bolivian dice game Cacho aka Cacho
        Alalay, Poker of dices.
      </p>
      <div className="text-center">
        <a
          href="#"
          className="inline-block bg-indigo-500 text-white px-4 py-2 rounded-md hover:bg-indigo-600 mb-6"
        >
          Play now
        </a>
      </div>
      <main>
        <div className="max-w-6xl mx-auto py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-lg font-medium text-gray-900">
              What is Cacho?
            </h2>
            <p className="mt-1 text-gray-600">
              Cacho is a popular dice game from Bolivia that is played with five
              dice and a cup. The objective of the game is to get the highest
              possible score.
            </p>
          </div>
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-lg font-medium text-gray-900">How to play?</h2>
            <p className="mt-1 text-gray-600">
              Each player rolls the dice and can keep some or all of the dice
              and roll the remaining ones two more times. At the end, the score
              obtained by each player is compared to determine the winner.
            </p>
          </div>
        </div>
      </main>
      <footer className="text-center">
        <p className="text-gray-400">
          Made with 💪 by&nbsp;
          <a
            className="text-blue-600 hover:text-blue-400"
            href="https://www.jhordyess.com"
            target="_blank"
            rel="noreferrer"
          >
            Jhordyess
          </a>
          <br />
          <a
            href="https://github.com/jhordyess/bolivian-cacho-game"
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:text-blue-400"
          >
            👉 View on GitHub
          </a>
        </p>
      </footer>
    </div>
  );
}
