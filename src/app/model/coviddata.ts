export class CovidData
{
    ID : string;
    Country:string;
    CountryCode:string;
    Province:string;
    City:string;
    CityCode:string;
    Lat:string;
    Lon:string;
    Confirmed:string;
    Deaths:string;
    Recovered:string;
    Active:string;
    Date:string

    constructor(ID:string, Country:string, CountryCode:string, Province:string, City:string, CityCode:string, Lat:string,
        Lon:string, Confirmed:string, Deaths:string, Recovered:string, Active:string, Date:string){

        this.ID=ID;
        this.Country=Country;
        this.CountryCode=CountryCode;
        this.Province=Province;
        this.City=City;
        this.CityCode=CityCode;
        this.Lat=Lat;
        this.Lon=Lon;
        this.Confirmed=Confirmed;
        this.Deaths=Deaths;
        this.Recovered=Recovered;
        this.Active=Active;
        this.Date=Date;
    }


}