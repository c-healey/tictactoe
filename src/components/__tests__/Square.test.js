import { fireEvent, render, screen} from '@testing-library/react';

import Square from '../Square';
import {GameProvider} from '../context/GameContext';

describe('test tictactoe Square components', ()=>{
it('test Square component', ()=>{
    render(<GameProvider><Square key={1} index={0}/></GameProvider>);
    screen.debug();
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toHaveClass('square');
    const element = screen.getByTestId(0);
    fireEvent.click(element);
    screen.debug();
    expect(element).toHaveTextContent('X')
})
    
})