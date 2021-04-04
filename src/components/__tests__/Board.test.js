import { render, screen } from "@testing-library/react";

import Board from "../Board";
import { GameProvider } from "../context/GameContext";

describe("test tictactoe Bpard component", () => {
  it("test the game board components", () => {

        const board = Array(9).fill(null);
        render(
            <GameProvider>
              <Board squares={board} />
            </GameProvider>
          );
          screen.debug()
          expect(screen.getAllByRole('button')).toHaveLength(9);
  });
});