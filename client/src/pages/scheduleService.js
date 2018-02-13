import React from 'react';
import '../schedule.css';
import axios from 'axios';

export class ScheduleService extends React.Component {
  constructor(props){
    super(props);
    this.state={
      date: null, 
      time: null,
      address: null,
      car: null,
      plate: null,
    }
    this.handleChange=this.handleChange.bind(this);
     this.formSubmit=this.formSubmit.bind(this);
  }
  handleChange(event){
  const name=event.target.name;
  const value=event.target.value;  
  // console.log(name, value, this.state);
    this.setState({
      [name]:value
    })
  }

  formSubmit() {
    console.log(this.state);
    axios.post("/service",this.state).then(
        (res)=>{
            console.log(res.data)
        }
      );
  }
  render() {
    return (
      <div>
        <h1> Book your appointment with our Mobile Detailing Team!</h1>

        <div className="bootstrap-iso">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <div className="form-group"> 
                  <label className="control-label" htmlFor="date">Step 1: Select a Date</label>
                <input className="date" name="date" type="date"  defaultValue={new Date()} onChange={this.handleChange} />
                </div>
              </div>
            </div>
          </div>    
        </div>

        <div className="bootstrap-iso"> 
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-6 col-sm-6 col-xs-12">
                <label className="control-label" htmlFor="date">Step 2: Select a Time</label>
               <input type="time"  name="time" onChange={this.handleChange}/>
            
              <div className="form-group">
              <p>*Note that for same day appointment, scheduling will have to be prior to 2pm.</p>
              <div>     
          <label className="control-label" htmlFor="address">Step 3: Provide the location of your vehicle</label>
          <input type="address" name= "address" onChange={this.handleChange} />
        </div>
              <br/>
            <div>  
            <label className="control-label" htmlFor="car">Step 4: Provide the make, model,color of your vehicle</label>
            <input type="car" name="car" onChange={this.handleChange} />
            </div>
                      <br/>
              <div>  
              <label className="control-label" htmlFor="plate">Step 5: Vehicle license plate number</label>
              <input type="plate" name="plate" onChange={this.handleChange} />
              </div>
              <br/>
                <button className="btn btn-primary " name="submit" onClick={this.formSubmit}>Submit</button>

              </div> 
            </div>
          </div>        
        </div>
    </div>  
</div>
    )
  }
}

export default ScheduleService;