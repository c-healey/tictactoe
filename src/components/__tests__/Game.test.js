import { fireEvent, render, screen } from "@testing-library/react";

import Game from "../Game";
import { GameProvider } from "../context/GameContext";

describe("test tictactoe components", () => {
  it("test the game board and square components", () => {
    render(
      <GameProvider>
        <Game />
      </GameProvider>
    );
    // screen.debug();
    screen.getAllByRole('button');
    const element = screen.getByTestId(0);
    fireEvent.click(element);
    const element1 = screen.getByTestId(1);
    fireEvent.click(element1);
    const element4 = screen.getByTestId(4);
    fireEvent.click(element4);
    const element5 = screen.getByTestId(5);
    fireEvent.click(element5);
    const element8 = screen.getByTestId(8);
    fireEvent.click(element8);
    expect(element).toHaveTextContent('X');
    expect(element1).toHaveTextContent('O');
    expect(element4).toHaveTextContent('X');
    expect(element5).toHaveTextContent('O');
    expect(element8).toHaveTextContent('X');
    expect(screen.getByText('Winner X')).toBeInTheDocument();
    const historyButton = screen.getAllByText(/move/i);
    expect(historyButton).toHaveLength(6);

  //  screen.debug();
  });
});
