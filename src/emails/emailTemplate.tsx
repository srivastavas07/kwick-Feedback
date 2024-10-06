import {
    Html,
    Head,
    Font,
    Preview,
    Heading,
    Row,
    Section,
    Text
  } from '@react-email/components';
type VerificationProps = {
    username:string,
    otp:string,
}
export default function verificationEmailTemplate({username,otp}:VerificationProps){
    return(
        <Html>
            <h1>Hello {username}</h1>
            <p>Your OTP for verification is {otp}</p>
        </Html>
    )
}
