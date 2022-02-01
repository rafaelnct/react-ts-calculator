import { CalcBody } from './components/CalcBody';
import { CalcDisplay } from './components/CalcDisplay';
import { GlobalStyle } from './styles/global';

export function App() {
    return (
        <>
            <CalcBody>
                <CalcDisplay />
            </ CalcBody>
            <GlobalStyle />
        </>
    );
}
