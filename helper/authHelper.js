import bcrypt from "bcrypt";


// tp hash password
export const hashPassword = async (password) => {
  try {

    //number of rounds to hash 
    const saltRounds = 10;
    
    // get hash password from bcrypt module
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    return hashedPassword;
  } catch (error) {
    console.log(error);
  }
};


// compare password 
export const comparePassword = async (password, hashedPassword) => {
  return bcrypt.compare(password, hashedPassword);
};