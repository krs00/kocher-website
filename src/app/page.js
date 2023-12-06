// import Image from 'next/image'
// import styles from './page.module.css'

export default function Home() {
  return (
    <>
      <h1 className="page-header">The Kocher Scandal</h1>
      <h2 className="page-subheader">A True Crime Timeline</h2>

      <video width="640" height="360" controls>
        <source src="/videos/office.mp4" type="mp4" />
        Your browser does not support the video tag.
      </video>

      <p className="video-subtitle">How did the footage come to be?</p>
      <p className="video-subtitle video-subtitle2">Follow the timeline to review evidence</p>

    </>


    //<main className={styles.main}>
    //<h1>hello</h1>

    // </main>
  )
}
