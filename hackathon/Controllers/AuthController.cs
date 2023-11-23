using hackathon.Mappers;
using hackathon.Models;
using hackathon.Services;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace hackathon.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AuthController : ControllerBase
    {
        private IAuthService _authService;
        private UserMapper _userMapper;

        public AuthController(
            IAuthService loginService,
            UserMapper userMapper)
        {
            _authService = loginService;
            _userMapper = userMapper;
        }

        [HttpPost]
        public async Task<string> Login([FromBody] UserCredentials userCredentials, CancellationToken cancellationToken)
        {
            //_userCredentialsValidator.ValidateAndThrow(userCredentials);

            return await _authService.AuthenticateAndGenerateTokenAsync(userCredentials, cancellationToken);
        }

        [HttpPost("register")]
        public async Task Register([FromBody] UserRegistrationDataDTO userRegisterDataDTO, CancellationToken cancellationToken)
        {
            var user = _userMapper.UserRegisterDataToUser(userRegisterDataDTO);

            var newUser = await _authService.RegisterAsync(user, cancellationToken);
        }
    }
}
