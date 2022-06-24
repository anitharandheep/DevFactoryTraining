import './Signup2.css'
function Signup2() {
    return(
        
<div>
      <div><h1>Great you have completed 20%</h1></div>
      <div>Please provide us with your basic details</div>
      <div>
        <label for="for"> Matrimony profile for</label>
        <select id="for">
        <option value="son">son</option>
        <option value="daughter">daughter</option>
        <option value="brother">brother</option>
        <option value="sister">sister</option>
        </select>
      </div>
      <div className='name'>Name<input type="text"></input></div>
      <div className='date'>Date Of Birth<input type="text"></input></div>
      <div className='religion'>Religion<input type="text"></input></div>
      <div>Denomination<input type="text"></input></div>
      <div>Division<input type="text"></input></div>
      <div>Subcaste(optional)<input type="text"></input></div>
            <div>Mother Tongue<input type="text"></input></div>
            <div>Email ID<input type="email"/></div>
            <div>Password<input type="password"></input></div>
            <div><button>Continue</button></div>
    </div>
  )
        
}
export default Signup2;