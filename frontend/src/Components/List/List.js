function List(props) {
  const { items } = props;

  const projectDivs = items.map((item) => (
    <div className="project-list-item">{item}</div>
  ));

  console.log(projectDivs);

  return (
    <div className="project-list-container">
      <div className="project-info">Info</div>
      <div className="project-list">{projectDivs}</div>
    </div>
  );
}

export default List;
