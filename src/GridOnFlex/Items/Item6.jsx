import resumeIcon from '../../Utils/assets/img/resume-icon.png'
import './Item6.css'

export const Item6 = () => (
  <>
    <h4 className="item-6-text">RESUME</h4>
    <div className="item-6-icon-wrapper">
    <img className="item-6-icon" src={resumeIcon}></img>
    </div>
  </>
);

export const Item6ModaleContent = () => {
  const handleDownload = async () => {
    const backendBaseUrl = import.meta.env.VITE_REACT_APP_BACKEND_URL;
    const route = '/massmr/download/';
    const filename = 'resume.pdf';
    const backendUrl = `${backendBaseUrl}${route}${filename}`;
    const response = await fetch(backendUrl);
    const blob = await response.blob();

    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

  return (
    <div className="item-6-modale-content-container">
      <button 
        onClick={handleDownload}
        className="item-6-modale-button item-6-modale-button-download">Download</button>
      <button className="item-6-modale-button item-6-modale-button-cancel">Cancel</button>
    </div>
  );
};
