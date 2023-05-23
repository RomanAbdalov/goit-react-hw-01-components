import PropTypes from 'prop-types';
import {
  Table,
  Thead,
  TrHead,
  ThHead,
  TBody,
  TrBody,
  TdBody,
} from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table className="transaction-history">
      <Thead>
        <TrHead>
          <ThHead>Type</ThHead>
          <ThHead>Amount</ThHead>
          <ThHead>Currency</ThHead>
        </TrHead>
      </Thead>
      <TBody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <TrBody key={id}>
              <TdBody>{type}</TdBody>
              <TdBody>{amount}</TdBody>
              <TdBody>{currency}</TdBody>
            </TrBody>
          );
        })}
      </TBody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.string,
  currency: PropTypes.string,
};
