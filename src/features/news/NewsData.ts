export interface NewsItem {
    image: string;
    date: string;
    title: string;
    description: string;
    category: string;
  }
  
  export const newsItems: NewsItem[] = [
    {
      image: "https://picsum.photos/1024",
      date: "October 2024",
      title: "RBM Awarded Contract for Dubai Solar Park",
      description:
        "RBM’s recent investments in new equipment and engineering capabilities have strengthened our role in solar development.",
      category: "Projects",
    },
    {
      image: "https://picsum.photos/1024",
      date: "October 2024",
      title: "RBM Honoured with Good Governance Award",
      description:
        "RBM (Thailand) has been awarded the Good Governance Standards Certification Award 2024 at a recent ceremony in Bangkok.",
      category: "Awards",
    },
    {
      image: "https://picsum.photos/1024",
      date: "October 2024",
      title: "RBM Makes Impressive Debut at OGA2024",
      description:
        "With over 30,000 attendees from 72 countries, OGA2024 provided the ideal platform to showcase our energy engineering solutions.",
      category: "Events",
    },
    {
      image: "https://picsum.photos/1024",
      date: "September 2024",
      title: "RBM Expands Operations in Asia",
      description:
        "RBM is excited to announce the expansion of our operations in Asia, focusing on sustainable energy solutions.",
      category: "Announcements",
    },
    {
      image: "https://picsum.photos/1024",
      date: "September 2024",
      title: "New Partnership with EcoTech",
      description:
        "RBM has partnered with EcoTech to enhance our renewable energy initiatives across the region.",
      category: "Announcements",
    },
    {
      image: "https://picsum.photos/1024",
      date: "August 2024",
      title: "RBM Wins Green Building Award",
      description:
        "At the recent Green Building Conference, RBM was awarded for our outstanding contributions to sustainable building practices.",
      category: "Awards",
    },
    // Add more items as needed
  ];
  