import { Skill, Certification, Service } from '../types';

export const skills: Skill[] = [
  {
    name: "Vulnerability Assessment",
    icon: "Scan",
    description: "Expert in identifying, analyzing, and documenting security vulnerabilities in systems and applications."
  },
  {
    name: "Penetration Testing",
    icon: "Shield",
    description: "Skilled in conducting authorized simulated cyberattacks to evaluate security posture and exploit vulnerabilities."
  },
  {
    name: "Network Security",
    icon: "Network",
    description: "Proficient in analyzing network traffic, identifying security gaps, and implementing defensive measures."
  },
  {
    name: "Web Application Security",
    icon: "Code",
    description: "Experienced in testing web applications for security flaws including OWASP Top 10 vulnerabilities."
  },
  {
    name: "Security Tools",
    icon: "Terminal",
    description: "Advanced proficiency with tools like Metasploit, Burp Suite, Nmap, Wireshark, and other security testing platforms."
  },
  {
    name: "Reporting & Documentation",
    icon: "Clipboard",
    description: "Detailed documentation of findings, creating comprehensive vulnerability reports, and providing remediation guidance."
  }
];

export const certifications: Certification[] = [
  {
    name: "Junior Penetration Tester (eJPTv2)",
    issuer: "InterNetwork Expert {INE}",
    date: "Apr-2025",
    icon: "Award"
  }
];

export const services: Service[] = [
  {
    id: 1,
    title: "Vulnerability Assessment",
    description: "Comprehensive scanning and analysis of systems to identify security weaknesses and provide detailed remediation guidance.",
    icon: "Scan"
  },
  {
    id: 2,
    title: "Penetration Testing",
    description: "Authorized simulated cyberattacks to identify exploitable vulnerabilities before malicious actors do.",
    icon: "Shield"
  },
  {
    id: 3,
    title: "Web Application Testing",
    description: "In-depth security testing of web applications to identify and help fix critical vulnerabilities.",
    icon: "Code"
  }
];