using hackathon.Models;
using Microsoft.AspNetCore.Mvc;

namespace hackathon.Controllers
{
    public class AccountController
    {
        [HttpPost("user/{userId}/")]
        public async Task<string> Create([FromBody] Account account, CancellationToken cancellationToken)
        {
            //_userCredentialsValidator.ValidateAndThrow(userCredentials);

            //return await _authService.AuthenticateAndGenerateTokenAsync(userCredentials, cancellationToken);
            return "aaa";
        }
    }
}
