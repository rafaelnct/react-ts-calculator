import { Container, Content } from './styles';

type CalcBodyProps = {
    children: JSX.Element;
}

export function CalcBody({children}: CalcBodyProps) {
    return (
        <Container>
            <Content>
                {children}
            </Content>
        </Container>
    );
}
