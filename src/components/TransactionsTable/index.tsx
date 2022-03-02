import { Container } from "./styles";

import { useTransactions } from "../../hooks/useTransactions";

export function TransactionsTable() {
  const { transactions } = useTransactions(); 

  return (
    <Container>      
        <table>
          <thead>
          <tr>
            <th>#</th>
            <th>Título</th>
            <th>Preço</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead> 
        <tbody>
          {transactions.map(transaction=> (
            <tr key={transaction.id}>
              <td>{transaction.id}</td>
              <td>{transaction.title}</td>
              <td className={transaction.type}>{new Intl.NumberFormat('pt-br', {
                style: 'currency',
                currency: 'BRL'
              }).format(transaction.amount)}</td>
              <td>{transaction.category}</td>
              <td>{new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt))}</td>
            </tr>
          ))}          
        </tbody>  
        </table>
    </Container>
  )
}