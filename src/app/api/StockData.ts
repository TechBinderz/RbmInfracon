export interface StockData {
  currentPrice: number;
  priceChange: number;
  timeUpdated: string;
}

const STORAGE_KEY = "StockData";
const API_URL = "https://nseapi1.techbinderz.workers.dev/api/rbmstock";

const getStockPrice = async (): Promise<StockData> => {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data: StockData = await response.json();
    // Store the data in local storage
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    return data;
  } catch (error) {
    console.log(error);
    return {
      currentPrice: 0,
      priceChange: 0,
      timeUpdated: "",
    };
  }
};

export const checkAndUpdateStockData = async (): Promise<StockData> => {
  const storedData = localStorage.getItem(STORAGE_KEY);

  if (storedData) {
    const parsedData: StockData = JSON.parse(storedData);
    const lastUpdated = new Date(parsedData.timeUpdated);
    const currentTime = new Date();

    // Check if the data is more than 30 minutes old
    const timeDiff =
      (currentTime.getTime() - lastUpdated.getTime()) / (1000 * 60);
    if (timeDiff > 30) {
      return await getStockPrice(); // Fetch new data if it's old
    } else {
      return parsedData; // Use the stored data if it's recent
    }
  } else {
    return await getStockPrice(); // If there's no stored data, fetch new data
  }
};
