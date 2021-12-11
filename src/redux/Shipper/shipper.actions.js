import shipperTypes from './shipper.types'
import { auth, db, storage } from '../../firebase/utils';

// AUTH
export const setCurrentProperty = () => ({
    type: shipperTypes.SIGN_IN_SUCCESS,
    payload: true,
  });

export const signInShipper = ({email, password}) => {
  try{
    console.log('Email & Password from shipper action')
    console.log(email,' <=> ', password)
  }catch(err){
    console.log('catch from signin Shipper')
    console.log(err)
  }
};
export const signUpShipper = ({name, email, password, type}) => {
  let createdAt = new Date();
  let updatedAt = new Date();
  let deletedAt = new Date();
  try{
    console.log('Data from shipper action')
    console.log(name, email, password, type, createdAt, updatedAt, deletedAt)
  }catch(err){
    console.log('catch from signup Shipper')
    console.log(err)
  }
};
export const recoveryPasswordShipper = ({email}) => {
  try{
    console.log('Email from shipper action')
    console.log(email)
  }catch(err){
    console.log('catch from recovery Shipper')
    console.log(err)
  }
};
