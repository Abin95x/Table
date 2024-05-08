const App = () => {
  const { useState } = React;
  const [tasks, setTasks] = useState([
    "Onboarding Call",
    "Google Search Console Access",
    "Google Analytics Access",
    "Website Access",
    "Technical Audit",
    "Anchor Text and Semantic Analysis",
    "Competitor Analysis",
    "Anchor Text/URL Mapping",
    "Google Data Studio Report + Local Reporting Suite ",
    "Site Level Optimization",
    "On Page Optimization",
    "Content Creation",
    "Content Publishing",
    "Premium Press Release",
    "Authority Niche Placements",
    "Review Management",
    "Index Links",
    "Video Recap",
  ]);

  const handleChange = (value, index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index] = value;
    setTasks(updatedTasks);
  };

  const handleSubmit = () => {
    console.log(tasks);
  };

  return (
    <div>
      <table className="table">
        <thead>
          <tr className="header-row">
            <th className="first-column">MONTH 1</th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {tasks.map((task, i) => (
            <tr key={i}>
              <td className="first-column">
                <input
                  className="input"
                  type="text"
                  value={tasks[i]}
                  onChange={(e) => handleChange(e.target.value, i)}
                />
              </td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          ))}
        </tbody>
      </table>
      <div>
        <button className="btn" onClick={handleSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
