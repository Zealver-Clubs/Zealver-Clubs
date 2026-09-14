/**
 * Shared reference shape for Knowledge Hub content.
 *
 * `supports` names the specific claim the source backs, so a reviewer can
 * check each one against the text rather than trusting a bare list. Keep it
 * filled in: a reference that supports nothing in particular is decoration.
 */
export type Reference = {
  title: string;
  publisher: string;
  year: string;
  url?: string;
  supports: string;
};

/**
 * The sources the Knowledge Hub cites, each one checked to load before it
 * was added here. Pages spread a source and add their own `supports` line,
 * so a URL that moves is corrected in one place rather than in eighty.
 */
export const sources = {
  whoFalls: { title: "Falls", publisher: "World Health Organization", year: "2021", url: "https://www.who.int/news-room/fact-sheets/detail/falls" },
  whoPhysicalActivity: { title: "Physical activity", publisher: "World Health Organization", year: "2024", url: "https://www.who.int/news-room/fact-sheets/detail/physical-activity" },
  whoDementia: { title: "Dementia", publisher: "World Health Organization", year: "2025", url: "https://www.who.int/news-room/fact-sheets/detail/dementia" },
  whoHypertension: { title: "Hypertension", publisher: "World Health Organization", year: "2023", url: "https://www.who.int/news-room/fact-sheets/detail/hypertension" },
  whoDiabetes: { title: "Diabetes", publisher: "World Health Organization", year: "2024", url: "https://www.who.int/news-room/fact-sheets/detail/diabetes" },
  whoAgeing: { title: "Ageing and health", publisher: "World Health Organization", year: "2024", url: "https://www.who.int/news-room/fact-sheets/detail/ageing-and-health" },
  whoHearing: { title: "Deafness and hearing loss", publisher: "World Health Organization", year: "2025", url: "https://www.who.int/news-room/fact-sheets/detail/deafness-and-hearing-loss" },
  whoVision: { title: "Blindness and vision impairment", publisher: "World Health Organization", year: "2024", url: "https://www.who.int/news-room/fact-sheets/detail/blindness-and-visual-impairment" },
  whoOralHealth: { title: "Oral health", publisher: "World Health Organization", year: "2025", url: "https://www.who.int/news-room/fact-sheets/detail/oral-health" },
  whoOsteoarthritis: { title: "Osteoarthritis", publisher: "World Health Organization", year: "2023", url: "https://www.who.int/news-room/fact-sheets/detail/osteoarthritis" },
  whoDepression: { title: "Depressive disorder (depression)", publisher: "World Health Organization", year: "2023", url: "https://www.who.int/news-room/fact-sheets/detail/depression" },
  whoMenopause: { title: "Menopause", publisher: "World Health Organization", year: "2024", url: "https://www.who.int/news-room/fact-sheets/detail/menopause" },
  whoActivityGuidelines: { title: "WHO guidelines on physical activity and sedentary behaviour", publisher: "World Health Organization", year: "2020", url: "https://www.who.int/publications/i/item/9789240015128" },
  whoHealthyDiet: { title: "Healthy diet", publisher: "World Health Organization", year: "2020", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" },
  whoObesity: { title: "Obesity and overweight", publisher: "World Health Organization", year: "2024", url: "https://www.who.int/news-room/fact-sheets/detail/obesity-and-overweight" },
  whoCardiovascular: { title: "Cardiovascular diseases", publisher: "World Health Organization", year: "2021", url: "https://www.who.int/news-room/fact-sheets/detail/cardiovascular-diseases-(cvds)" },
  whoMusculoskeletal: { title: "Musculoskeletal health", publisher: "World Health Organization", year: "2022", url: "https://www.who.int/news-room/fact-sheets/detail/musculoskeletal-conditions" },

  niaExercise: { title: "Exercise and physical activity", publisher: "National Institute on Aging", year: "2025", url: "https://www.nia.nih.gov/health/exercise-and-physical-activity" },
  niaFourTypes: { title: "Four types of exercise can improve your health and physical ability", publisher: "National Institute on Aging", year: "2024", url: "https://www.nia.nih.gov/health/exercise-and-physical-activity/four-types-exercise-can-improve-your-health-and-physical" },
  niaFalls: { title: "Falls and fractures in older adults: causes and prevention", publisher: "National Institute on Aging", year: "2022", url: "https://www.nia.nih.gov/health/falls-and-falls-prevention/falls-and-fractures-older-adults-causes-and-prevention" },
  niaOsteoporosis: { title: "Osteoporosis", publisher: "National Institute on Aging", year: "2022", url: "https://www.nia.nih.gov/health/osteoporosis" },
  niaVitamins: { title: "Vitamins and minerals for older adults", publisher: "National Institute on Aging", year: "2021", url: "https://www.nia.nih.gov/health/vitamins-and-supplements/vitamins-and-minerals-older-adults" },
  niaLoneliness: { title: "Loneliness and social isolation: tips for staying connected", publisher: "National Institute on Aging", year: "2021", url: "https://www.nia.nih.gov/health/loneliness-and-social-isolation-tips-staying-connected" },
  niaMemory: { title: "Memory loss and forgetfulness", publisher: "National Institute on Aging", year: "2023", url: "https://www.nia.nih.gov/health/memory-loss-and-forgetfulness" },
  niaSleep: { title: "A good night's sleep", publisher: "National Institute on Aging", year: "2024", url: "https://www.nia.nih.gov/health/sleep/good-nights-sleep" },
  niaMealPlanning: { title: "Healthy meal planning tips for older adults", publisher: "National Institute on Aging", year: "2022", url: "https://www.nia.nih.gov/health/healthy-eating-nutrition-and-diet/healthy-meal-planning-tips-older-adults" },
  niaHeart: { title: "Heart health and aging", publisher: "National Institute on Aging", year: "2024", url: "https://www.nia.nih.gov/health/heart-health/heart-health-and-aging" },
  niaBloodPressure: { title: "High blood pressure and older adults", publisher: "National Institute on Aging", year: "2022", url: "https://www.nia.nih.gov/health/high-blood-pressure/high-blood-pressure-and-older-adults" },
  niaGrief: { title: "Mourning the death of a spouse", publisher: "National Institute on Aging", year: "2021", url: "https://www.nia.nih.gov/health/grief-and-mourning/mourning-death-spouse" },
  niaCognitive: { title: "Cognitive health", publisher: "National Institute on Aging", year: "2025", url: "https://www.nia.nih.gov/health/cognitive-health" },
  niaMentalHealth: { title: "Mental and emotional health", publisher: "National Institute on Aging", year: "2025", url: "https://www.nia.nih.gov/health/mental-and-emotional-health" },
  niaIncontinence: { title: "Urinary incontinence in older adults", publisher: "National Institute on Aging", year: "2022", url: "https://www.nia.nih.gov/health/bladder-health-and-incontinence/urinary-incontinence-older-adults" },
  niaOsteoarthritis: { title: "Osteoarthritis", publisher: "National Institute on Aging", year: "2023", url: "https://www.nia.nih.gov/health/osteoarthritis/osteoarthritis" },

  nhsBalance: { title: "Balance exercises", publisher: "NHS", year: "2024", url: "https://www.nhs.uk/live-well/exercise/strength-and-flexibility-exercises/balance-exercises/" },
  nhsActivityOlder: { title: "Physical activity guidelines for older adults", publisher: "NHS", year: "2024", url: "https://www.nhs.uk/live-well/exercise/physical-activity-guidelines-older-adults/" },
  nhsReflux: { title: "Heartburn and acid reflux", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/heartburn-and-acid-reflux/" },
  nhsIncontinence: { title: "Urinary incontinence", publisher: "NHS", year: "2023", url: "https://www.nhs.uk/conditions/urinary-incontinence/" },
  nhsOsteoarthritis: { title: "Osteoarthritis", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/osteoarthritis/" },
  nhsRheumatoid: { title: "Rheumatoid arthritis", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/rheumatoid-arthritis/" },
  nhsGout: { title: "Gout", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/gout/" },
  nhsUti: { title: "Urinary tract infections (UTIs)", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/urinary-tract-infections-utis/" },
  nhsDryMouth: { title: "Dry mouth", publisher: "NHS", year: "2024", url: "https://www.nhs.uk/conditions/dry-mouth/" },
  nhsBackPain: { title: "Back pain", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/back-pain/" },
  nhsKneePain: { title: "Knee pain", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/knee-pain/" },
  nhsNeckPain: { title: "Neck pain and stiff neck", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/neck-pain-and-stiff-neck/" },
  nhsMenopause: { title: "Menopause", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/menopause/" },
  nhsVitaminD: { title: "Vitamin D", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/" },
  nhsCataracts: { title: "Age-related cataracts", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/cataracts-age-related/" },
  nhsHearingLoss: { title: "Hearing loss", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/hearing-loss/" },
  nhsKneeReplacement: { title: "Knee replacement", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/knee-replacement/" },
  nhsHipReplacement: { title: "Hip replacement", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/hip-replacement/" },
  nhsCholesterol: { title: "High cholesterol", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/high-cholesterol/" },
  nhsInsomnia: { title: "Insomnia", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/insomnia/" },
  nhsMigraine: { title: "Migraine", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/migraine/" },
  nhsStress: { title: "Stress, anxiety and low mood", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/stress-anxiety-depression/" },
  nhsGrief: { title: "Grief, bereavement and loss", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/grief-bereavement-loss/" },
  nhsKidney: { title: "Kidney disease", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/kidney-disease/" },
  nhsFibre: { title: "How to get more fibre into your diet", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/live-well/eat-well/digestive-health/how-to-get-more-fibre-into-your-diet/" },
  nhsTeeth: { title: "Take care of your teeth and gums", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/live-well/healthy-teeth-and-gums/take-care-of-your-teeth-and-gums/" },
  nhsXray: { title: "X-ray", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/x-ray/" },
  nhsMri: { title: "MRI scan", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/mri-scan/" },
  nhsHealthyWeight: { title: "Healthy weight", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/live-well/healthy-weight/" },
  nhsDiabetesFood: { title: "Type 2 diabetes: food and keeping active", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/type-2-diabetes/food-and-keeping-active/" },
  nhsCataractSurgery: { title: "Cataract surgery", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/cataract-surgery/" },
  nhsSocialCare: { title: "Social care and support guide", publisher: "NHS", year: "2025", url: "https://www.nhs.uk/conditions/social-care-and-support-guide/" },

  ninDietaryGuidelines: { title: "Dietary Guidelines for Indians", publisher: "ICMR\u2013National Institute of Nutrition", year: "2024", url: "https://www.nin.res.in/dietaryguidelines/index.html" },
  niddkKidney: { title: "Kidney disease", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", year: "2024", url: "https://www.niddk.nih.gov/health-information/kidney-disease" },
  niddkFattyLiver: { title: "Nonalcoholic fatty liver disease", publisher: "National Institute of Diabetes and Digestive and Kidney Diseases", year: "2021", url: "https://www.niddk.nih.gov/health-information/liver-disease/nafld-nash" },
  nciFatigue: { title: "Fatigue and cancer treatment", publisher: "National Cancer Institute", year: "2023", url: "https://www.cancer.gov/about-cancer/treatment/side-effects/fatigue" },
  medlineAgeingChanges: { title: "Aging changes in the bones, muscles and joints", publisher: "MedlinePlus, US National Library of Medicine", year: "2024", url: "https://medlineplus.gov/ency/article/002416.htm" },
  harvardProcessed: { title: "Processed foods and health", publisher: "Harvard T.H. Chan School of Public Health", year: "2024", url: "https://www.hsph.harvard.edu/nutritionsource/processed-foods/" },
  harvardCarbsBloodSugar: { title: "Carbohydrates and blood sugar", publisher: "Harvard T.H. Chan School of Public Health", year: "2023", url: "https://www.hsph.harvard.edu/nutritionsource/carbohydrates/carbohydrates-and-blood-sugar/" },
  harvardProtein: { title: "Protein", publisher: "Harvard T.H. Chan School of Public Health", year: "2024", url: "https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/protein/" },
  espenProtein: { title: "Protein intake and exercise for optimal muscle function with aging", publisher: "Clinical Nutrition (ESPEN Expert Group)", year: "2014", url: "https://pubmed.ncbi.nlm.nih.gov/24814383/" },
} as const;
