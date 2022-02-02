import { CalcBody } from './components/CalcBody';
import { CalcButtons } from './components/CalcButtons';
import { CalcDisplay } from './components/CalcDisplay';
import { GlobalStyle } from './styles/global';

export function App() {
    return (
        <>
            <CalcBody>
                <CalcDisplay />
                <CalcButtons />
            </ CalcBody>
            <GlobalStyle />
        </>
    );
}
