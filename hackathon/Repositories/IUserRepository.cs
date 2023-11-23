using hackathon.Models;

namespace hackathon.Repositories
{
    public interface IUserRepository : IRepository<User>
    {
        Task<User?> FindByEmailAsync(string email, CancellationToken cancellationToken);
    }
}
