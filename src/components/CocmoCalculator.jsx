import React, { useState } from 'react'

const CocomoCalculator = () => {
  const [codeSize, setCodeSize] = useState(0)
  const [projectType, setProjectType] = useState(0)
  const [efforts, setEfforts] = useState(0)
  const [timeToDevelop, setTimeToDevelop] = useState(0)
  const [developersRequired, setDevelopersRequired] = useState(0)

  const modelTable = [
    [2.4, 1.05, 2.5, 0.38],
    [3.0, 1.12, 2.5, 0.35],
    [3.6, 1.2, 2.5, 0.32],
  ]

  const getEfforts = () => {
    return (
      modelTable[projectType][0] *
      Math.pow(codeSize, modelTable[projectType][1])
    )
  }

  const getTimeToDevelop = () => {
    return (
      modelTable[projectType][2] *
      Math.pow(getEfforts(), modelTable[projectType][3])
    )
  }

  const getPersonsToDevelop = () => {
    return getEfforts() / getTimeToDevelop()
  }

  const handleCalculate = () => {
    const efforts = getEfforts()
    const timeToDevelop = getTimeToDevelop()
    const developersRequired = getPersonsToDevelop()

    setEfforts(efforts.toFixed(2))
    setTimeToDevelop(timeToDevelop.toFixed(2))
    setDevelopersRequired(developersRequired.toFixed(0))
  }

  return (
    <div>
      <div className="nav">
        <h1>COCOMO Calculator</h1>
        <div className="padd">
          <label htmlFor="codeSize">Code Size:</label>
          <input
            type="number"
            id="codeSize"
            value={codeSize}
            onChange={(e) => setCodeSize(parseFloat(e.target.value))}
          />
        </div>
        <div className="padd">
          <label htmlFor="projectType">Project Type:</label>
          <select
            id="projectType"
            value={projectType}
            onChange={(e) => setProjectType(parseInt(e.target.value))}
          >
            <option value={0}>Organic</option>
            <option value={1}>Semi-detached</option>
            <option value={2}>Embedded</option>
          </select>
        </div>
        <button onClick={handleCalculate} className="padd">
          Calculate
        </button>
      </div>
      <div>
        <p>{`Efforts: ${efforts} чел/мес.`}</p>
        <p>{`Time to Develop: ${timeToDevelop} мес.`}</p>
        <p>{`Developers Required: ${developersRequired} чел.`}</p>
      </div>
    </div>
  )
}

export default CocomoCalculator
