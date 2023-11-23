using hackathon.Models;
using Microsoft.EntityFrameworkCore;

namespace hackathon.Repositories
{
    public class UserRepository : Repository<User>, IUserRepository
    {
        public UserRepository(DatabaseContext context) : base(context)
        {
            _context = context;
        }

        public async Task<User?> FindByEmailAsync(string email, CancellationToken cancellationToken)
        {
            return await _context.Users
                .FirstOrDefaultAsync(x => x.Email.ToLower() == email.ToLower(), cancellationToken);
        }
    }
}
