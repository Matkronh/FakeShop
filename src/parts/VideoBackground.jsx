import bgvid from '../vid/production.mp4'
import styles from '../styles/Shop.module.css'

function VideoBackground() {
  return (
    <div className={styles.videoContainer}>
      <video autoPlay loop muted className="video">
        <source src={bgvid} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoBackground;