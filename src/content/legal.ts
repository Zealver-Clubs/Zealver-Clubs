/**
 * Privacy Policy and Terms & Conditions.
 *
 * Reproduced as supplied, word for word. Only decorative emoji from the
 * source have been dropped, since screen readers announce them and they read
 * oddly in a legal document; no wording has been added, removed or softened.
 * Treat edits here as legal changes, not copy changes.
 */

export type LegalSection = {
  heading?: string;
  paragraphs?: string[];
  list?: string[];
  /** Rendered with emphasis, for the clauses that carry the most weight. */
  emphasis?: boolean;
};

export type LegalDocument = {
  slug: string;
  title: string;
  effective: string;
  intro: string[];
  sections: LegalSection[];
};

const OWNER = "Zealver Living Private Limited";

export const privacyPolicy: LegalDocument = {
  slug: "privacy-policy",
  title: "Privacy Policy",
  effective: "January 2026",
  intro: [
    `This website is owned and operated by ${OWNER}, which operates the brand Zealver Clubs™ (hereinafter referred to as "Zealver", "Zealver Clubs™", "we", "us", or "our").`,
    "At Zealver Clubs™, one of our main priorities is the privacy and dignity of our visitors, members, and hosts. This Privacy Policy document describes the types of information that are collected and recorded by Zealver and how we use it.",
    "If you have additional questions or require more information about our Privacy Policy, please contact us using the details provided below.",
    "This Privacy Policy applies only to our online activities and is valid for visitors to our website with regard to the information that they share and/or that we collect. This policy does not apply to any information collected offline or via channels other than this website.",
  ],
  sections: [
    {
      heading: "1. Consent",
      paragraphs: [
        "By using our website, submitting forms, registering, or making a payment, you hereby consent to this Privacy Policy and agree to its terms.",
      ],
    },
    {
      heading: "2. Information We Collect",
      paragraphs: ["We may collect the following information:"],
      list: [
        "Name",
        "Phone number",
        "Email address",
        "Age or age group",
        "Emergency contact details",
        "Preferred club / location",
        "Any information submitted through forms, WhatsApp, email, or registration systems",
        "Payment-related details (processed via secure third-party gateways — we do not store card or UPI details)",
      ],
    },
    {
      paragraphs: [
        "If you contact us directly, we may receive additional information such as the contents of your message, attachments you may send, or any other information you choose to provide.",
        "If you register for a membership or program, we may ask for contact and basic participation-related information.",
      ],
    },
    {
      heading: "3. How We Use Your Information",
      paragraphs: ["We use the information we collect to:"],
      list: [
        "Provide, operate, and manage Zealver Clubs™",
        "Process registrations and payments",
        "Communicate with you about sessions, schedules, and updates",
        "Improve our services, programs, and website",
        "Understand how users interact with our website",
        "Send important service messages, reminders, and announcements",
        "Send optional marketing or informational communication",
        "Maintain safety and operational records",
        "Prevent fraud or misuse of services",
      ],
    },
    {
      heading: "4. Log Files",
      paragraphs: [
        "Zealver Clubs™ follows a standard procedure of using log files. These files log visitors when they visit websites.",
        "Information collected may include IP address, browser type, ISP, date and time stamp, referring/exit pages, and click data. These are not linked to personally identifiable information and are used only for analytics, site administration, usage trends, and improving user experience.",
      ],
    },
    {
      heading: "5. Cookies and Tracking Technologies",
      paragraphs: [
        "Zealver Clubs™ uses cookies to store visitor preferences and to optimize the user experience. You can choose to disable cookies through your browser settings.",
      ],
    },
    {
      heading: "6. Third-Party Services",
      paragraphs: ["We may use third-party services such as:"],
      list: [
        "Payment gateways",
        "WhatsApp, email, and SMS providers",
        "Analytics tools",
        "Form and CRM tools (e.g., Zoho)",
      ],
    },
    {
      paragraphs: [
        "These third parties have their own privacy policies. Zealver Clubs™ has no control over and assumes no responsibility for their practices.",
      ],
    },
    {
      heading: "7. Data Sharing",
      paragraphs: [
        "We do not sell, rent, or trade your personal data.",
        "We may share your data only:",
      ],
      list: [
        "With service providers necessary to operate our services",
        "To comply with legal obligations",
        "To protect the rights, safety, and property of Zealver, our members, or others",
      ],
    },
    {
      heading: "8. Data Security",
      paragraphs: [
        "We take reasonable technical and organizational measures to protect your data. However, no method of transmission over the internet is 100% secure.",
      ],
    },
    {
      heading: "9. Your Rights",
      paragraphs: ["You have the right to:"],
      list: [
        "Request access to your personal data",
        "Request correction of incorrect data",
        "Request deletion of your data (subject to legal and operational requirements)",
        "Withdraw consent for marketing communication",
      ],
    },
    {
      paragraphs: [
        "To exercise these rights, contact us at info@zealverclubs.com.",
      ],
    },
    {
      heading: "10. International Users & GDPR",
      paragraphs: [
        "If you are accessing this site from outside India (including the EU), you have rights including access, rectification, erasure, restriction, objection, and data portability. We will respond within reasonable time as per applicable law.",
      ],
    },
    {
      heading: "11. Children's Information",
      paragraphs: [
        "Zealver Clubs™ is intended primarily for seniors and their families. We do not knowingly collect personal information from children under the age of 13.",
      ],
    },
    {
      heading: "12. Changes to This Policy",
      paragraphs: [
        "We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date.",
      ],
    },
    {
      heading: "13. Contact Us",
      paragraphs: [
        "If you have any questions about this Privacy Policy or your data, please contact:",
        `Zealver Clubs™ (A brand of ${OWNER})`,
        "Email: info@zealverclubs.com",
        "Mumbai, India",
      ],
    },
  ],
};

