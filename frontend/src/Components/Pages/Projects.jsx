import './Pages.css';
import '../Upload/Upload.css';
import Upload from '../Upload/Upload';

function Projects() {
  return (
    <div>
      <ul>
        <h1 className='page projects'>Projects</h1>
        <Upload />
      </ul>
    </div>
  );
}

export default Projects;
