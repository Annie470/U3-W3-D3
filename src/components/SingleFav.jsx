import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Trash } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';


const SingleFav = ({ data }) => {

const dispatch = useDispatch()

  return (
    <>
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={4}>
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={7}>
      <a href={data.url} target="_blank" rel="noreferrer">
        {data.title}
      </a>
    </Col>
     <Col xs={1}>
      <Button variant="outline-info" onClick={()=>{
        dispatch(
          {
            type: 'DELETE',
            payload: data._id
          }
        )
      }}>
  <Trash/>
</Button>
    </Col>
  </Row>
  </>
  )
}

export default SingleFav