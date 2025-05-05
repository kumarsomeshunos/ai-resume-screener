import styles from "./Signin.module.css";
import Heading from "@/components/core/Heading/Heading";

export default function SigninForm() {
  return (
    <main className={styles.main}>
      <div className={`${styles.container} ${styles.wrapper}`}>
        <div className={styles.formSection}>
                <Heading heading={"Login to Your Account"} />
          <form className={styles.form}>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className={styles.imageSection}>
          <img
            src="https://firebase.google.com/static/images/brand-guidelines/logo-vertical.png"
            alt="Signup Visual"
          />
        </div>
      </div>
    </main>
  );
}
