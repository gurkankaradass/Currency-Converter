class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_kw95Ihoi2VFRGU3AfPuFR4IcY50bBsWpb1NqMDkX&base_currency=";
    }

    async exchangeCurrency(amount , firstOption , secondOption){
        const response = await fetch(`${this.url}${firstOption}`);//Promise döndü

        const result = await response.json();//Data'nın kendisini aldım

        const exchangedResult = amount * result.data[secondOption];

        return exchangedResult;
    }
}