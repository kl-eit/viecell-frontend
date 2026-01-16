export const STEP3_CONTENT = {
  "Lifestyle / Metabolic Conditions": {
    breadcrumb: [
      "1. Non-Alcoholic Liver Damage",
      "2. Lifestyle / Metabolic Conditions",
    ],
    title: "Symptoms linked to Metabolic or Lifestyle-related Liver Cirrhosis",
    subtitle:
      'Often called the "Silent Disease" because symptoms are vague until late stages.',
    symptoms: [
      {
        title: "Acanthosis Nigricans",
        desc: "Dark, velvety patches of skin, usually found in body folds like the neck or armpits (a sign of insulin resistance).",
      },
      {
        title: "Metabolic Syndrome",
        desc: "Often associated with High Blood Pressure, Diabetes, or High Cholesterol.",
      },
      {
        title: "Central Obesity",
        desc: "Fat accumulation around the belly, even if arms and legs are thin.",
      },
      {
        title: "Fatigue",
        desc: "Profound, unexplained tiredness is often the only early symptom.",
      },
    ],
    leadsTo: {
      title: "Obesity, Type 2 Diabetes or Dyslipidemia",
      desc: "Metabolic disorders commonly progress together and increase liver risk.",
    },
  },
  "Chronic Viral Hepatitis": {
    breadcrumb: ["1. Non-Alcoholic Liver Damage", "2. Chronic Viral Hepatitis"],
    title: "Symptoms associated with Chronic Viral Hepatitis-related Cirrhosis",
    subtitle:
      "Chronic Hepatitis B, C or D: Symptoms here can be cyclical, flaring up and calming down over decades.",
    symptoms: [
      {
        title: "Cryoglobulinemia (Hep. C Specific)",
        desc: "Abnormal proteins in the blood that can cause a rash (palpable purpura), weakness, and kidney problems.",
      },
      {
        title: "Hepatitis D Co-infection",
        desc: "If a patient has Hep B and suddenly gets much worse rapidly, it is often a sign of a Super-infection with Hepatitis D.",
      },
      {
        title: "Arthralgia",
        desc: "Joint pain that mimics arthritis but without severe swelling or deformation.",
      },
      {
        title: "Dark Urine / Pale Stools",
        desc: "These appear during flares of the virus activity.",
      },
    ],
  },

  "Autoimmune Conditions": {
    breadcrumb: ["1. Non-Alcoholic Liver Damage", "2. Autoimmune Conditions"],
    title: "3. Which Autoimmune Condition applies (if known)?",
    subtitle: "Choose the option closest to you. You can review or change this later.",
    options: [
      "Autoimmune Hepatitis",
      "Primary Biliary Cholangitis (PBC)",
      "Primary Sclerosing Cholangitis (PSC)",
    ],
    subContent: {
      "Autoimmune Hepatitis": {
        title: "Autoimmune Condition",
        subtitle: "These conditions often have symptoms unrelated to the liver because the immune system is attacking other parts of the body too.",
        symptoms: [
          {
            title: "Acne & Hirsutism",
            desc: "Hormonal imbalances caused by the disease can lead to acne or excessive hair growth in women.",
          },
          {
            title: "Spider Angiomas",
            desc: "While common in all cirrhosis, they are often numerous and appear early here.",
          },
          {
            title: "Amenorrhea",
            desc: "Loss of menstrual periods is a common early sign in young women.",
          },
          
        ],
      },
      "Primary Biliary Cholangitis (PBC)": {
        title: "Primary Biliary Cholangitis (PBC)",
        subtitle: "These conditions often have symptoms unrelated to the liver because the immune system is attacking other parts of the body too.",
        symptoms: [
          {
            title: "Pruritus (Intense Itching)",
            desc: "This is the hallmark symptom. It can be severe, worse at night, and occur before any yellowing of the skin.",
          },
          {
            title: "Xanthelasmas",
            desc: "Yellowish deposits of cholesterol on the eyelids or around the eyes.",
          },
          {
            title: "Sicca Syndrome",
            desc: "Chronic dry eyes and dry mouth (similar to Sjögren's syndrome).",
          },
       
        ],
      },
      "Primary Sclerosing Cholangitis (PSC)": {
        title: "Primary Sclerosing Cholangitis (PSC)",
        subtitle: "These conditions often have symptoms unrelated to the liver because the immune system is attacking other parts of the body too.",
        symptoms: [
          {
            title: "Recurrent Cholangitis",
            desc: "Episodes of fever, shaking chills, and right upper belly pain caused by bacterial infections in the scarred bile ducts.",
          },
          {
            title: "IBD Association",
            desc: "About 70-80% of people with PSC also have Ulcerative Colitis (bloody diarrhea, abdominal cramping).",
          },
        ],
      },
    },
  },
  "Genetic / Inherited Conditions": {
    breadcrumb: [
      "1. Non-Alcoholic Liver Damage",
      "2. Autoimmune Conditions",
      "3. Genetic / Inherited Conditions",
    ],
    title:
      "3. Have you ever been told you may have an inherited or family-related condition affecting the liver?",
    subtitle:
      "These are conditions passed down through families and may affect organs beyond the liver.",
    options: [
      "Wilson’s Disease (Copper Overload)",
      "Hemochromatosis (Iron Overload)",
      "Alpha-1 Antitrypsin Deficiency",
    ],
    subContent: {
      "Wilson’s Disease (Copper Overload)": {
        title: "Wilson’s Disease",
        subtitle: "These commonly caused by overload of Copper",
        symptoms: [
          {
            title: "Kayser-Fleischer Rings",
            desc: "A golden-brown or greenish ring around the iris of the eye (visible during an eye exam).",
          },
          {
            title: "Neuro-Psychiatric Changes",
            desc: "Tremors (shaking hands), difficulty speaking, personality changes, or depression.",
          },
        ],
      },
      "Hemochromatosis (Iron Overload)": {
        title: "Hemochromatosis",
        subtitle: "These commonly caused by overload of Copper",
        symptoms: [
          {
            title: "Bronze Diabetes",
            desc: "The skin may take on a metallic or slate-gray/bronze color.",
          },
          {
            title: "Joint Pain",
            desc: "Specifically in the knuckles of the first two fingers (pointer and middle finger).",
          },
          {
            title: "New-Onset Diabetes",
            desc: "Iron damages the pancreas, causing sudden diabetes in a non-obese person.",
          },
          
        ],
      },
      "Alpha-1 Antitrypsin Deficiency": {
        title: "Alpha-1 Antitrypsin Deficiency",
        subtitle: "These commonly caused by overload of Copper",
        symptoms: [
          {
            title: "Lung Issues",
            desc: "Shortness of breath or wheezing (Emphysema) in a non-smoker or young person.",
          },
          {
            title: "Panniculitis",
            desc: "Painful, red lumps under the skin (rare but specific).",
          },
        ],
      },
    },
  },

  "Medication or Toxin Exposure": {
    breadcrumb: [
      "1. Non-Alcoholic Liver Damage",
      "2. Autoimmune Conditions",
      "3.Medication or Toxin Exposure",
    ],
    title: "Symptoms appearing after Medication or Supplement use",
    subtitle: "Symptoms often appear suddenly",
    symptoms: [
      {
        title: "Acute Onset",
        desc: "Unlike other forms that take decades, this can present with sudden jaundice or nausea after starting a new medication (e.g., Methotrexate, Amiodarone, or prolonged high-dose Vitamin A).",
      },
      {
        title: "Rash & Eosinophilia",
        desc: "A skin rash accompanied by high eosinophil counts (a type of white blood cell) in blood tests often points to a drug reaction.",
      },
    ],
  },
  "Chronic Alcohol Abuse (Ethanol Toxicity)": {
    breadcrumb: ["1. Alcohol-related Liver Damage", "2. Acute Alcoholic Hepatitis"],
    title: "Symptoms linked to Acute Alcoholic Hepatitis",
    subtitle: "All forms of cirrhosis eventually share End-Stage symptoms (jaundice, abdominal fluid/ascites, confusion/encephalopathy). The symptoms below are the unique signatures or early warning signs specific to each cause",
    symptoms: [
      {
        title: "Parotid Sclerosis",
        desc: "Swelling of the salivary glands in the cheeks (gives a chipmunk appearance)",
      },{
        title: "Dupuytren’s Contracture",
        desc: "A deformity where one or more fingers (usually the ring and little finger) are permanently bent toward the palm.",
      },{
        title: "Peripheral Neuropathy",
        desc: "Numbness, tingling, or burning pain in the hands and feet due to vitamin deficiencies (specifically Thiamine/B1)",
      },{
        title: "Malnutrition",
        desc: "Severe muscle wasting (sarcopenia) is often more pronounced here than in other types",
      }
    ],
  
  },
};
