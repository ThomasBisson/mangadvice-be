// import { ApolloError } from 'apollo-server-express';

// import { hash, compare } from 'bcrypt';

// // import { issueToken, serializeUser } from '../../functions';

// // import {
// //   UserRegisterationRules,
// //   UserAuthenticationRules,
// // } from '../../validators';

// export default {
//   Query: {
//     authUserProfile: async (_, {}, { user }) => user,
//     authenticateUser: async (_, { username, password }, { User }) => {
//       await UserAuthenticationRules.validate(
//         {
//           username,
//           password,
//         },
//         {
//           abortEarly: false,
//         },
//       );
//       try {
//         // Find user by username
//         let user = await User.findOne({
//           username,
//         });
//         if (!user) {
//           throw new ApolloError('Username not found.');
//         }
//         // Check for the password
//         const isMatch = await compare(password, user.password);
//         if (!isMatch) {
//           throw new ApolloError('Invalid password.');
//         }
//         // Serialize User
//         user = user.toObject();
//         user.id = user._id;
//         user = serializeUser(user);
//         // Issues New Authentication Token
//         const token = await issueToken(user);
//         return {
//           user,
//           token,
//         };
//       } catch (err) {
//         throw new ApolloError(err.message, 403);
//       }
//     },
//   },
//   Mutation: {
//     registerUser: async (_, { newUser }, { User }) => {
//       await UserRegisterationRules.validate(newUser, {
//         abortEarly: false,
//       });

//       try {
//         const { email, username } = newUser;

//         // First Check if the username is already taken
//         let user;

//         user = await User.findOne({
//           username,
//         });
//         if (user) {
//           throw new ApolloError('Username is already taken.');
//         }
//         // If the email taken
//         user = await User.findOne({
//           email,
//         });
//         if (user) {
//           throw new ApolloError('Email is already registred.');
//         }
//         // Create new User Instance
//         user = new User(newUser);
//         // Hash the password
//         user.password = await hash(newUser.password, 10);
//         // The Save the user to the database
//         let result = await user.save();
//         result = result.toObject();
//         result.id = result._id;
//         result = serializeUser(result);
//         // Issue the Authentication Token
//         const token = await issueToken(result);
//         return {
//           token,
//           user: result,
//         };
//       } catch (err) {
//         console.log(err);
//         throw new ApolloError(err.message, 400);
//       }
//     },
//   },
// };
