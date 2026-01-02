export const treatmentData = {
  countries: [
    {
      name: "Iran",
      diseases: [
        {
          id: "Cancer",
          label: "Cancer",
          hospitals: [
            {
              name: "Royan Institute - Tehran",
              features: [
                {
                  DiseasesTreated:
                    "Osteoarthritis, Heart Failure, Corneal Injury, Vitiligo, Wrinkles/Acne Scars",
                  CostRangeUSD: "15000-21000",
                  CostPerDay: "4500",
                  DeliveryMethods: "Intravenous Infusion, Local Injection",
                },
              ],
            },
            {
              name: "Diabetes Care Center",
              features: [
                {
                  DiseasesTreated:
                    "Liver Cirrhosis, Kidney Failure, Neurological, Cardiac, Orthopedic",
                  CostRangeUSD: "10000-15000",
                  CostPerDay: "0",
                  DeliveryMethods:
                    "Intravenous, Intrathecal, Local Injection, Trans-arterial",
                },
              ],
            },
          ],
        },
        {
          id: "Heart",
          label: "Heart",
          hospitals: [
            {
              name: "Heart Center - Tehran",
              features: [
                {
                  DiseasesTreated:
                    "Cardiac Arrhythmias, Coronary Artery Disease",
                  CostRangeUSD: "20000-30000",
                  CostPerDay: "5000",
                  DeliveryMethods: "Surgery, Medication",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "USA",
      diseases: [
        {
          id: "Cancer",
          label: "Cancer",
          hospitals: [
            {
              name: "Mayo Clinic - Rochester",
              features: [
                {
                  DiseasesTreated:
                    "Heart Disease, Coronary Artery Disease, Arrhythmias",
                  CostRangeUSD: "25000-35000",
                  CostPerDay: "5500",
                  DeliveryMethods:
                    "Intravenous Infusion, Local Injection, Surgery",
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: "Germany",
      diseases: [
        {
          id: "Lungs",
          label: "Lungs",
          hospitals: [
            {
              name: "Charité University Hospital - Berlin",
              features: [
                {
                  DiseasesTreated: "Lung Cancer, Pneumonia, Asthma, COPD",
                  CostRangeUSD: "18000-25000",
                  CostPerDay: "4000",
                  DeliveryMethods:
                    "Intravenous Infusion, Local Injection, Surgery",
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};
