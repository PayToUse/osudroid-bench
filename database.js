// this array is where the responses / entries from the google form are stored.
// If there's a phone with a higher benchmark score than the previous one, it'll replace the old score with the better one
// Entry example: [<Phone Model>, <Manufacturer>, <SoC / Processor>, <SoC Process (nm)>, <Refresh Rate>, <Average FPS>, <Minimum FPS>, <Year Released>]
var db = [
  ["Samsung Galaxy S20 FE", "Samsung", "Snapdragon 865 5G", "7nm", "120", "118", "108", "2020"],
  ["Xiaomi Poco F3", "Xiaomi", "Snapdragon 870", "7nm", "120", "117", "113", "2021"],
  ["Xiaomi Mix 4", "Xiaomi", "Snapdragon 888 Plus", "5nm", "120", "119", "116", "2021"],
  ["Xiaomi Note 12 Pro 5G", "Xiaomi", "Dimensity 1080", "6nm", "120", "80", "32", "2022"],
  ["Huawei Nova 9", "Huawei", "Snapdragon 778G 4G", "6nm", "120", "76", "28", "2021"],
  ["Huawei Nova 5T", "Huawei", "Kirin 980", "7nm", "60", "46", "15", "2019"],
  ["Xiaomi 10T Pro", "Xiaomi", "Snapdragon 865", "7nm", "144", "123", "116", "2020"],
  ["Infinix Hot 10S", "Infinix", "Helio G85", "12nm", "90", "30", "17", "2021"],
  ["Samsung Galaxy M12", "Samsung", "Exynos 850", "8nm", "90", "46", "30", "2021"],
  ["Infinix Zero 5G (2022)", "Infinix", "Dimensity 900", "6nm", "120", "119", "98", "2022"],
  ["Xiaomi Redmi 9C NFC", "Xiaomi", "Helio G35", "12nm", "60", "59", "19", "2020"]
  ];