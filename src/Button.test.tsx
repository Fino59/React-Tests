import { fireEvent, render, screen } from "@testing-library/react"
import Button from "./Button"

describe('Button component', () => {
    it('should render with red background if disabled', () => {
        render(<Button disabled={true} onClick={() => ''}>Click</ Button>);

        const Btn = screen.getByRole('button', {name: 'Click'});

        expect(Btn).toHaveStyle({ backgroundColor: 'red'});
    });

    it('should call onClick prop on click', () => {
        const onClick = jest.fn();

        render(<Button disabled onClick={onClick}>Click</ Button>);

        const Btn = screen.getByText('Click');

        fireEvent.click(Btn);

        expect(onClick).toHaveBeenCalled();
    });
})