import {PieChart, Pie, Legend, Cell} from 'recharts'

import './index.css'

const VaccinationByAge = props => {
  const {vaccinationByAge} = props
  console.log(vaccinationByAge)
  return (
    <div className="chart-container">
      <h1 className="bar2-text">Vaccination by Age</h1>

      <PieChart height={300} width={1000}>
        <Pie
          cx="50%"
          cy="50%"
          data={vaccinationByAge}
          startAngle={0}
          endAngle={360}
          outerRadius="80%"
          dataKey="count"
        >
          <Cell name="18-44" fill=" #2d87bb" />
          <Cell name="44-60" fill="#a3df9f" />
          <Cell name="Above 60" fill="#64c2a6" />
        </Pie>
        <Legend iconType="circle" />
      </PieChart>
    </div>
  )
}

export default VaccinationByAge
