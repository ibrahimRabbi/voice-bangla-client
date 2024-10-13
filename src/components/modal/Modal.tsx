 import { Dialog, DialogContent, DialogTitle} from "../ui/dialog";
import { Button } from "../ui/button";
import OtpInput from "../Otp/OtpInput";

 

const Modal = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen:any}) => {
    return (
        <div>
            <Dialog open={isOpen}>
                 
                <DialogContent className="sm:max-w-[425px]">
                    <div className="grid gap-4 py-4 text-center">
                        <DialogTitle className="font-bold">OTP Verification</DialogTitle>
                        <OtpInput />     
                        <p>Verification code not received? <button className="text-sky-400">Resend</button></p>
                        <Button className="bg-[#ECE64A] hover:bg-[#dfd936] text-zinc-700 font-bold mt-14" onClick={() => setIsOpen(false)}>Sign Up</Button>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Modal;