import './input.css';

export default function Inputs() {
  return (
    <div className="inputs">
      <div className="input-group">
        <label htmlFor="day">Day</label>
        <input type="number" id="day" placeholder="DD" />
      </div>
      <div className="input-group">
        <label htmlFor="month">Month</label>
        <input type="number" id="month" placeholder="MM" />
      </div>
      <div className="input-group">
        <label htmlFor="year">Year</label>
        <input type="number" id="year" placeholder="YYYY" />
      </div>
    </div>
  );
}