const apiId = '7338b710bcb207349fa7a7e9c846a5e1';

const getCollectionOfDays = (dayWeather, now) => {
    const collection = new Map();

    dayWeather.forEach(({ dt_txt, main, weather }) => {
        const fullDate = new Date(dt_txt);
        const date = fullDate.toDateString().substring(0, 3);
        const hour = fullDate.getHours();


        const weatherOnDate = collection.get(date);
        if (weatherOnDate) {
            if (main.temp_min < weatherOnDate.min) {
                weatherOnDate.min = main.temp_min;
            }
            if (main.temp_max > weatherOnDate.max) {
                weatherOnDate.max = main.temp_max
            }
            if (Math.abs(hour - now) <= 2) {
                weatherOnDate.current = main.temp;
                weatherOnDate.condition = weather[0].description;
            }
            collection.set(date, weatherOnDate);

        } else {
            collection.set(date, {
                current: main.temp,
                min: main.temp_min,
                max: main.temp_max,
                condition: weather[0].description,
            });
        }

    });
    const forecastArray = [];
    collection.forEach((value, key) => forecastArray.push({ day: key, ...value }));
    return forecastArray;
}
export const getForeCast = (city) => {
    return new Promise((resolve, reject) => {
        fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&units=metric&appid=' + apiId)
            .then(response => {
                response.json().then(data => {
                    if (data.list) {
                        const collectionOfDays = getCollectionOfDays(data.list, new Date().getHours());
                        resolve(collectionOfDays);
                    } else {
                        reject(":( I'm sorry we don't have the forecast for your city");
                    }


                });
            }).catch(reason => reject(":( Something went wrong , try again"));

    });
}
export const getCurrentWeather = (city) => {
    return new Promise((resolve, reject) => {
        fetch('https://api.openweathermap.org/data/2.5/weather?q=' + city + '&units=metric&appid=' + apiId)
            .then(response => {
                response.json().then(({ main, weather,name }) => {
                    if (main) {
                        resolve({
                            current: main.temp,
                            min: main.temp_min,
                            max: main.temp_max,
                            city:name,
                            condition: weather[0].description,
                        })
                    } else {
                        reject(":( I'm sorry we don't have the forecast for your city");
                    }
                })
            }).catch(reason => reject(":( Something went wrong , try again"))
    });

}