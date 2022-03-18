import "./Pages.css";
import "../List/List.css";
import List from "../List/List";

function ProjectListView() {
  const projects = [
    { name: "Project 1", id: 1 },
    { name: "Project 2", id: 2 },
    { name: "Project 3", id: 3 },
  ];

  return (
    <div className="page project-list-view two-col-container">
      <div className="column-1 project-info card">Info</div>
      <div className="column-2 project-list-container">
        <List items={projects} />
      </div>
    </div>
  );
}

export default ProjectListView;
