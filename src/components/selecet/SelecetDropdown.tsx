import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const SelectDropdown = ({items,selectValue}:{items:string[],selectValue:string}) => {
    return (
        <Select>
            <SelectTrigger className="w-full">
                <SelectValue placeholder={selectValue} />
            </SelectTrigger>
            <SelectContent >
                {
                    items.map(v => <SelectItem key={Math.random()} value={v}>{v}</SelectItem>)
               }
            </SelectContent>
        </Select>
    );
};

export default SelectDropdown;

 