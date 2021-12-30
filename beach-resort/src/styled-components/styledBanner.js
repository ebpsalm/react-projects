import styled from 'styled-components';
import Bcg from '../images/defaultBcg.jpeg';
const banner = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  background: url(${(props) => props.image || Bcg});
  height: calc(100vh - 60.94px);
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
`;
export default banner;

