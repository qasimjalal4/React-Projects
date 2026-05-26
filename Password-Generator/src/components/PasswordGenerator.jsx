import { useEffect } from "react";

export function PasswordGenerator({generateButton}) {

  useEffect(() => {
    generateButton();
  },[generateButton])

  return (
    <div className="button-container">
      <button className="generate-password-button"
       onClick={generateButton}
      >Generate Password</button>
    </div>
  );
}
