import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';

const BaseCard = styled(Card)({
  background: 'white',
  border: 0,
  borderRadius: '5vh',
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  height: '90vh',
  minWidth: '400px',
  width: '80%',
  maxWidth: '600px',
  marginTop: '5vh',
  marginBottom: '5vh',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '5%',
});

export default BaseCard;
