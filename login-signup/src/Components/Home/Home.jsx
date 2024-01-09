
import './Home.css' 
export const Home = () => {

  const handleClick = () => {
    alert('Button clicked!');
  };


  return (
    <>
      <div className='container1'>
        <div className='container2'>
        <h1 className="cool-heading">SCMA</h1>
        <div className="underline"></div>
      <div className='inputs'>
        <div className='input' onClick={handleClick}><h2>Compiler Lab</h2></div>
        <div className='input' onClick={handleClick}><h2>Programming Lab</h2></div>
        <div className='input' onClick={handleClick}><h2>Software Lab</h2></div>
      </div>
        </div>
      </div>
    </>
  )
}


