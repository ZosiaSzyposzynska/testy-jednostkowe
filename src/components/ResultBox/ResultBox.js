import PropTypes from 'prop-types';
import { convertUSDToPLN } from './../../utils/convertUSDToPLN';
import { convertPLNToUSD } from './../../utils/convertPLNToUSD';
import { formatAmountInCurrency } from './../../utils/formatAmountInCurrency';
import { useMemo } from 'react';
import styles from './ResultBox.module.scss';

const ResultBox = ({ from, to, amount }) => {

  const convertedAmount = useMemo(() => {
    if(from === 'USD' && to === 'PLN' && amount > 0) return convertUSDToPLN(amount);
    if(from === 'PLN' && to === 'USD' && amount > 0) return convertPLNToUSD(amount);
    if(amount < 0) return 'Wrong value…';
    return formatAmountInCurrency(amount, from);
  }, [from, to, amount]);

  const formattedAmount = useMemo(() => {
    if(amount < 0) return;
    return (formatAmountInCurrency(amount, from) + ' =')}, [amount, from]);

  return (
    <div className={styles.result} data-testid='resultbox'>
      {formattedAmount} {convertedAmount}
    </div>
  );
};

ResultBox.propTypes = {
  from: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
}

export default ResultBox;