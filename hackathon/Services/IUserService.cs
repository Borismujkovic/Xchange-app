using hackathon.Models;

namespace hackathon.Services
{
    public interface IUserService
    {
        Task<Account> CreateAccount(Account account, CancellationToken cancellationToken);
    }
}
