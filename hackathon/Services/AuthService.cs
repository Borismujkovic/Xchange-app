using hackathon.Models;
using hackathon.Repositories;
using Microsoft.AspNetCore.Identity;
using Microsoft.Extensions.Options;
using Microsoft.IdentityModel.Tokens;
using System.Security.Claims;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using hackathon.Options;
using hackathon.Exceptions;

namespace hackathon.Services
{
    public class AuthService : IAuthService
    {
        private IUserRepository _userRepository;
        private readonly IConfiguration _config;
        private IPasswordHasher<User> _passwordHasher;
        private IOptions<JwtOptions> _options;

        public AuthService(IUserRepository userRepository,
            IConfiguration config,
            IPasswordHasher<User> passwordHasher,
            IOptions<JwtOptions> options)
        {
            _userRepository = userRepository;
            _config = config;
            _passwordHasher = passwordHasher;
            _options = options;
        }

        public async Task<User> RegisterAsync(User newUser, CancellationToken cancellationToken)
        {
            var currentUser = await _userRepository.FindByEmailAsync(newUser.Email, cancellationToken);

            if (currentUser != null)
            {
                throw new UserAlreadyExistsException("User already exists");
            }

            newUser.Password = _passwordHasher.HashPassword(newUser, newUser.Password);

            return await _userRepository.InsertAsync(newUser, cancellationToken);
        }

        public async Task<string> AuthenticateAndGenerateTokenAsync(UserCredentials userCredentials, CancellationToken cancellationToken)
        {
            var currentUser = await _userRepository.FindByEmailAsync(userCredentials.Email, cancellationToken);

            if (currentUser == null)
            {
                throw new WrongCredentialsException("Wrong credentials");
            }

            var result = _passwordHasher.VerifyHashedPassword(currentUser, currentUser.Password, userCredentials.Password);

            if (result == PasswordVerificationResult.Failed)
            {
                throw new WrongCredentialsException("Wrong credentials");
            }

            return GenerateToken(currentUser);
        }

        private string GenerateToken(User user)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_options.Value.SecretKey));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);

            var claims = new[]
            {
                new Claim(ClaimTypes.NameIdentifier, user.Id.ToString()),
                new Claim(ClaimTypes.Email, user.Email)
            };

            var token = new JwtSecurityToken(
                _options.Value.Issuer,
                _options.Value.Audience,
                claims,
                expires: DateTime.Now.AddDays(Convert.ToDouble(_options.Value.ExpirationDate)),
                signingCredentials: credentials);

            return new JwtSecurityTokenHandler().WriteToken(token);

        }
    }
}
