import { Button, Container } from './styles';

export function CalcButtons() {
    return (
        <Container>

            <Button className="m1">mc</Button>
            <Button className="m2">m+</Button>
            <Button className="m3">m-</Button>
            <Button className="m4">mr</Button>

            <Button className="s1">C</Button>
            <Button className="s2">/</Button>
            <Button className="s3">*</Button>
            <Button className="s4">del</Button>

            <Button className="n7">7</Button>
            <Button className="n8">8</Button>
            <Button className="n9">9</Button>
            <Button className="s5">-</Button>

            <Button className="n4">4</Button>
            <Button className="n5">5</Button>
            <Button className="n6">6</Button>
            <Button className="s6">+</Button>

            <Button className="n1">1</Button>
            <Button className="n2">2</Button>
            <Button className="n3">3</Button>

            <Button className="pr">%</Button>
            <Button className="n0">0</Button>
            <Button className="po">.</Button>

            <Button className="ig">=</Button>

        </Container>
    );
}
