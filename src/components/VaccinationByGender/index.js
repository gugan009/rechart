import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByGender = props => {
  const {vaccinationByGender} = props

  return (
    <div className="vaccination-gender-container">
      <h1 className="bar2-text">Vaccination by gender</h1>

      <PieChart width={1000} height={300}>
        <Pie
          cx="50%"
          cy="60%"
          data={vaccinationByGender}
          startAngle={0}
          endAngle={180}
          innerRadius="40%"
          outerRadius="80%"
          dataKey="count"
        >
          <Cell name="Male" fill="#f54394" />
          <Cell name="Female" fill="#5a8dee" />
          <Cell name="Others" fill="#2cc6c6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByGender
