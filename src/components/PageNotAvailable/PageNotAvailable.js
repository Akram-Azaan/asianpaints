import { useNavigate } from "react-router-dom";

const PageNotAvailable = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div style={styles.container}>
      <div style={styles.content}>
        <div style={styles.iconContainer}>
          <svg
            style={styles.icon}
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15 9L9 15"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 9L15 15"
              stroke="#9CA3AF"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
        <h1 style={styles.title}>Page Not Available</h1>
        <p style={styles.message}>
          Sorry, this page is currently unavailable or under maintenance.
        </p>
        <p style={styles.subMessage}>
          Please check back later or return to the home page.
        </p>
        <button style={styles.button} onClick={handleGoBack}>
          Back to Home
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    minHeight: "100vh",
    backgroundColor: "#F9FAFB",
    padding: "20px",
  },
  content: {
    textAlign: "center",
    maxWidth: "450px",
    padding: "40px",
    backgroundColor: "#FFFFFF",
    borderRadius: "12px",
    boxShadow: "0 4px 20px rgba(0, 0, 0, 0.08)",
  },
  iconContainer: {
    marginBottom: "24px",
  },
  icon: {
    width: "80px",
    height: "80px",
  },
  title: {
    fontSize: "28px",
    fontWeight: "600",
    color: "#1F2937",
    margin: "0 0 16px 0",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  message: {
    fontSize: "16px",
    color: "#6B7280",
    margin: "0 0 8px 0",
    lineHeight: "1.6",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  subMessage: {
    fontSize: "14px",
    color: "#9CA3AF",
    margin: "0 0 32px 0",
    lineHeight: "1.5",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
  button: {
    backgroundColor: "Orange",
    color: "#FFFFFF",
    border: "none",
    padding: "14px 32px",
    fontSize: "16px",
    fontWeight: "500",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
  },
};

export default PageNotAvailable;
