import './Pages.css';

function UserSettings() {
  return (
    <div className='user-settings'>
      <div className='two-col-container'>
        <div className='column-1 card'>
          <h1>What is Lorem Ipsum?</h1>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s, when an printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
            into electronic typesetting, remaining essentially unchanged
          </p>
        </div>
        <div className='column-2 card'>
          <h1>What is Lorem Ipsum?</h1>
          <p>
            What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
            has been the industry&apos;s standard dummy text ever since the 1500s, when an unknown unknown printer took
            a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,
            also the leap into electronic typesetting, remaining essentially unchanged
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserSettings;
