import { Col, Container, Row } from 'react-bootstrap';
import AddPost from '../AddPost/AddPost.tsx';
import Receive from '../Receive/Receive.tsx';

const Chat = () => {
  return (
    <>
      <Container className='mt-5'>
        <Row>
          <Col><AddPost/></Col>
          <Col><Receive/></Col>
        </Row>
      </Container>
    </>
  );
};

export default Chat;