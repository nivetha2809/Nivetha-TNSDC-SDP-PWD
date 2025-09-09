/* General */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  scroll-behavior: smooth;
  font-family: Arial, sans-serif;
}
:root {
  --purple: #6a0dad;       /* Main Purple */
  --red: #d32f2f;          /* Strong Red */
  --orange-deep: #e65100;
  --bg: #00f7ff;
}
body {
  background: var(--bg);
  color: #333;
}
/* Navbar */
header {
  background: linear-gradient(90deg, var(--red), var(--purple));
  padding: 15px;
  position: sticky;
  top: 0;
  z-index: 1000;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
}
nav {
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
nav .logo {
  color: white;
  font-size: 1.4rem;
  font-weight: 800;
  letter-spacing: 0.5px;
}
nav ul {
  list-style: none;
  display: flex;
  gap: 20px;
}
nav ul li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 6px 10px;
  border-radius: 10px;
  transition: background 0.3s;
}
nav ul li a:hover {
  background: rgba(255,255,255,0.2);
}
/* Layout helpers */
section {
  scroll-margin-top: 90px; /* avoids sticky header overlap */
}
/* Hero */
.hero {
  text-align: center;
  padding: 70px 20px 50px;
}
.hero .cta-wrap {
  margin-top: 18px;
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}
.btn {
  background: var(--red);
  color: white;
  border: none;
  padding: 10px 14px;
  border-radius: 12px;
  font-weight: 700;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  transition: transform 0.2s, background 0.2s;
}
.btn:hover { 
  transform: translateY(-2px); 
  background: #b71c1c; 
}
.btn.outline { 
  background: transparent; 
  color: var(--red); 
  border: 2px solid var(--red); 
}
.btn.outline:hover { 
  background: #ffebee; 
}
.profile-pic {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 5px solid var(--purple);
  animation: floatPic 3s ease-in-out infinite;
  box-shadow: 0 10px 25px rgba(106, 13, 173, 0.4);
}
.hero h2 {
  margin: 15px 0 6px;
  color: var(--purple);
  font-size: 2rem;
}
.hero p { 
  color:#5d4037; 
}
/* Floating animation */
@keyframes floatPic {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-15px); }
}
/* About Me */
.about-me {
  max-width: 700px;
  margin: 18px auto;
  text-align: left;
  color: #5d4037;
  font-size: 1rem;
  line-height: 1.6;
}
.about-me p { 
  margin-bottom: 10px; 
}
/* Skills */
#skills {
  background: #f3e5f5;
  padding: 50px 20px;
  text-align: center;
}
#skills h2 { 
  color: var(--purple); 
}
#skills .muted { 
  color:#6d4c41; 
  margin-top: 6px; 
}
.skills-container {
  max-width: 900px;
  margin: 18px auto 0;
  display: flex;
  flex-wrap: wrap;
  gap: 14px;
  justify-content: center;
}
.skills-container a {
  background: var(--purple);
  color: white;
  padding: 10px 14px;
  border-radius: 999px;
  text-decoration: none;
  transition: transform 0.2s, box-shadow 0.2s, background 0.2s;
  box-shadow: 0 6px 14px rgba(0,0,0,0.08);
}
.skills-container a:hover {
  background: #8e24aa;
  transform: translateY(-2px);
}
/* Proficiency */
#proficiency {
  padding: 50px 20px;
  text-align: center;
}
#proficiency h2 { 
  color: var(--purple); 
}
.progress-container {
  max-width: 700px;
  margin: 30px auto;
  text-align: left;
}
.skill { 
  margin-bottom: 20px; 
}
.skill p {
  margin-bottom: 6px;
  font-weight: bold;
  color: var(--red);
}
.progress-bar {
  background: #f8bbd0;
  border-radius: 25px;
  overflow: hidden;
  height: 20px;
  box-shadow: inset 0 2px 6px rgba(0,0,0,0.08);
}
.progress-bar span {
  display: block;
  height: 100%;
  width: 0; /* start hidden */
  background: linear-gradient(90deg, var(--purple), var(--red));
  border-radius: 25px;
  transition: width 1.6s ease-in-out;
}
/* Contact */
#contact {
  background: #ffe0e0;
  padding: 50px 20px;
  text-align: center;
}
#contact h2 {
  margin-bottom: 18px;
  color: var(--red);
}
/* Contact Form */
.contact-form {
  max-width: 500px;
  margin: 0 auto 26px;
  display: flex;
  flex-direction: column;
  gap: 14px;
}
.contact-form input,
.contact-form textarea {
  padding: 12px;
  border: 2px solid var(--purple);
  border-radius: 12px;
  font-size: 1rem;
  outline: none;
  resize: none;
  background: #fffaf0;
}
.contact-form input:focus,
.contact-form textarea:focus {
  border-color: var(--red);
  box-shadow: 0 0 0 4px rgba(211, 47, 47, 0.15);
}
.contact-form button {
  background: var(--red);
  color: white;
  border: none;
  padding: 12px;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s, background 0.2s, box-shadow 0.2s;
  box-shadow: 0 8px 18px rgba(211, 47, 47, 0.25);
}
.contact-form button:hover {
  background: #b71c1c;
  transform: translateY(-2px);
}
/* Quick Links */
.contact-links a {
  display: inline-block;
  margin: 8px;
  text-decoration: none;
  font-weight: bold;
  color: var(--purple);
  transition: color 0.2s;
}
.contact-links a i { margin-right: 8px; }
.contact-links a:hover { color: var(--red); }
/* Footer */
footer {
  background: linear-gradient(90deg, var(--purple), var(--red));
  color: white;
  text-align: center;
  padding: 16px;
  font-weight: 600;
}
/* Fade-in animation (for sections) */
.fade-in {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.8s ease-out, transform 0.8s ease-out;
}
.fade-in.show {
  opacity: 1;
  transform: translateY(0);
}
