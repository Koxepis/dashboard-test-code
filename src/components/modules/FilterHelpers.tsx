import { FormControl, Input } from "@vechaiui/react";
interface Props {
  filter: any;
  setFilter: (string: String) => {};
}

const FilterHelpers: React.FC<Props> = ({ filter, setFilter }) => {
  return (
    <>
      <div className="flex min-w-full py-8">
        <FormControl id="email">
          <span>
            <Input
              placeholder="Try to search for anything ..."
              variant="outline"
              color="gray"
              className="focus:ring-gray-600"
              value={filter || ""}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setFilter(event.target.value)
              }
            />
          </span>
        </FormControl>
      </div>
    </>
  );
};

export default FilterHelpers;
