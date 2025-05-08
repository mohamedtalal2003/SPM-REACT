import React from 'react';
import { useNavigate } from 'react-router-dom';

const FacultySecretary = () => {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate('/home');
  };

  const styles = {
    section: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gridColumn: '2/4',
      backgroundColor: '#E9ECEF',
      fontFamily: 'Inter, sans-serif',
      minHeight: '100vh',
      padding: '2rem',
    },
    container: {
      width: '100%',
      maxWidth: '600px',
    },
    topContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: '3rem',
      fontSize: '20px',
    },
    topTitle: {
      marginTop: '2rem',
    },
    bottomContainer: {
      backgroundColor: 'white',
      padding: '3rem',
      marginTop: '2rem',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
    },
    form: {
      width: '100%',
    },
    formGroup: {
      display: 'flex',
      flexDirection: 'column',
      marginBottom: '1rem',
    },
    label: {
      fontSize: '20px',
      marginLeft: '10px',
      marginBottom: '0.5rem',
    },
    input: {
      padding: '1rem',
      fontSize: '16px',
      borderRadius: '5px',
      marginBottom: '1rem',
    },
    terms: {
      fontSize: '11.5px',
      color: '#767676',
    },
    button: {
      backgroundColor: '#09B3AD',
      padding: '1.5rem 6rem',
      marginBottom: '1.5rem',
      border: 'none',
      width: '100%',
      marginTop: '1rem',
      borderRadius: '5px',
      boxShadow: '0 8px 15px rgba(0, 0, 0, 0.2)',
      fontSize: '24px',
      fontWeight: '500',
      color: 'white',
      cursor: 'pointer',
    },
    buttonHover: {
      backgroundColor: '#007D7A',
      boxShadow: '0 10px 20px rgba(0, 0, 0, 0.3)',
    },
    lastTwo: {
      display: 'flex',
      justifyContent: 'space-between',
    },
  };

  return (
    <section style={styles.section}>
      <div style={styles.container}>
        <div style={styles.topContainer}>
          <img src="/images/283d341b4e9d62729749d98fcc1e4640.png" alt="" />
          <h1 style={styles.topTitle}>Resit Exam Entrance</h1>
        </div>
        <div style={styles.bottomContainer}>
          <form style={styles.form} onSubmit={handleSubmit}>
            <div style={styles.formGroup}>
              <label htmlFor="email" style={styles.label}>Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Your Academic Email Address"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <label htmlFor="password" style={styles.label}>Email Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Your Academic Email password"
                required
                style={styles.input}
              />
            </div>
            <div style={styles.formGroup}>
              <input style={{position:'relative' ,left:'-48%'}} type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms" style={styles.terms}>
                I have read and approved{' '}
                <a
                  href="https://uskudar.edu.tr/tr/kisisel-verilerin-korunmasi"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  the Information and Disclosure Text
                </a>{' '}
                under the Law on Protection of Personal Data. (*)
              </label>
            </div>
            <button type="submit" style={styles.button}>Submit</button>
            <div style={styles.lastTwo}>
              <a href="resitexam.html">Not a Faculty Secretary</a>
              <a href="https://teksifre.uskudar.edu.tr/">I forgot my Password</a>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FacultySecretary;
