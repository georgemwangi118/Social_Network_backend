const router = require("express").Router();
const {
  userById,
  allUsers,
  getUser,
  updateUser,
  deleteUser,
  userPhoto,
  addFollowing,
  addFollower,
  removeFollower,
  removeFollowing,
  findPeople,
  hasAuthorization,
} = require("../controllers/user");
const { requireSignin } = require("../controllers/auth");

router.put("/user/follow", requireSignin, addFollowing, addFollower);
router.put("/user/unfollow", requireSignin, removeFollowing, removeFollower);

router.get("/users", allUsers);
router.get("/user/:userId", requireSignin, getUser);
router.put("/user/:userId", requireSignin, hasAuthorization, updateUser);
router.delete("/user/:userId", requireSignin, hasAuthorization, deleteUser);

//photo
router.get("/user/photo/:userId", userPhoto);

//who to follow
router.get("/user/findpeople/:userId", requireSignin, findPeople);

//any route containing :userId, our app will first execute userByID()
router.param("userId", userById);

module.exports = router;
