import './style.css'
import image from './images/icon-star.svg'



const App = () => {
  return(
<main className='body'>

  <div className='container'>
    
      <div className='info-container'>
      <img src={image} alt="" className='image' />
    <h1>How did we do?</h1>
    <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
  <div className='buttons'>
     <button className='button1'>1</button> 
     <button className='button2'>2</button> 
     <button className='button3'>3</button> 
     <button className='button4'>4</button> 
     <button className='button5'>5</button> 
  </div>

  <div className='submit-class'>
     <button className="submit">SUBMIT</button>
  </div>
      </div>

  </div>

</main>
  )
}

export default App;
