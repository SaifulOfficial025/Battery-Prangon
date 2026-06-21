const sharedInfo = {
  mail: "saifulofficial025@gmail.com",
  facebook: " https://web.facebook.com/profile.php?id=61580985715573",
  instagram: "https://instagram.com/",
  mapEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.3377284483785!2d90.39572527589137!3d23.877647279953934!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757c5eb8e5c1d63%3A0x6e9f291079d8c0b9!2sSector-9%2C%20Uttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1718952000000!5m2!1sen!2sbd",
};

const localizedInfo = {
  en: {
    nickname: "Powerix",
    fullname: "Powerix Technology Ltd",
    phone: "01719-880755",
    phone2: "01352-078996",
    whatsapp: "+8801719880755",
    address: "Road #7, House #22, Sector-9, Uttara, Dhaka-1230",
    addressLines: [
      "Road #7, House #22, Sector-9, Uttara",
      "Abdullahpur Eagle Bus Counter",
      "Tower (Level-5), Dhaka-1230"
    ],
    officeHours: [
      "Saturday – Thursday",
      "9:00 AM – 8:00 PM"
    ]
  },
  bn: {
    nickname: "পাওয়ারিক্স",
    fullname: "পাওয়ারিক্স টেকনোলজি লিমিটেড",
    phone: "০১৭১৯-৮৮০৭৫৫",
    phone2: "০১৩৫২-০৭৮৯৯৬",
    whatsapp: "+৮৮০১৭১৯৮৮০৭৫৫",
    address: "রোড #৭, হাউস #২২, সেক্টর-৯, উত্তরা, ঢাকা-১২৩০",
    addressLines: [
      "রোড #৭, হাউস #২২, সেক্টর-৯, উত্তরা",
      "আবদুল্লাহপুর ঈগল বাস কাউন্টার",
      "টাওয়ার (লেভেল-৫), ঢাকা-১২৩০"
    ],
    officeHours: [
      "শনিবার – বৃহস্পতিবার",
      "সকাল ৯:০০ – রাত ৮:০০"
    ]
  }
};

export const getContactInfo = (lang) => {
  const currentLang = lang === 'bn' ? 'bn' : 'en';
  return {
    ...sharedInfo,
    ...localizedInfo[currentLang]
  };
};

// Fallback direct object export for backwards compatibility
export const contactInfo = {
  ...sharedInfo,
  ...localizedInfo.en
};
