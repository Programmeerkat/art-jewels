import { useParams } from 'react-router-dom';

function Detail() {
  const { detail } = useParams()

  return (
    <>
      <p>Detail page about {detail}</p>
    </>
  )
}
  
export default Detail