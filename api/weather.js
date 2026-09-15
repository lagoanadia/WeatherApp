module.exports = async (req, res) => {
    const location = req.query.location;
    if (!location) {
        res.status(400).json({ error: 'Missing "location" query parameter' });
        return;
    }

    const apiKey = process.env.OPENWEATHER_API_KEY;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(location)}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();
    res.status(response.status).json(data);
};
