using hackathon.Mappers;
using hackathon.Models;
using hackathon.Repositories;
using hackathon.Services;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Authentication.JwtBearer;
using Microsoft.IdentityModel.Tokens;
using System.Text;

namespace hackathon.Configuration
{
    public static class ServicesConfiguration
    {
        public static void ConfigureUserServices(WebApplicationBuilder builder)
        {
            builder.Services.AddScoped<Repository<User>>();
            builder.Services.AddScoped<IUserRepository, UserRepository>();
            builder.Services.AddScoped<UserMapper>();
            //builder.Services.AddScoped<IUserService, UserService>();
        }

        public static void ConfigureAuthServices(WebApplicationBuilder builder)
        {
            //builder.Services.AddScoped<UserRegisterDataDTOMapper>();
            builder.Services.AddScoped<IPasswordHasher<User>, PasswordHasher<User>>();
            builder.Services.AddScoped<IAuthService, AuthService>();

            builder.Services.AddAuthentication(JwtBearerDefaults.AuthenticationScheme).AddJwtBearer(options => {
                options.TokenValidationParameters = new TokenValidationParameters
                {
                    ValidateIssuer = false,
                    ValidateAudience = false,
                    ValidateLifetime = true,
                    ValidateIssuerSigningKey = true,
                    ValidIssuer = builder.Configuration["Jwt:Issuer"],
                    ValidAudience = builder.Configuration["Jwt:Audience"],
                    IssuerSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(builder.Configuration["Jwt:SecretKey"]))
                };
            });
        }
    }
}
