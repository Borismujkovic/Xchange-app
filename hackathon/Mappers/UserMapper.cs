using hackathon.Models;
using Riok.Mapperly.Abstractions;

namespace hackathon.Mappers
{
    [Mapper]
    public partial class UserMapper
    {
        public partial User UserRegisterDataToUser(UserRegistrationDataDTO userRegisterDataDTO);
    }
}
