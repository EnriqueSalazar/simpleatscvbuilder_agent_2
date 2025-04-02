import React, { useState } from 'react';

const App: React.FC = () => {
  const [cv, setCv] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  // Handle changes in text areas
const handleCvChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  setCv(event.target.value);
};

const handleJobDescriptionChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
  setJobDescription(event.target.value);
};

  // Handle form submission
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log('Form submitted with:');
    console.log('CV:', cv);
    console.log('Job Description:', jobDescription);
  };

  return (
    <div>
      <h1>CV Builder</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="cv">Your CV:</label>
          <textarea
            id="cv"
            value={cv}
            onChange={handleCvChange}
            rows={10} // Larger size for CV input
            cols={50}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jobDescription">Job Description:</label>
          <textarea
            id="jobDescription"
            value={jobDescription}
            onChange={handleJobDescriptionChange}
            rows={5} // Smaller size for description
            cols={30}
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default App;
