using hackathon.Models;

namespace hackathon.Services
{
    public interface IAuthService
    {
        Task<string> AuthenticateAndGenerateTokenAsync(UserCredentials userCredentials, CancellationToken cancellationToken);
        Task<User> RegisterAsync(User newUser, CancellationToken cancellationToken);
    }
}
