import {XAxis, Legend, YAxis, BarChart, Bar} from 'recharts'

import './index.css'

const VaccinationCoverage = props => {
  const {last7DaysVaccination} = props

  const dataFormatter = number => {
    if (number > 1000) {
      return `${(number / 10).toString()}k`
    }
    return number.toString()
  }
  return (
    <div className="vaccination-coverage-container">
      <h1 className="bar1-text">Vaccination Coverage</h1>

      <BarChart height={300} width={1000} data={last7DaysVaccination}>
        <XAxis
          dataKey="vaccineDate"
          tick={{
            stroke: 'gray',
            strokeWidth: 1,
          }}
        />
        <YAxis
          tickFormatter={dataFormatter}
          tick={{
            stroke: 'gray',
            strokeWidth: 0,
          }}
        />
        <Legend
          wrapperStyle={{
            padding: 30,
          }}
        />
        <Bar dataKey="dose1" name="Dose 1" fill="#5a8dee" barSize="10%" />
        <Bar dataKey="dose2" name="Dose 2" fill="#f54394" barSize="10%" />
      </BarChart>
    </div>
  )
}

export default VaccinationCoverage