export const termsAndConditions: LegalDocument = {
  slug: "terms-conditions",
  title: "Terms & Conditions",
  effective: "January 2026",
  intro: [
    `This website ("Website") is owned and operated by ${OWNER}, which operates the brand Zealver Clubs™ (hereinafter referred to as "Zealver", "Zealver Clubs™", "we", "us", or "our").`,
    'By accessing, browsing, registering, making a payment, or participating in any Zealver Clubs™ activity, you ("User", "Member", "Participant", "You") agree to be bound by these Terms & Conditions ("Agreement"). If you do not agree, please do not use the Website or our services.',
  ],
  sections: [
    {
      heading: "1. Acceptance of Terms & Modification",
      list: [
        `1.1 This Agreement constitutes a binding legal contract between You and ${OWNER}.`,
        "1.2 Use of the Website or participation in any activity constitutes unconditional acceptance.",
        "1.3 Zealver reserves the right to modify these Terms at any time without prior notice. Updated Terms shall be effective once published.",
        "1.4 Zealver may suspend or terminate access to the Website or services at any time without notice.",
      ],
    },
    {
      heading: "2. Nature of Services",
      list: [
        "2.1 Zealver Clubs™ provides community-based social, recreational, movement, and engagement activities for seniors.",
        "2.2 Zealver Clubs™ is not a medical service, healthcare provider, physiotherapy centre, rehabilitation centre, or emergency service.",
        "2.3 No medical advice, diagnosis, or treatment is provided.",
        "2.4 Participation is voluntary and entirely at the User's own discretion and risk.",
      ],
    },
    {
      heading: "3. Eligibility & Mandatory Registration",
      paragraphs: [
        "3.1 The Website and all Zealver Clubs™ services are intended primarily for users in India, but may be accessed elsewhere.",
        "3.2 Registration is mandatory for all users and participants. No person may:",
      ],
      list: [
        "Attend any session",
        "Participate in any activity",
        "Purchase any membership, pass, or package",
      ],
    },
    {
      paragraphs: [
        "without completing registration and accepting these Terms & Conditions and related policies.",
        "3.3 You are responsible for ensuring that all information provided during registration is true, accurate, and complete.",
        "3.4 You agree to comply with all applicable laws and not misuse the Website, systems, or services.",
      ],
    },
    {
      heading: "4. Health, Safety & Assumption of Risk",
      list: [
        "4.1 You confirm that you are physically and mentally fit to participate or have consulted a doctor.",
        "4.2 You understand that activities may involve movement and physical exertion.",
        "4.3 You voluntarily assume all risks, including but not limited to injury, falls, illness, disability, or death.",
        "4.4 Zealver, its directors, employees, hosts, venue partners, or affiliates shall not be liable for any injury, health incident, loss, or death.",
      ],
    },
    {
      heading: "5. Emergencies",
      list: [
        "5.1 In case of emergency, Zealver may contact your emergency contact or call emergency services.",
        "5.2 Zealver is not responsible for medical decisions, response times, or outcomes.",
      ],
    },
    {
      heading: "6. Registration, Accounts & Security",
      list: [
        "6.1 Registration is mandatory for all participants.",
        "6.2 You must provide accurate, current, and complete information.",
        "6.3 You are responsible for maintaining the confidentiality of any login or registration credentials.",
        "6.4 You are responsible for all activity carried out under your registration.",
        "6.5 You must notify Zealver immediately at info@zealverclubs.com of any unauthorized use or breach.",
        "6.6 If you provide false, incomplete, or misleading information, Zealver may suspend or terminate your registration and deny access without refund or compensation.",
      ],
    },
    {
      heading: "7. Payments, Refunds, Transfers & Cancellations",
      emphasis: true,
      paragraphs: [
        "ALL SALES ARE FINAL",
        "By making any payment to Zealver Clubs™, you explicitly agree:",
      ],
      list: [
        "No refunds under any circumstances",
        "No transfers to another person, location, or time period",
        "No credits, carry-forwards, or adjustments",
        "Missed sessions are forfeited",
      ],
    },
    {
      paragraphs: [
        "This applies including (but not limited to): illness, travel, schedule conflicts, dissatisfaction, or non-attendance.",
        "All purchases are final, non-refundable, non-transferable, and non-adjustable.",
        "7.2 Zealver may change schedules, venues, hosts, or cancel/reschedule sessions for operational reasons. No cash refunds will be issued.",
      ],
    },
    {
      heading: "8. Nature of Membership / Passes",
      list: [
        "8.1 Memberships and passes grant only a limited, revocable right to participate, not a property or contractual right.",
        "8.2 Zealver may deny, suspend, or revoke access for safety, conduct, or operational reasons without refund.",
      ],
    },
    {
      heading: "9. Code of Conduct",
      paragraphs: ["9.1 Zealver may remove any participant for:"],
      list: [
        "Disruptive, unsafe, or inappropriate behaviour",
        "Harassment or misconduct",
        "Non-cooperation with staff or hosts",
      ],
    },
    {
      paragraphs: [
        "9.2 Such removal shall be without refund, credit, or compensation.",
      ],
    },
    {
      heading: "10. Photography & Media Consent",
      list: [
        "10.1 You grant Zealver the right to photograph or record you during activities.",
        "10.2 You grant irrevocable permission to use such photos/videos for marketing, website, social media, and promotional materials without compensation.",
      ],
    },
    {
      heading: "11. Third-Party Venues & Services",
      list: [
        "11.1 Activities may be conducted at third-party venues.",
        "11.2 Zealver is not responsible for acts, omissions, safety, or facilities of such venues or service providers.",
      ],
    },
    {
      heading: "12. Intellectual Property",
      paragraphs: [
        `All content, trademarks, logos, text, images, and materials are owned by or licensed to ${OWNER}.`,
        "You may not copy, reproduce, distribute, or commercially exploit any content.",
      ],
    },
    {
      heading: "13. Communication & User Conduct",
      paragraphs: [
        "You agree not to post, transmit, or engage in abusive, illegal, defamatory, or harmful behaviour.",
        "Zealver may remove content or restrict access at its sole discretion.",
      ],
    },
    {
      heading: "14. No Warranty",
      paragraphs: [
        'All services and information are provided "as is" without warranties of any kind.',
      ],
    },
    {
      heading: "15. Limitation of Liability",
      paragraphs: [
        "To the maximum extent permitted by law, Zealver shall not be liable for any direct, indirect, incidental, or consequential damages, injuries, losses, or claims arising from:",
      ],
      list: [
        "Use of the Website",
        "Participation in any activity",
        "Any third-party venues or services",
      ],
    },
    {
      heading: "16. Indemnification",
      paragraphs: [
        `You agree to indemnify and hold harmless ${OWNER} from any claims, damages, losses, or legal costs arising from your participation or breach of these Terms.`,
      ],
    },
    {
      heading: "17. Termination & Restriction of Access",
      paragraphs: [
        "Zealver may suspend or terminate access or participation at any time for legal, safety, behavioural, or operational reasons without notice.",
      ],
    },
    {
      heading: "18. Privacy",
      paragraphs: [
        "Your use is also governed by our Privacy Policy available on the Website.",
      ],
    },
    {
      heading: "19. Force Majeure",
      paragraphs: [
        "Zealver shall not be liable for failure or delay due to events beyond reasonable control including natural disasters, pandemics, government actions, or system failures.",
      ],
    },
    {
      heading: "20. Severability",
      paragraphs: [
        "If any provision is held invalid or unenforceable, the remaining provisions shall remain in full force.",
      ],
    },
    {
      heading: "21. Governing Law & Jurisdiction",
      paragraphs: [
        "This Agreement shall be governed by the laws of India.",
        "Exclusive jurisdiction: Courts of Mumbai, India.",
      ],
    },
    {
      heading: "22. Contact",
      paragraphs: [
        `Zealver Clubs™ (A brand operated by ${OWNER})`,
        "Email: info@zealverclubs.com",
        "Mumbai, India",
      ],
    },
  ],
};

export const legalDocuments = [privacyPolicy, termsAndConditions];
