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

export const participantAgreement: LegalDocument = {
  slug: "participant-agreement",
  title: "Participant Agreement, Waiver of Liability and Informed Consent",
  effective: "January 2026",
  intro: [
    `Zealver Clubs\u2122, operated by ${OWNER}.`,
    "This Agreement is entered into by each Participant on enrolment. Participant details, emergency contact details and the declarations below are completed and signed at registration.",
    "This is the agreement that governs participation in Sessions. It sits alongside, and should be read with, our Terms & Conditions and Privacy Policy.",
  ],
  sections: [
    {
      heading: "Article 1: Definitions and interpretation",
      list: [
        "1.1 Definitions. For the purposes of this Agreement, the following terms shall have the meanings ascribed below:",
        "\"Agreement\" means this Participant Agreement, Waiver of Liability and Informed Consent, including all schedules, annexures and amendments executed from time to time.",
        "\"Participant\" means the individual enrolling in and participating in the Program, whose details are set forth in the execution clause of this Agreement.",
        "\"Program\" means the wellness, social engagement and low-intensity physical activity sessions, classes, workshops and related activities organized, facilitated or offered by Zealver Clubs\u2122, whether conducted in-person, virtually or through hybrid formats.",
        "\"Service Provider\" means Zealver Clubs\u2122, a wellness and social engagement platform for older adults, operating in India, including its proprietors, directors, officers, employees, agents, representatives, independent contractors, volunteers, instructors, hosts, facilitators and all affiliated persons or entities.",
        "\"Session\" means any individual class, meeting, activity or event forming part of the Program, regardless of duration or format.",
        "\"Participant Data\" means all personal information, health-related information, emergency contact details and other data provided by the Participant to the Service Provider in connection with enrollment, participation or ongoing engagement with the Program.",
        "\"Force Majeure Event\" means any event or circumstance beyond the reasonable control of the Service Provider, including but not limited to acts of God, natural disasters, pandemics, epidemics, government orders, civil disturbances, terrorism, war or venue unavailability.",
      ],
    },
    {
      heading: "Article 2: Nature and scope of the Program",
      list: [
        "2.1 Program Description. The Participant acknowledges and understands that the Program is designed to provide general wellness support, social engagement opportunities and low-intensity physical activity specifically tailored for older adults. The Program operates on a non-medical, non-therapeutic basis and is intended solely for recreational, social and general wellness purposes.",
        "2.2 Activities Included. The Participant understands that Sessions may include various activities designed to promote mobility, flexibility, balance, coordination and social interaction. Such activities may encompass light movement exercises, seated or standing physical activities, gentle stretching, rhythmic movements coordinated with music, breathing exercises, functional movements designed to support activities of daily living, cognitive engagement activities, creative pursuits, and social interaction opportunities. The specific activities offered may vary between Sessions and may be modified by facilitators based on participant needs, venue constraints or other operational considerations.",
        "2.3 Non-Medical Nature of Services. The Participant expressly acknowledges and agrees that the Program does not constitute, and is not intended to constitute, medical care, medical treatment, medical diagnosis, physical therapy, occupational therapy, rehabilitation services, mental health services, nutritional counseling or any other form of healthcare or clinical service. The Service Provider's hosts, facilitators, instructors and other personnel are not healthcare professionals unless expressly identified as such, and even where individuals may hold healthcare qualifications, they are not providing clinical services within the scope of the Program. Nothing provided during any Session should be construed as medical advice, and Participants should not rely upon any information shared during Sessions as a substitute for professional medical consultation.",
        "2.4 Voluntary Participation. Participation in the Program is entirely voluntary. The Participant retains the absolute right to decline participation in any activity, to modify the intensity or nature of their participation in any activity, to take breaks at any time, to leave any Session early, or to discontinue participation in the Program entirely without providing reasons or facing adverse consequences.",
        "2.5 No Guaranteed Outcomes. The Service Provider makes no representations, warranties or guarantees regarding the outcomes, benefits or results that may be achieved through participation in the Program. Any health benefits, social benefits, functional improvements or other positive outcomes that may be experienced are individual in nature and cannot be guaranteed or predicted.",
      ],
    },
    {
      heading: "Article 3: Participant representations and medical clearance",
      list: [
        "3.1 Medical Consultation Requirement. The Participant represents and warrants that they have consulted with a qualified medical practitioner regarding their fitness to participate in physical activity programs of the nature offered by Zealver Clubs\u2122. The Participant acknowledges that it is their sole responsibility to obtain medical clearance before commencing participation and to consult their physician regarding any changes in health status that may affect their ability to participate safely.",
        "3.2 Health Status Disclosure. The Participant agrees to disclose to the Service Provider any medical conditions, physical limitations, mobility restrictions, chronic illnesses, recent surgeries, cardiovascular conditions, balance disorders, neurological conditions, musculoskeletal conditions or other health factors that may affect their safe participation in the Program. The Participant understands that failure to disclose relevant health information may increase the risk of injury or adverse health events and may affect the Service Provider's ability to provide appropriate modifications or accommodations.",
        "3.3 Ongoing Health Monitoring. The Participant acknowledges that they are solely responsible for monitoring their own health status and physical condition throughout their participation in the Program. The Participant agrees to immediately inform the Session facilitator if they experience any pain, discomfort, dizziness, shortness of breath, chest discomfort, unusual fatigue, numbness, loss of coordination or any other concerning symptoms during a Session.",
        "3.4 Medication and Medical Devices. The Participant is solely responsible for managing their own medications, medical devices, medical equipment and therapeutic interventions. The Service Provider assumes no responsibility for reminding Participants to take medications, monitoring medication compliance, storing medications or medical devices, or providing assistance with medical equipment.",
        "3.5 Fitness Representations. By executing this Agreement, the Participant represents that they are able to walk independently or with the assistance of a mobility aid such as a cane, walker or rollator, and that they are capable of navigating stairs consisting of three to four steps, which may be required to access certain venue locations. The Participant understands that if their mobility status changes such that these representations are no longer accurate, they must inform the Service Provider immediately.",
      ],
    },
    {
      heading: "Article 4: Assumption of risk",
      list: [
        "4.1 Acknowledgement of Inherent Risks. The Participant expressly acknowledges and accepts that participation in physical activity, movement-based programs and group activities carries inherent risks, particularly for older adults who may have age-related physical vulnerabilities, chronic health conditions or reduced physiological reserves. These risks exist regardless of the precautions taken by the Service Provider and cannot be eliminated.",
        "4.2 Specific Risks Identified. Without limiting the generality of the foregoing, the Participant specifically acknowledges awareness of the following potential risks associated with Program participation: muscle soreness, stiffness or strain; general fatigue or exhaustion; loss of balance or coordination leading to falls; dizziness, light-headedness or vertigo; joint discomfort, inflammation or pain; exacerbation or aggravation of pre-existing medical conditions; cardiovascular events including elevated heart rate, elevated blood pressure or arrhythmias; respiratory difficulties or shortness of breath; unexpected acute medical events including but not limited to heart attack, stroke or loss of consciousness; fractures, sprains, strains or other musculoskeletal injuries; dehydration or heat-related illness; and psychological or emotional distress.",
        "4.3 Environmental and Venue Risks. The Participant further acknowledges risks associated with the physical environment in which Sessions are conducted, including risks related to floor surfaces that may be slippery, uneven or otherwise hazardous; inadequate lighting; temperature extremes or inadequate climate control; crowded conditions or limited space; equipment or furniture that may be unstable or inappropriate for all users; and emergency egress challenges in certain venue configurations.",
        "4.4 Voluntary Assumption. Having been fully informed of these risks, and acknowledging that additional risks may exist that are not specifically enumerated, the Participant voluntarily chooses to participate in the Program and expressly assumes all risks associated with such participation, whether such risks are known or unknown, foreseen or unforeseen, disclosed or undisclosed.",
      ],
    },
    {
      heading: "Article 5: Participant responsibilities and obligations",
      list: [
        "5.1 Personal Safety Management. The Participant accepts sole and complete responsibility for their personal safety and well-being during all aspects of Program participation. This responsibility includes, but is not limited to, the obligation to participate only at a pace and intensity level that is comfortable and appropriate for the Participant's individual fitness level and health status; to take rest breaks whenever needed without waiting for instruction or permission; to maintain adequate hydration before, during and after Sessions; to wear appropriate footwear that provides adequate support and slip resistance; to use stable, appropriate seating and to ensure that any chairs or supports used during Sessions are secure and properly positioned; and to perform only those movements and activities that the Participant feels confident and safe performing.",
        "5.2 Immediate Cessation Upon Distress. The Participant agrees to immediately cease any activity and notify the Session facilitator if they experience any pain, discomfort, dizziness, unusual symptoms or concerning physical or emotional responses during participation. The Participant understands that continuing to participate while experiencing distress may increase the risk of injury or adverse health outcomes.",
        "5.3 Environmental Preparation. For Sessions conducted virtually or in hybrid formats, the Participant is solely responsible for ensuring that their physical environment is safe and appropriate for participation. This includes ensuring adequate space free from obstacles or tripping hazards, appropriate flooring that is not slippery, adequate lighting, access to a stable chair of appropriate height, availability of water for hydration, and absence of environmental hazards such as loose rugs, cords or other objects that could cause falls.",
        "5.4 Equipment and Props. If the Participant chooses to use any equipment, props, exercise aids or other tools during Sessions, whether recommended by facilitators or selected independently, the Participant assumes sole responsibility for ensuring such items are in good condition, appropriate for the Participant's use and used in a safe manner.",
        "5.5 Updates to Health Status. The Participant agrees to promptly inform the Service Provider of any changes to their health status, including new diagnoses, changes in medications, surgical procedures, significant injuries, changes in mobility or balance, or any other developments that may affect their safe participation in the Program.",
      ],
    },
    {
      heading: "Article 6: Waiver and release of liability",
      list: [
        "6.1 Comprehensive Release. To the maximum extent permitted under applicable law, the Participant hereby irrevocably and unconditionally releases, waives, discharges and covenants not to sue the Service Provider, its proprietors, directors, officers, shareholders, employees, agents, representatives, independent contractors, volunteers, instructors, hosts, facilitators, partner organizations, venue owners, venue operators, landlords, and all affiliated persons or entities (collectively, the \"Released Parties\") from any and all claims, demands, causes of action, damages, losses, costs, expenses or liabilities of any nature whatsoever, whether in contract, tort, negligence, strict liability or otherwise, arising out of or in any way connected with the Participant's enrollment in, participation in, travel to or from, or any other aspect of involvement with the Program.",
        "6.2 Scope of Release. This release applies to claims arising from any cause whatsoever, including but not limited to the ordinary negligence of the Released Parties, the condition of premises or facilities used for Sessions, the selection, provision or use of equipment or materials, the acts or omissions of other participants, the acts or omissions of instructors or facilitators, any emergency response or lack thereof, any first aid or medical assistance provided or not provided, and any other circumstances related to Program participation. This release specifically includes claims for personal injury, bodily injury, illness, disease, death, property damage, emotional distress, loss of consortium or any other form of harm or loss.",
        "6.3 Temporal Scope. The Participant acknowledges that this release applies to incidents, injuries or damages occurring before, during or after any Session, including but not limited to injuries occurring while traveling to or from Session locations, injuries occurring during Session activities, injuries occurring during breaks or social periods within Sessions, and injuries that manifest after a Session has concluded but which arose from participation in Program activities.",
        "6.4 Pre-Existing Conditions. The Participant specifically acknowledges that this release applies to any aggravation, exacerbation or worsening of pre-existing medical conditions, injuries or health issues that may occur as a result of Program participation, whether such pre-existing conditions were disclosed to the Service Provider or not.",
        "6.5 Third Party Claims. The Participant agrees to release and hold harmless the Released Parties from any claims brought by third parties, including family members, heirs, estate representatives or other persons, arising from or related to the Participant's participation in the Program.",
      ],
    },
    {
      heading: "Article 7: Indemnification",
      list: [
        "7.1 Participant Indemnity. The Participant agrees to indemnify, defend and hold harmless the Released Parties from and against any and all claims, demands, causes of action, damages, judgments, costs, expenses and attorney fees arising out of or resulting from the Participant's participation in the Program, including but not limited to claims brought by third parties for injuries or damages allegedly caused by the Participant, claims arising from the Participant's breach of this Agreement, claims arising from the Participant's violation of any law, regulation or the rights of third parties, and claims arising from any misrepresentation made by the Participant regarding their health status or fitness to participate.",
        "7.2 Defence Costs. The Participant's indemnification obligations include the obligation to reimburse the Released Parties for all costs of defence, including reasonable attorney fees, expert witness fees, court costs and other litigation expenses incurred in defending against any claim for which indemnification is owed under this Article",
      ],
    },
    {
      heading: "Article 8: Limitation of liability",
      list: [
        "8.1 Maximum Liability Cap. Notwithstanding any other provision of this Agreement, and to the maximum extent permitted by law, the aggregate liability of the Service Provider to the Participant for any and all claims arising out of or related to this Agreement or the Participant's participation in the Program, whether in contract, tort, negligence, strict liability or otherwise, shall not exceed the total fees actually paid by the Participant to the Service Provider for Program participation during the six-month period immediately preceding the event giving rise to the claim.",
        "8.2 Exclusion of Consequential Damages. In no event shall the Service Provider be liable for any indirect, incidental, special, punitive, exemplary or consequential damages, including but not limited to loss of income, loss of enjoyment, emotional distress, pain and suffering, or loss of consortium, even if the Service Provider has been advised of the possibility of such damages.",
        "8.3 No Liability for Third Party Acts. The Service Provider shall not be liable for any injury, damage or loss caused by the acts or omissions of other participants, venue owners or operators, third-party contractors, or other persons not under the direct control of the Service Provider.",
      ],
    },
    {
      heading: "Article 9: Emergency response and medical authorization",
      list: [
        "9.1 Emergency Contact Authorization. In the event of a medical emergency, urgent health situation or circumstances where the Participant appears to require medical attention, the Participant authorizes the Service Provider to contact the Participant's designated emergency contact person, to contact venue personnel or security staff, to summon local emergency medical services, and to take such other reasonable steps as may be necessary under the circumstances.",
        "9.2 No Guarantee of Response. The Participant expressly acknowledges and agrees that the Service Provider does not guarantee the availability of immediate medical response, does not guarantee that emergency services will arrive within any particular timeframe, and is not responsible for the quality, timeliness or outcomes of any emergency medical care that may be provided by third parties. The Service Provider's personnel are not required to provide first aid or emergency medical care and may choose to do so only at their sole discretion.",
        "9.3 Medical Treatment Authorization. In circumstances where the Participant is unable to communicate and emergency medical intervention appears necessary, the Participant authorizes the Service Provider to consent to emergency medical treatment on the Participant's behalf pending contact with the emergency contact person or the Participant's family members. The Participant agrees that the Service Provider shall have no liability for any decisions made in good faith regarding emergency medical care.",
        "9.4 Cost Responsibility. The Participant acknowledges and agrees that they are solely responsible for all costs associated with any medical care, emergency response services, ambulance transport, hospital treatment or other healthcare services that may be required as a result of injury or illness occurring during Program participation. The Service Provider has no obligation to pay for or reimburse any medical expenses.",
      ],
    },
    {
      heading: "Article 10: Data protection and privacy",
      list: [
        "10.1 Consent to Data Collection. The Participant consents to the collection, processing, storage and use of Participant Data by the Service Provider for the purposes of administering the Program, maintaining enrollment records, facilitating communication regarding Sessions, managing emergency contact information, improving Program quality and safety, and fulfilling legal or regulatory obligations.",
        "10.2 Lawful Basis for Processing. The Service Provider processes Participant Data on the basis of the Participant's consent as provided in this Agreement, contractual necessity for the performance of this Agreement, compliance with legal obligations to which the Service Provider is subject, and legitimate interests in operating the Program safely and effectively.",
        "10.3 Data Security. The Service Provider will implement reasonable technical and organizational measures to protect Participant Data against unauthorized access, disclosure, alteration or destruction. However, the Participant acknowledges that no data security measures can provide absolute protection and that the Service Provider cannot guarantee the complete security of Participant Data.",
        "10.4 Data Retention. Participant Data will be retained for such period as is necessary to fulfill the purposes for which it was collected, to comply with legal retention requirements, and to address potential legal claims. Upon request and subject to legal retention requirements, the Service Provider will delete or anonymize Participant Data that is no longer necessary for these purposes.",
        "10.5 Third Party Sharing. The Service Provider may share Participant Data with third parties including venue operators where necessary for Session logistics, emergency contacts in the event of health or safety concerns, service providers who assist with Program administration, and legal or regulatory authorities where required by law. The Service Provider will not sell Participant Data to third parties for marketing purposes.",
        "10.6 Participant Rights. The Participant has the right to access Participant Data held by the Service Provider, to request correction of inaccurate data, to request deletion of data subject to legal retention requirements, to withdraw consent for data processing where consent is the lawful basis, and to lodge complaints with applicable data protection authorities regarding the Service Provider's data practices.",
        "10.7 Communication Consent. The Participant specifically consents to receiving Program-related communications via electronic means including WhatsApp, SMS text messaging, email and voice telephone calls. Such communications may include Session schedules, venue information, safety reminders, Program updates and other operational information. The Participant may withdraw consent for non-essential communications at any time by notifying the Service Provider in writing.",
      ],
    },
    {
      heading: "Article 11: Program policies and participant conduct",
      list: [
        "11.1 Attendance and Punctuality. While Sessions operate on a flexible attendance basis, Participants are encouraged to arrive on time and to notify the Service Provider if they will be absent from a Session they had planned to attend, as this assists with Session planning and participant safety monitoring.",
        "11.2 Attendant and Helper Policy. The Participant acknowledges and agrees that attendants, helpers, caregivers or family members are not permitted to sit inside the Session space during Program activities. This policy is designed to maintain the focus and integrity of the participant experience. Attendants may wait in designated waiting areas where available and may assist with transportation to and from the venue.",
        "11.3 Respectful Conduct. Participants are expected to conduct themselves in a respectful, courteous manner toward facilitators, venue staff and other participants. Behavior that is disruptive, disrespectful, discriminatory, harassing or otherwise inconsistent with a safe and welcoming environment may result in removal from a Session or termination of Program participation.",
        "11.4 Modification and Cancellation. The Service Provider reserves the right to modify Session schedules, change venues, substitute facilitators, alter the format or content of Sessions, cancel individual Sessions, or make other operational changes as may be necessary due to Force Majeure Events, venue unavailability, facilitator illness, insufficient enrollment, safety concerns or other operational necessities. The Service Provider will provide reasonable notice of such changes where feasible but is not liable for any inconvenience or damages resulting from such modifications or cancellations.",
        "11.5 Photography and Recording. The Service Provider may photograph or video record Sessions for quality assurance, promotional purposes or documentation. By participating in the Program, the Participant consents to being photographed or recorded and consents to the use of such photographs or recordings for Program promotion, marketing materials, website content, social media or other purposes. Participants who do not wish to be photographed or recorded should notify the Service Provider in writing.",
        "11.6 Intellectual Property. All materials, content, methodologies, instruction techniques, curricula and other intellectual property associated with the Program remain the exclusive property of the Service Provider. Participants may not record, reproduce, distribute or commercially exploit any Program content without express written permission.",
      ],
    },
    {
      heading: "Article 12: Termination",
      list: [
        "12.1 Participant Termination Rights. The Participant may terminate participation in the Program at any time by providing written notice to the Service Provider. Refunds of prepaid fees, if any, will be handled in accordance with the Service Provider's then-current refund policy.",
        "12.2 Service Provider Termination Rights. The Service Provider reserves the right to terminate a Participant's enrollment in the Program immediately and without prior notice if the Participant engages in conduct that violates this Agreement, poses a safety risk to themselves or others, disrupts Sessions, fails to meet the fitness requirements for safe participation, or for any other reason that the Service Provider determines in good faith makes continued participation inadvisable.",
        "12.3 Effect of Termination. Upon termination of Program participation for any reason, the provisions of this Agreement that by their nature should survive termination shall remain in full force and effect, including but not limited to the waiver and release of liability, indemnification obligations, limitation of liability, dispute resolution provisions and governing law provisions.",
      ],
    },
    {
      heading: "Article 13: Dispute resolution",
      list: [
        "13.1 Informal Resolution. In the event of any dispute, controversy or claim arising out of or relating to this Agreement or the Participant's participation in the Program, the parties agree to first attempt to resolve the matter through good faith informal negotiations. The Participant agrees to notify the Service Provider in writing of any concerns or complaints and to provide the Service Provider with a reasonable opportunity to address and resolve the matter before pursuing formal dispute resolution.",
        "13.2 Arbitration. If mediation does not result in resolution within sixty days of commencement, any remaining disputes shall be finally resolved through binding arbitration administered in accordance with the Arbitration and Conciliation Act, 1996, as amended. The arbitration shall be conducted by a sole arbitrator mutually agreed upon by the parties, or failing such agreement, appointed in accordance with the statutory provisions. The seat of arbitration shall be Mumbai, Maharashtra, and the language of arbitration shall be English.",
      ],
    },
    {
      heading: "Article 14: General provisions",
      list: [
        "14.1 Governing Law and Jurisdiction. This Agreement shall be governed by and construed in accordance with the laws of India, without regard to conflict of law principles. Subject to the dispute resolution provisions set forth in Article 13, the courts of Mumbai, Maharashtra shall have exclusive jurisdiction over any disputes arising under this Agreement.",
        "14.2 Entire Agreement. This Agreement constitutes the entire understanding between the parties with respect to the subject matter hereof and supersedes all prior or contemporaneous agreements, representations, warranties and understandings, whether written or oral, relating to such subject matter. No amendment, modification or waiver of any provision of this Agreement shall be effective unless in writing and signed by both parties.",
        "14.4 No Waiver. The failure of either party to enforce any provision of this Agreement shall not constitute a waiver of such provision or the right to enforce it in the future. No waiver of any breach of this Agreement shall constitute a waiver of any subsequent breach.",
        "14.5 Notices. All notices, requests, demands and other communications required or permitted under this Agreement shall be in writing and shall be deemed to have been duly given when delivered personally, when transmitted by email with confirmation of receipt, or three business days after being sent by registered post to the addresses provided by the parties.",
        "14.6 Force Majeure. Neither party shall be liable for any failure or delay in performance under this Agreement to the extent such failure or delay is caused by Force Majeure Events. The affected party shall notify the other party promptly of any such event and shall use reasonable efforts to minimize the impact thereof.",
        "14.7 Independent Relationship. Nothing in this Agreement creates a partnership, joint venture, employment relationship or agency relationship between the parties. The Participant is an independent participant in the Program and is not an employee, agent or representative of the Service Provider.",
      ],
    },
    {
      heading: "Execution",
      paragraphs: [
        "By signing below, the Participant acknowledges that they have read, understood and agree to be bound by all terms and conditions set forth in this Participant Agreement, Waiver of Liability and Informed Consent.",
      ],
    },
    {
      heading: "Information collected at registration",
      paragraphs: [
      ],
    },
    {
      heading: "Emergency contact details collected at registration",
      paragraphs: [
      ],
    },
    {
      heading: "Participant declarations",
      list: [
        "I hereby declare and confirm the following statements to be true and accurate to the best of my knowledge:",
        "I am enrolling in Zealver Clubs\u2122 voluntarily and of my own free will, without coercion or undue influence from any person.",
        "I have consulted with my physician regarding my fitness to participate in low-intensity physical activity programs, or I voluntarily choose to participate without such medical consultation and accept full responsibility for this decision.",
        "I am capable of walking independently or with the use of a mobility aid such as a cane, walker or rollator, and I am capable of navigating stairs consisting of three to four steps.",
        "I understand that the Program consists of light chair-based exercises, movement activities and creative and recreational pursuits designed for older adults, and that I may participate at my own comfort level and modify or decline any activity at any time.",
        "I understand and accept that attendants, helpers or caregivers are not permitted to sit inside the Session space during Program activities, and I am comfortable participating independently in this manner.",
        "I agree to inform the Session facilitator immediately if I feel unwell, dizzy, faint, experience pain or discomfort, or need to stop participating for any reason.",
        "I have disclosed all relevant health conditions, medical concerns, physical limitations and other information that may affect my safe participation, or I voluntarily choose not to disclose such information and accept full responsibility for any consequences of such non-disclosure.",
      ],
    },
  ],
};

export const legalDocuments = [
  privacyPolicy,
  termsAndConditions,
  participantAgreement,
];
