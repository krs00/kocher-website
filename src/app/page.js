// import Image from 'next/image'
// import styles from './page.module.css'

import EvidenceBlock from "./components/EvidenceBlock"

export default function Home() {
  return (
    <>
      <h1 className="page-header">The Kocher Scandal</h1>
      <h2 className="page-subheader">A True Crime Timeline</h2>

      <div className="video-container">
        <video controls src={"/videos/office_video.mp4"} />
        {/* autoPlay */}
      </div>


      <div className="video-sub-container">
        <p className="video-subtitle bold-text">How did the footage come to be?</p>
        <p className="video-subtitle video-subtitle2">Follow the timeline to review evidence</p>
      </div>

      <div className="timeline-container">
        <EvidenceBlock />
      </div>




    </>


    //<main className={styles.main}>
    //<h1>hello</h1>

    // </main>
  )
}
