import { Container } from "./styles";

export function TransactionsTable () {
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Título</th>
                        <th>Valor</th>
                        <th>Categoria</th>
                        <th>Data</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Desenvolvimento de website</td>
                        <td className="deposit">R$12.000</td>
                        <td>Desenvolvimento</td>
                        <td>20/02/2024</td>
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>Compra pra casa</td>
                        <td className="withdraw">- R$500</td>
                        <td>Casa</td>
                        <td>21/02/2024</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}