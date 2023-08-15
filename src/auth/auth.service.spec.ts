/*import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { JwtService } from '@nestjs/jwt';
import { Admin, Role } from 'src/schemas/admin.schema';

describe('AuthService', () => {
  let authService: AuthService;
  let jwtServiceMock: JwtService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: {
            sign: jest.fn(),
          },
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    jwtServiceMock = module.get<JwtService>(JwtService);
  });

  it('should be defined', () => {
    expect(authService).toBeDefined();
  });

  // Write more test cases for validateUser and login methods
  describe('validateUser', () => {
    it('should return admin if name and password are correct', async () => {
      //arange
      const mockAdmin: Admin = {
        id: 1,
        name: 'admin',
        password: 'admin',
        role: Role.Admin,
        created_at: new Date(),
      };

      //mock the method validateUser
      const validateUser = jest
        .spyOn(authService, 'validateUser')
        .mockImplementation(async () => mockAdmin);

      //act
      const result = await authService.validateUser('admin', 'admin');

      //assert
      expect(result).toEqual(mockAdmin);
      expect(validateUser).toHaveBeenCalled();
    });
  });

  describe('login', () => {
    it('should return access_token if admin is correct', async () => {
      //arange
      const mockAdmin: Admin = {
        id: 1,
        name: 'admin',
        password: 'admin',
        role: Role.Admin,
        created_at: new Date(),
      };

      const jwtSignResult = 'token';
      jest
        .spyOn(jwtServiceMock, 'sign')
        .mockImplementation(() => jwtSignResult);

      //act
      const result = await authService.login(mockAdmin);

      //assert
      expect(result.access_token).toBe(jwtSignResult);
      expect(jwtServiceMock.sign).toHaveBeenCalledWith({
        name: mockAdmin.name,
        sub: mockAdmin.id,
      });
    });
  });
});
*/
