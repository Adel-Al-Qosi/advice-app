import { useEffect, useState } from 'react'
import api from '../api/advice'

const AdviceCard = () => {
    const [advice, setAdvice] = useState('')
    const [adviceId, setAdviceId] = useState('')

    useEffect(() => {
        api().then((res) => {
          setAdvice(res.data.slip.advice);
          setAdviceId(res.data.slip.id)
        });
      }, []);

      const handleClick = (e) => {
        e.preventDefault()
        api().then((res) => {
          setAdvice(res.data.slip.advice);
          setAdviceId(res.data.slip.id)
        });
      }
    return (
        <div className="card">
            <h1>advice #{adviceId}</h1>
            <p className='advice'>{advice}</p>
            <div className='line'></div>
            <button onClick={handleClick}><span className='sr-only'>random advice</span></button>
        </div>
    )
}

export default AdviceCard