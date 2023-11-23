namespace hackathon.Models
{
    public class Offer
    {
        public int Id { get; set; }
        public int AccountId {  get; set; }
        public Currency CurrencyFrom { get; set; }
        public Currency CurrencyTo { get; set; }
        public double ExchangeRate { get; set; }
        public double Amount { get; set; }
    }
}
