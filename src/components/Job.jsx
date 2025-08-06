import { Row, Col, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Heart, HeartFill } from 'react-bootstrap-icons';
import { useDispatch, useSelector } from 'react-redux';


const Job = ({ data }) => {

const dispatch = useDispatch()
const favourites = useSelector((state) => state.favourites.companies);
const prefe = favourites.some((job) => job._id === data._id);

  return (
    <>
  <Row
    className="mx-0 mt-3 p-3"
    style={{ border: '1px solid #00000033', borderRadius: 6 }}
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
            type: prefe ? 'DELETE' : 'ADD_TO',
            payload: prefe ? data._id : data
          }
        )
      }}>
  {prefe ? <HeartFill /> : <Heart />}
</Button>
    </Col>
  </Row>
  </>
  )
}

export default Job
