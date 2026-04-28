import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';

export default function InfoBox({ info }) {
    let hot_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let cold_URL = "https://images.unsplash.com/photo-1639929684703-7c1ef85af732?q=80&w=1167&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let rainy_URL = "https://images.unsplash.com/photo-1591789550739-d711dcd16085?q=80&w=1292&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    let normal_URL = "https://images.unsplash.com/photo-1675521828636-8702df7ecd26?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

    let weatherImage = "";

    if (info.temperature >= 40) {
        weatherImage = hot_URL;
    } else if (info.temperature <= 10) {
        weatherImage = cold_URL;
    } else if (info.humidity >= 80) {
        weatherImage = rainy_URL;
    } else {
        weatherImage = normal_URL;
    }

    return (
        <div className="info-box">
            <h2>Weather Information</h2>
            <div>
                <Card sx={{ width: 350 }}>
                    <CardMedia
                        component="img"
                        height="150"
                        image={weatherImage}
                        alt="Weather"
                    />

                    <CardContent sx={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 1 }}>
                        <Typography
                            gutterBottom
                            variant="h5"
                            component="div"
                        >
                            {info.city}, {info.country}
                        </Typography>

                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: "bold",
                                display: "flex",
                                alignItems: "center",
                            }}
                        >
                            {info.descriptionInfo}
                            <img
                                src={info.descriptionIcon}
                                alt={info.descriptionInfo}
                                width="40"
                            />
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Temperature: {info.temperature}&deg;C
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Min Temp: {info.temperatureMin}&deg;C
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Max Temp: {info.temperatureMax}&deg;C
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Feels Like: {info.feelsLike}&deg;C
                        </Typography>

                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            Humidity: {info.humidity}%
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}