

const initialState= {
  firstName: 'Best', lastName: 'Boy', handle: 'gooddoggo',
  profilePicture: '/images/user.jpg', 	bannerPicture: '/images/banner.jpg',
  bio: 'Dogs are the best. This tuiter is even better then the rating dogs tuiter. This doggo, like most doggos, likes to chase cats.',
  website: 'youtube.com/cutedogs',
  location: 'Boston, MA',	dateOfBirth: '7/7/0000',	dateJoined: '4/20013',
  followingCount: 12,	followersCount: 18000
};


const Profile = (state = initialState, action) => {
        switch (action.type) {
            case 'update-profile':
                const newProf = {
                    firstName: action.firstName,
                    lastName: action.lastName,
                    handle: action.handle,
                    profilePicture: '/images/user.jpg',
                    bannerPicture: '/images/banner.jpg',
                    bio: action.bio,
                    website: action.website,
                    location: action.location,
                    dateOfBirth: action.dateOfBirth,
                    dateJoined: '4/2009',
                    followingCount: 312,
                    followersCount: 180

                }
                return newProf;
            case 'undo-edit':
                return action.prof;

            default:
                return initialState;

        }

}
export default Profile;