import bcrypt from 'bcrypt'

export const hashPassword=async(password)=>{
    const saltrounds=5;
    const hashedPassword= await bcrypt.hash(password,saltrounds);
    return hashedPassword;
}
export const comparePassword=(password,hashedPassword)=>{
    return bcrypt.compare(password,hashedPassword);
}