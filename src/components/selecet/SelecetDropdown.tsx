import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const SelectDropdown = () => {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder="Theme" />
            </SelectTrigger>
            <SelectContent >
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
            </SelectContent>
        </Select>
    );
};

export default SelectDropdown;

 