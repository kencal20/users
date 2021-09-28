import { getFirestore } from "redux-firestore";

export const addUser = (newUser) => {
  // newUser.id = Math.random().toString();
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .add(newUser)
      .then((docs) => {
        console.log(docs);
      });
  };
  // return{
  //    type: "ADD_USER",
  //   payload: newUser,
  // }
};

export const editUser = (updatedUser) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .doc(updatedUser.id)
      .set(updatedUser)
      .then(() => {});
  };
};

export const deleteUser = (userId) => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .doc(userId)
      .delete()
      .then(() => {});
  };
};

export const getAllUsers = () => {
  return (dispatch, state, { getFirestore }) => {
    getFirestore()
      .collection("users")
      .onSnapshot((snapshot) => {
        let users = [];
        snapshot.forEach((doc) => {
          users.push({ ...doc.data(), id: doc.id });
        });

        dispatch({
          type: "SET_ALL_USERS",
          payload: users,
        });
      });
  };
};
