import Header from './Header'
import Footer from './Footer'
import Main from './Main'
import Game from './Game'

export default function Home() {
  return (
    <div className="mx-auto min-h-screen max-w-4xl px-4 py-6 sm:px-6 lg:px-8">
      <Header>
        <h1 className="mb-6 text-center text-3xl font-bold text-gray-900">Bolivian Cacho Game</h1>

        <p className="mb-6 text-center text-gray-600">
          A React project for practicing the Bolivian dice game Cacho aka Cacho Alalay, Poker of
          dices.
        </p>
      </Header>

      <Main>
        <Game />

        <section className="mx-auto max-w-6xl py-6 sm:px-6 lg:px-8">
          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-lg font-medium text-gray-900">What is Cacho?</h2>
            <p className="mt-1 text-gray-600">
              Cacho is a popular dice game from Bolivia that is played with five dice and a cup. The
              objective of the game is to get the highest possible score.
            </p>
          </div>

          <div className="px-4 py-6 sm:px-0">
            <h2 className="text-lg font-medium text-gray-900">How to play?</h2>
            <p className="mt-1 text-gray-600">
              Each player rolls the dice and can keep some or all of the dice and roll the remaining
              ones two more times. At the end, the score obtained by each player is compared to
              determine the winner.
            </p>
          </div>
        </section>
      </Main>

      <Footer>
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
        👉&nbsp;
        <a
          href="https://github.com/jhordyess/bolivian-cacho-game"
          target="_blank"
          rel="noreferrer"
          className="text-blue-600 hover:text-blue-400"
        >
          View on GitHub
        </a>
      </Footer>
    </div>
  )
}
