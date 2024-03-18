const profileController = require('../src/controllers/profileController');
const UserProfile = require('../src/models/userProfile');
const User = require('../src/models/User');

jest.mock('../src/models/userProfile');
jest.mock('../src/models/User');

describe('Profile Controller', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe('getEditProfileForm', () => {
    it('should fetch user details and user profile', async () => {
      const req = { body: { userSession: { user: { id: 'userId' } } } };
      const res = { json: jest.fn() };
      const mockUserProfile = { _id: 'userProfileId' };
      const mockUser = { username: 'username', email: 'email', password: 'password' };

      UserProfile.findOne.mockResolvedValueOnce(mockUserProfile);
      User.findById.mockResolvedValueOnce(mockUser);

      await profileController.getEditProfileForm(req, res);

      expect(UserProfile.findOne).toHaveBeenCalledWith({ user: 'userId' });
      expect(User.findById).toHaveBeenCalledWith('userId');
      expect(res.json).toHaveBeenCalledWith({ userProfile: mockUserProfile, userDetails: { username: 'username', email: 'email', password: 'password' } });
    });

    it('should create a new user profile if not found', async () => {
      const req = { body: { userSession: { user: { id: 'userId' } } } };
      const res = { json: jest.fn() };
      const mockUser = { username: 'username', email: 'email', password: 'password' };

      UserProfile.findOne.mockResolvedValueOnce(null);
      UserProfile.prototype.save = jest.fn(); // Mocking the save method
      User.findById.mockResolvedValueOnce(mockUser);

      await profileController.getEditProfileForm(req, res);

      expect(UserProfile.findOne).toHaveBeenCalledWith({ user: 'userId' });
      expect(UserProfile.prototype.save).toHaveBeenCalled();
      expect(res.json).toHaveBeenCalled();
    });

    it('should handle errors', async () => {
      const req = { body: { userSession: { user: { id: 'userId' } } } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      UserProfile.findOne.mockRejectedValueOnce(new Error('User not found'));

      await profileController.getEditProfileForm(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Server Error' });
    });
  });

  describe('updateProfile', () => {
    it('should update user profile', async () => {
      const req = { body: { email: 'newemail@example.com', gender: 'male', dob: new Date(), userSession: { user: { id: 'userId' } } } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };
      const mockUserProfile = { _id: 'userProfileId' };
      const mockUser = { _id: 'userId' };

      UserProfile.findOne.mockResolvedValueOnce(mockUserProfile);
      UserProfile.save = jest.fn(); // Mocking the save method directly on UserProfile
      User.findById.mockResolvedValueOnce(mockUser);
      User.save = jest.fn(); // Mocking the save method directly on User

      await profileController.updateProfile(req, res);

      expect(UserProfile.findOne).toHaveBeenCalledWith({ user: 'userId' });
      expect(UserProfile.save).toHaveBeenCalled();
      expect(User.findById).toHaveBeenCalledWith('userId');
      expect(User.save).toHaveBeenCalled();
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ message: 'Profile updated successfully' });
    });

    it('should handle errors', async () => {
      const req = { body: { email: 'newemail@example.com', gender: 'male', dob: new Date(), userSession: { user: { id: 'userId' } } } };
      const res = { status: jest.fn().mockReturnThis(), json: jest.fn() };

      UserProfile.findOne.mockRejectedValueOnce(new Error('Failed to fetch user details'));

      await profileController.updateProfile(req, res);

      expect(res.status).toHaveBeenCalledWith(500);
      expect(res.json).toHaveBeenCalledWith({ message: 'Server Error' });
    });
  });
});
