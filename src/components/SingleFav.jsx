import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Trash } from 'react-bootstrap-icons';
import { useDispatch } from 'react-redux';


const SingleFav = ({ data }) => {

const dispatch = useDispatch()

  return (
    <>
  <Row
    className="mx-0 mt-3 p-3 text"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={4} className='d-flex justify-content-around align-items-center '>
      <Link to={`/${data.company_name}`} className='text-dark fw-bold text-decoration-none'>{data.company_name}</Link>
    </Col>
    <Col xs={7} className='d-flex justify-content-around align-items-center '>
      <a href={data.url} target="_blank" rel="noreferrer" className='text-dark-emphasis'>
        {data.title}
      </a>
    </Col>
     <Col xs={1} className='d-flex justify-content-around align-items-center '>
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