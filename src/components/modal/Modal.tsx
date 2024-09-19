 
 
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle} from "../ui/dialog";
import { Button } from "../ui/button";

 

const Modal = ({ isOpen, setIsOpen }: { isOpen: boolean, setIsOpen:any}) => {
    return (
        <div>
            <Dialog open={isOpen}>
                 
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Edit profile</DialogTitle>
                        <DialogDescription>
                            Make changes to your profile here. Click save when you're done.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                         
                         
                    </div>
                    <DialogFooter>
                          <Button onClick={()=>setIsOpen(false)}>Sign Up</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default Modal;